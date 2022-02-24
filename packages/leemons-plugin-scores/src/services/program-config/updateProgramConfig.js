const { table } = require('../tables');
const { validateUpdateProgramConfig } = require('../../validations/forms');
const { addReviewers } = require('./addReviewers');
const { getProgramConfigByProgramIds } = require('./getProgramConfigByProgramIds');
const { getReviewers } = require('./getReviewers');
const { removeReviewers } = require('./removeReviewers');

async function updateProgramConfig(data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      await validateUpdateProgramConfig(data, { transacting });
      const { reviewers, ..._data } = data;
      const currentReviewers = await getReviewers(data.program, { transacting });
      await removeReviewers(data.program, currentReviewers, { transacting });

      await Promise.all([
        addReviewers(data.program, reviewers, { transacting }),
        table.programConfigs.update({ program: data.program }, _data, { transacting }),
      ]);
      return (await getProgramConfigByProgramIds(data.program, { transacting }))[0];
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { updateProgramConfig };
