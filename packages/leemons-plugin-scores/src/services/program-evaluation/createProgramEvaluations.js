const { table } = require('../tables');
const { validateAddProgramEvaluations } = require('../../validations/forms');
const { getProgramEvaluationsByProgramIds } = require('./getProgramEvaluationsByProgramIds');

async function addWithChildrens({ childrens, ...data }, program, { parent, transacting } = {}) {
  const evaluation = await table.programEvaluations.create(
    {
      ...data,
      program,
      parent,
    },
    { transacting }
  );
  await Promise.all(
    childrens.map(async (child) => {
      await addWithChildrens(child, program, { parent: evaluation.id, transacting });
    })
  );
}

async function createProgramEvaluations(data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      await validateAddProgramEvaluations(data, { transacting });
      await Promise.all(
        data.evaluations.map((evaluation) =>
          addWithChildrens(evaluation, data.program, { transacting })
        )
      );
      return (await getProgramEvaluationsByProgramIds(data.program, { transacting }))[0];
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { createProgramEvaluations };
