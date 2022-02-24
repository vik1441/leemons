const _ = require('lodash');
const { table } = require('../tables');
const { getReviewers } = require('./getReviewers');

async function getProgramConfigByProgramIds(_ids, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      const ids = _.isArray(_ids) ? _ids : [_ids];
      const [programConfigs, reviewers] = await Promise.all([
        table.programConfigs.find({ program_$in: ids }, { transacting }),
        Promise.all(ids.map((id) => getReviewers(id, { transacting }))),
      ]);

      const programConfigsByProgramId = _.keyBy(programConfigs, 'program');

      return _.map(ids, (id, i) => ({
        ...programConfigsByProgramId[id],
        reviewers: reviewers[i],
      }));
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { getProgramConfigByProgramIds };
