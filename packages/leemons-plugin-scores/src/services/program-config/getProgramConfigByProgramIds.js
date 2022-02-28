const _ = require('lodash');
const { table } = require('../tables');
const { getReviewers } = require('./getReviewers');
const {
  getProgramEvaluationsByProgramIds,
} = require('../program-evaluation/getProgramEvaluationsByProgramIds');

async function getProgramConfigByProgramIds(_ids, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      const ids = _.isArray(_ids) ? _ids : [_ids];
      const [programConfigs, reviewers, evaluations] = await Promise.all([
        table.programConfigs.find({ program_$in: ids }, { transacting }),
        Promise.all(ids.map((id) => getReviewers(id, { transacting }))),
        getProgramEvaluationsByProgramIds(ids, { transacting }),
      ]);

      const programConfigsByProgramId = _.keyBy(programConfigs, 'program');

      return _.map(ids, (id, i) => ({
        ...programConfigsByProgramId[id],
        reviewers: reviewers[i],
        evaluations: evaluations[i],
      }));
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { getProgramConfigByProgramIds };
