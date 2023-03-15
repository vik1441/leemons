// TODO: Add columns and select distinct
const _ = require('lodash');
const { parseFilters } = require('leemons-utils');
const randomString = require('leemons-utils/lib/randomString');
const pmap = require('p-map');
const buildQuery = require('./buildQuery');

const rollbacks = {};

function transformId(result, reverse = false) {
  const incoming = reverse ? 'id' : '_id';
  const outgoing = reverse ? '_id' : 'id';

  if (Array.isArray(result)) {
    return result.map((item) => {
      if (item[incoming]) {
        const _item = item?.toJSON?.call(item) || item;
        const returnObj = {
          [outgoing]: _item[incoming]?.toString() || _item[incoming],
          ..._item,
        };

        delete returnObj[incoming];
        return returnObj;
      }
      return item?.toJSON?.call(item) || item;
    });
  }

  if (result) {
    const item = result?.toJSON?.call(result) || result;
    if (item[incoming]) {
      const returnObj = {
        [outgoing]: item[incoming]?.toString() || item[incoming],
        ...item,
      };
      delete returnObj[incoming];
      return returnObj;
    }
  }

  return result;
}

function generateQueries(model) {
  const MongooseModel = model.model;
  let modelActions = {};

  // ---------------------------------------------------------------------------------------------------------
  // TRANSACTIONS & ROLLBACK

  const selectAttributes = (attributes) =>
    _.pickBy(attributes, (value, key) => {
      if (key === 'deleted') {
        return model.schema.attributes.deleted !== null || model.schema.allAttributes.includes(key);
      }
      if (key === 'deleted_at') {
        return (
          (model.schema.attributes.deleted !== null && model.schema.options.useTimestamps) ||
          model.schema.allAttributes.includes(key)
        );
      }
      return model.schema.allAttributes.includes(key);
    });

  async function rollback(transacting) {
    if (
      _.isString(transacting) &&
      rollbacks[transacting] &&
      rollbacks[transacting].actions &&
      rollbacks[transacting].actions.length
    ) {
      // Al empezar a hacer rollback marcamos como que hay un error
      rollbacks[transacting].error = true;
      // Solo empezamos a hacer rollback si no quedan acciones pendientes del backend
      if (rollbacks[transacting].pendingActions === 0) {
        const curAction = rollbacks[transacting].actions[rollbacks[transacting].actions.length - 1];
        if (curAction.action === 'removeOne') {
          await curAction.modelActions.delete({ id: curAction.data });
        }
        if (curAction.action === 'update') {
          await curAction.modelActions.update({ id: curAction.data.id }, curAction.data);
        }
        if (curAction.action === 'updateMany') {
          await Promise.all(
            _.map(curAction.data, (item) => curAction.modelActions.update({ id: item.id }, item))
          );
        }
        if (curAction.action === 'create') {
          await curAction.modelActions.create(curAction.data);
        }
        if (curAction.action === 'createMany') {
          await Promise.all(_.map(curAction.data, (item) => curAction.modelActions.create(item)));
        }
        rollbacks[transacting].actions.pop();
        await rollback(transacting);
      } else {
        setTimeout(() => {
          rollback(transacting);
        }, 10);
      }
    }
  }

  function initRollbackIfNeed(transacting) {
    if (_.isString(transacting)) {
      if (!rollbacks[transacting])
        rollbacks[transacting] = {
          actions: [],
          error: false,
          pendingActions: 0,
        };
    }
  }

  function transactingHasError(transacting) {
    if (_.isString(transacting)) {
      initRollbackIfNeed(transacting);
      return rollbacks[transacting].error;
    }
    return false;
  }

  function finishRollback(transacting) {
    if (_.isString(transacting)) {
      if (rollbacks[transacting]) {
        rollbacks[transacting] = undefined;
        delete rollbacks[transacting];
      }
    }
  }

  async function transaction(f) {
    if (model.config.useCustomRollback) {
      const id = randomString();
      try {
        const result = await f(id);
        finishRollback(id);
        return result;
      } catch (e) {
        console.error(e);
        if (!transactingHasError()) await rollback(id);
        throw e;
      }
    }

    return model.ODM.transaction(f);
  }

  async function timeoutPromise(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async function reTry(func, args, time = 10, n = 0) {
    try {
      return await func(...args);
    } catch (e) {
      /*
      const str = `${e.code} ${e.message} ${e.sqlMessage}`;
      if (
        n < 10000 &&
        (str.toLowerCase().indexOf('deadlock') >= 0 ||
          str.toLowerCase().indexOf('timeout') >= 0 ||
          str.toLowerCase().indexOf('ER_CON_COUNT_ERROR') >= 0)
      ) {
        await timeoutPromise(time);
        return reTry(func, args, time, n + 1);
      }
      */
      console.error(e);
      throw e;
    }
  }

  function addToRollbacks(transacting, action, data) {
    if (_.isString(transacting)) {
      initRollbackIfNeed(transacting);
      rollbacks[transacting].actions.push({ action, data, modelActions });
    }
  }

  function addPendingTransacting(transacting) {
    if (_.isString(transacting)) {
      initRollbackIfNeed(transacting);
      rollbacks[transacting].pendingActions++;
    }
  }

  function lessPendingTransacting(transacting) {
    if (_.isString(transacting)) {
      initRollbackIfNeed(transacting);
      rollbacks[transacting].pendingActions--;
    }
  }

  // ------------------------------------------------------------------------------------------
  // METHODS

  async function create(newItem, { transacting } = {}) {
    if (!transactingHasError(transacting)) {
      try {
        addPendingTransacting(transacting);

        if (newItem.id) {
          // eslint-disable-next-line no-param-reassign
          newItem._id = newItem.id;
        }

        const item = new MongooseModel(newItem);
        const response = await item.save();
        const result = transformId(response);
        addToRollbacks(transacting, 'removeOne', result.id);
        lessPendingTransacting(transacting);
        return result;
      } catch (e) {
        lessPendingTransacting(transacting);
        throw e;
      }
    }
    return null;
  }

  async function createMany(newItems, { transacting } = {}) {
    if (!Array.isArray(newItems)) {
      throw new Error(
        `createMany expected an array, instead got ${
          typeof newItems === 'object' ? JSON.stringify(newItems) : newItems
        }`
      );
    }

    if (transacting) {
      return pmap(newItems, (newItem) => create(newItem, { transacting }));
    }

    // If we are not on a transaction, make a new transaction
    return transaction((t) => pmap(newItems, (newItem) => create(newItem, { transacting: t })));
  }

  async function find(query = {}, { transacting } = {}) {
    const filters = parseFilters({ filters: query, model });
    const { $extras, ...finalQuery } = buildQuery(model, filters);

    const response = await $extras(MongooseModel.find(finalQuery, undefined));

    return transformId(response);
  }

  async function findOne(query = {}, { transacting } = {}) {
    const filters = parseFilters({ filters: query, model });
    const { $extras, ...finalQuery } = buildQuery(model, filters);

    // console.dir(finalQuery, { depth: null });

    const response = await $extras(MongooseModel.findOne(finalQuery, undefined, { debug: true }));

    /*
    if (response === null) {
      const err = new Error('entry.notFound');
      err.status = 404;
      throw err;
    }
    */

    return transformId(response);
  }

  async function count(query = {}, { transacting } = {}) {
    const filters = parseFilters({ filters: query, model });
    const { $extras, ...finalQuery } = buildQuery(model, filters);

    const response = await $extras(MongooseModel.countDocuments(finalQuery));
    return transformId(response);
  }

  async function search(query = {}, page = 0, size = 10, { transacting } = {}) {
    if (size < 1) {
      throw new Error('The size should be at least 1');
    }
    if (page < 0) {
      throw new Error('The page should be at least 0');
    }

    const totalCount = await count(query, { transacting });
    const totalPages = Math.floor(totalCount / size);

    if (page > totalPages) {
      return {
        items: [],
        count: 0,
        totalCount,
        page,
        size,
        nextPage: page < totalPages ? page + 1 : null,
        prevPage: page > 0 ? page - 1 : null,
      };
    }

    const items = await find({ ...query, $limit: size, $offset: page * size }, { transacting });
    return {
      items: transformId(items),
      count: items.length,
      totalCount,
      page,
      size,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page > 0 ? page - 1 : null,
    };
  }

  async function update(query = {}, item, { transacting, prevItem } = {}) {
    if (!transactingHasError(transacting)) {
      try {
        addPendingTransacting(transacting);
        const filters = parseFilters({ filters: query, model });
        const { $extras, ...finalQuery } = buildQuery(model, filters);

        if (!prevItem) {
          // eslint-disable-next-line no-param-reassign
          prevItem = await findOne(query, { transacting });
        }

        if (!prevItem) {
          const err = new Error('entry.notFound');
          err.status = 404;
          throw err;
        }

        if (!_.has(item, 'updated_at')) {
          _.set(item, 'updated_at', new Date());
        }

        await $extras(MongooseModel.updateOne(finalQuery, transformId(item)));

        const attributes = selectAttributes(item);

        if (Object.keys(attributes).length > 0) {
          addToRollbacks(transacting, 'update', prevItem);
          lessPendingTransacting(transacting);
        }
        lessPendingTransacting(transacting);

        const response = await findOne(query, { transacting });
        return transformId(response);
      } catch (e) {
        lessPendingTransacting(transacting);
      }
    }
    return null;
  }

  async function updateMany(query = {}, item, { transacting } = {}) {
    if (!transactingHasError(transacting)) {
      try {
        addPendingTransacting(transacting);
        const filters = parseFilters({ filters: query, model });
        const { $extras, ...finalQuery } = buildQuery(model, filters);

        const prevItems = await find(query, { transacting });

        /*
        if (!prevItems || (_.isArray(prevItems) && prevItems.length === 0)) {
          const err = new Error('entry.notFound');
          err.status = 404;
          throw err;
        }
        */

        if (!_.has(item, 'updated_at')) {
          _.set(item, 'updated_at', new Date());
        }

        const response = await $extras(MongooseModel.updateMany(finalQuery, transformId(item)));

        if (response.modifiedCount > 0 && _.isArray(prevItems) && prevItems.length > 0) {
          addToRollbacks(transacting, 'updateMany', prevItems);
        }

        lessPendingTransacting(transacting);
        return { count: response.modifiedCount };
      } catch (e) {
        lessPendingTransacting(transacting);
        throw e;
      }
    }
    return null;
  }

  async function set(query = {}, item, { transacting } = {}) {
    try {
      const entry = await findOne(query, { transacting });

      if (entry) {
        return update(query, item, { transacting, prevItem: entry });
      }

      return create({ ...query, ...item }, { transacting });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async function setMany(newItems, { transacting } = {}) {
    if (!Array.isArray(newItems)) {
      throw new Error(
        `setMany expected an array, instead got ${
          typeof newItems === 'object' ? JSON.stringify(newItems) : newItems
        }`
      );
    }
    if (transacting) {
      return pmap(newItems, (newItem) => set(newItem.query, newItem.item, { transacting }));
    }

    // If we are not on a transaction, make a new transaction
    return transaction((t) =>
      pmap(newItems, (newItem) => set(newItem.query, newItem.item, { transacting: t }))
    );
  }

  async function deleteOne(
    query = {},
    { soft = model.schema.options.softDelete || false, transacting } = {}
  ) {
    if (!transactingHasError(transacting)) {
      try {
        addPendingTransacting(transacting);
        const filters = parseFilters({ filters: query, model });
        const finalQuery = buildQuery(model, filters);

        const entry = await findOne(query, { transacting });

        if (!entry) {
          const err = new Error('entry.notFound');
          err.status = 404;
          throw err;
        }

        if (soft) {
          const fields = { deleted: true, deleted_at: new Date() };
          if (model.schema.options.useTimestamps) {
            fields.deleted_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
          }

          await MongooseModel.updateOne(finalQuery, { deleted: true, deleted_at: new Date() });

          addToRollbacks(transacting, 'update', entry);
          lessPendingTransacting(transacting);

          return { soft: true, deleted: true };
        }

        const response = await MongooseModel.deleteOne(finalQuery);

        if (response.deletedCount === 0) {
          const err = new Error('entry.notFound');
          err.status = 404;
          throw err;
        }

        addToRollbacks(transacting, 'create', entry);
        lessPendingTransacting(transacting);
        return { soft: false, deleted: true };
      } catch (e) {
        lessPendingTransacting(transacting);
        throw e;
      }
    }
    return null;
  }

  async function deleteMany(
    query = {},
    { soft = model.schema.options.softDelete || false, transacting } = {}
  ) {
    if (!transactingHasError(transacting)) {
      try {
        addPendingTransacting(transacting);

        if (soft) {
          const { count: updateCount } = await updateMany(
            query,
            { deleted: true, deleted_at: new Date() },
            { transacting }
          );
          return { soft: true, count: updateCount };
        }

        const filters = parseFilters({ filters: query, model });
        const { $extras, ...finalQuery } = buildQuery(model, filters);

        const prevItems = await find(query, { transacting });

        const response = await $extras(MongooseModel.deleteMany(finalQuery));

        if (response.deletedCount > 0 && _.isArray(prevItems) && prevItems.length > 0) {
          addToRollbacks(transacting, 'createMany', prevItems);
        }

        lessPendingTransacting(transacting);
        return { soft: false, count: response.deletedCount };
      } catch (e) {
        lessPendingTransacting(transacting);
        throw e;
      }
    }
    return null;
  }

  modelActions = {
    create: (...args) => reTry(create, args),
    createMany: (...args) => reTry(createMany, args),
    update: (...args) => reTry(update, args),
    updateMany: (...args) => reTry(updateMany, args),
    delete: (...args) => reTry(deleteOne, args),
    deleteMany: (...args) => reTry(deleteMany, args),
    find: (...args) => reTry(find, args),
    findOne: (...args) => reTry(findOne, args),
    search: (...args) => reTry(search, args),
    count: (...args) => reTry(count, args),
    set: (...args) => reTry(set, args),
    setMany: (...args) => reTry(setMany, args),
    rollback,
    transaction,
  };

  return modelActions;
}

module.exports = generateQueries;
