const { table } = require('../tables');

async function createPackage(data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) =>
      table.packages.create(
        {
          ...data,
        },
        { transacting }
      ),
    table.packages,
    _transacting
  );
}

module.exports = createPackage;
