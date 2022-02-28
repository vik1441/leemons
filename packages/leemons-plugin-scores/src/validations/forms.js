const _ = require('lodash');

const { LeemonsValidator } = global.utils;
const { forEach } = require('lodash');
const { table } = require('../services/tables');
const {
  stringSchema,
  booleanSchema,
  numberSchema,
  stringSchemaNullable,
  arrayStringRequiredSchema,
} = require('./types');

const addProgramConfigSchema = {
  type: 'object',
  properties: {
    program: stringSchema,
    period: stringSchema,
    periodFinal: stringSchemaNullable,
    teacherCanAddCustomAvgNote: booleanSchema,
    teacherReminderPeriod: stringSchemaNullable,
    teacherReminderNumberOfPeriods: numberSchema,
    reviewers: arrayStringRequiredSchema,
    evaluations: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: true,
      },
    },
  },
  required: ['program', 'period', 'reviewers'],
  additionalProperties: false,
};

async function validateAddProgramConfig(data, { transacting } = {}) {
  const validator = new LeemonsValidator(addProgramConfigSchema);

  if (!validator.validate(data)) {
    throw validator.error;
  }

  const programConfig = await table.programConfigs.count(
    { program: data.program },
    { transacting }
  );

  if (programConfig > 0) {
    throw new Error('Program config already exists');
  }

  if (data.period !== 'custom' && !data.periodFinal) {
    throw new Error('Period final is required');
  }
  if (data.period === 'custom' && data.evaluations.length === 0) {
    throw new Error('Evaluations are required');
  }
}

const updateProgramConfigSchema = {
  type: 'object',
  properties: {
    program: stringSchema,
    teacherCanAddCustomAvgNote: booleanSchema,
    reviewers: arrayStringRequiredSchema,
  },
  required: ['program', 'reviewers'],
  additionalProperties: false,
};

async function validateUpdateProgramConfig(data, { transacting } = {}) {
  const validator = new LeemonsValidator(updateProgramConfigSchema);

  if (!validator.validate(data)) {
    throw validator.error;
  }

  const programConfig = await table.programConfigs.count(
    { program: data.program },
    { transacting }
  );

  if (programConfig < 0) {
    throw new Error('Program config does not exist');
  }
}

const addProgramEvaluationsSchema = {
  type: 'object',
  properties: {
    program: stringSchema,
    evaluations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: stringSchema,
          start: stringSchema,
          end: stringSchema,
          childrens: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: stringSchema,
                start: stringSchema,
                end: stringSchema,
              },
              required: ['name', 'start', 'end'],
              additionalProperties: false,
            },
          },
        },
        required: ['name', 'start', 'end'],
        additionalProperties: false,
      },
    },
  },
  required: ['program', 'evaluations'],
  additionalProperties: false,
};

async function validateAddProgramEvaluations(data, { transacting } = {}) {
  const validator = new LeemonsValidator(addProgramEvaluationsSchema);

  if (!validator.validate(data)) {
    throw validator.error;
  }

  forEach(data.evaluations, (evaluation) => {
    const evaluationStart = new Date(evaluation.start);
    const evaluationEnd = new Date(evaluation.end);

    if (evaluationStart > evaluationEnd) {
      throw new Error('Evaluation start date must be before evaluation end date');
    }

    forEach(evaluation.childrens, (children) => {
      const childrenStart = new Date(children.start);
      const childrenEnd = new Date(children.end);

      if (childrenStart > childrenEnd) {
        throw new Error('Children start date must be before children end date');
      }
      // ES: Comprobamos que las fechas de los hijos esten dentro de las fechas de la evaluacion
      // EN: Check that the children dates are inside the evaluation dates
      if (
        childrenStart >= evaluationStart &&
        childrenStart <= evaluationEnd &&
        childrenEnd >= evaluationStart &&
        childrenEnd <= evaluationEnd
      ) {
        throw new Error('Children start and end dates must be inside evaluation dates');
      }
    });
  });

  const programConfig = await table.programConfigs.count(
    { program: data.program },
    { transacting }
  );

  if (programConfig === 0) {
    throw new Error('Program config does not exist');
  }

  const programEvaluations = await table.programEvaluations.count(
    { program: data.program },
    { transacting }
  );

  if (programEvaluations > 0) {
    throw new Error('Program evaluations already exists');
  }
}

module.exports = {
  validateAddProgramConfig,
  validateUpdateProgramConfig,
  validateAddProgramEvaluations,
};
