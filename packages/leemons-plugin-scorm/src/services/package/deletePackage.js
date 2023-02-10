/* eslint-disable no-param-reassign */
const _ = require('lodash');
const { table } = require('../tables');

async function deletePackage(id, { userSession, transacting: _transacting } = {}) {
  const { assignables } = leemons.getPlugin('assignables').services;
  return global.utils.withTransaction(
    async (transacting) => {
      const { versions } = await assignables.removeAssignable(id, {
        userSession,
        transacting,
        removeAll: 1,
      });

      const packages = await table.packages.find(
        {
          assignable_$in: versions,
        },
        { transacting, columns: ['id'] }
      );
      const packagesIds = _.map(packages, 'id');

      await table.packages.deleteMany({ id_$in: packagesIds }, { userSession, transacting });

      return true;
    },
    table.packages,
    _transacting
  );
}

module.exports = deletePackage;
