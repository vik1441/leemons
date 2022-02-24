const _ = require('lodash');

const { LeemonsValidator } = global.utils;
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

module.exports = {
  validateAddProgramConfig,
  validateUpdateProgramConfig,
};
