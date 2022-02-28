const { table } = require('../tables');
const { validateAddProgramConfig } = require('../../validations/forms');
const { addReviewers } = require('./addReviewers');
const { getProgramConfigByProgramIds } = require('./getProgramConfigByProgramIds');
const { createProgramEvaluations } = require('../program-evaluation/createProgramEvaluations');

async function createProgramConfig(data, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      await validateAddProgramConfig(data, { transacting });
      const { reviewers, ..._data } = data;
      await Promise.all([
        addReviewers(data.program, reviewers, { transacting }),
        table.programConfigs.create(_data, { transacting }),
      ]);

      // ES: Si el periodo es custom creamos las evaluaciones que nos tiene que mandar el frontend
      // EN: If the period is custom we create the evaluations that the frontend has to send
      if (data.period === 'custom') {
        await createProgramEvaluations(
          {
            program: data.program,
            evaluations: data.evaluations,
          },
          { transacting }
        );
      } else {
        // TODO Crear evaluaciones de los datos que ya tienen que existir en academic calendar
      }
      return (await getProgramConfigByProgramIds(data.program, { transacting }))[0];
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { createProgramConfig };
