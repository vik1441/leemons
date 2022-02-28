const _ = require('lodash');
const { table } = require('../tables');

async function getProgramEvaluationsByProgramIds(_programIds, { transacting } = {}) {
  const programIds = _.isArray(_programIds) ? _programIds : [_programIds];
  const evaluations = await table.programEvaluations.find(
    {
      program_$in: programIds,
    },
    { transacting }
  );
  const evaluationsByProgramId = _.groupBy(evaluations, 'program');
  return programIds.map((programId) => {
    if (!evaluationsByProgramId[programId]) {
      return [];
    }
    const evaluationsByParentId = _.groupBy(evaluationsByProgramId[programId], 'parent');
    const result = [];
    evaluationsByProgramId[programId].forEach((evaluation) => {
      if (!evaluation.parent) {
        result.push({
          ...evaluation,
          childrens: evaluationsByParentId[evaluation.id] || [],
        });
      }
    });
    return result;
  });
}

module.exports = { getProgramEvaluationsByProgramIds };
