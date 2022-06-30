const _ = require('lodash');
const { table } = require('../../tables');

async function duplicateByClass(
  classIds,
  { duplications: dup = {}, transacting: _transacting } = {}
) {
  const duplications = dup;
  return global.utils.withTransaction(
    async (transacting) => {
      const classTeachers = await table.classTeacher.find(
        { class_$in: _.isArray(classIds) ? classIds : [classIds] },
        { transacting }
      );
      await leemons.events.emit('before-duplicate-classes-teachers', {
        classTeachers,
        transacting,
      });

      // ES: Empezamos la duplicación de los items
      // EN: Start the duplication of the items
      const newItems = await Promise.all(
        _.map(classTeachers, ({ id, ...item }) =>
          table.classTeacher.create(
            {
              ...item,
              class:
                duplications.classes && duplications.classes[item.class]
                  ? duplications.classes[item.class].id
                  : item.class,
            },
            { transacting }
          )
        )
      );

      // ES: Añadimos los items duplicados de tal forma que el indice es el id original y el valor es el nuevo item duplicado
      // EN: Add the duplicated items in such a way that the index is the original id and the value is the new duplicated item
      if (!_.isObject(duplications.classTeachers)) duplications.classTeachers = {};
      _.forEach(classTeachers, ({ id }, index) => {
        duplications.classTeachers[id] = newItems[index];
      });

      await leemons.events.emit('after-duplicate-classes-teachers', {
        classTeachers,
        duplications: duplications.classTeachers,
        transacting,
      });
      return duplications;
    },
    table.classTeacher,
    _transacting
  );
}

module.exports = { duplicateByClass };
