const { table } = require('../tables');
const { validateAddProgramConfig } = require('../../validations/forms');
const { addReviewers } = require('./addReviewers');
const { getProgramConfigByProgramIds } = require('./getProgramConfigByProgramIds');

async function createProgramConfig(data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      await validateAddProgramConfig(data, { transacting });
      const { reviewers, ..._data } = data;
      await Promise.all([
        addReviewers(data.program, reviewers, { transacting }),
        table.programConfigs.create(_data, { transacting }),
      ]);
      return (await getProgramConfigByProgramIds(data.program, { transacting }))[0];
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { createProgramConfig };
