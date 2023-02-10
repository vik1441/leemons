const { table } = require('../tables');

async function updatePackage(id, data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) =>
      table.packages.set(
        { id },
        {
          ...data,
        },
        { transacting }
      ),
    table.packages,
    _transacting
  );
}

module.exports = updatePackage;
