const _ = require('lodash');

const { LeemonsValidator } = global.utils;
const {
  stringSchema,
  booleanSchema,
  stringSchemaNullable,
  textSchemaNullable,
} = require('./types');

const savePackageSchema = {
  type: 'object',
  properties: {
    id: stringSchema,
    name: stringSchema,
    tagline: stringSchemaNullable,
    description: textSchemaNullable,
    color: stringSchemaNullable,
    tags: {
      type: 'array',
      items: stringSchema,
    },
    cover: {
      type: ['object', 'string'],
      nullable: true,
    },
    featuredImage: {
      type: ['object', 'string'],
      nullable: true,
    },
    packageFile: {
      type: ['object', 'string'],
      nullable: true,
    },
    introductoryText: { type: 'string', nullable: true },
    content: {
      type: 'string',
      nullable: true,
    },
    program: stringSchemaNullable,
    subjects: {
      type: 'array',
      items: stringSchema,
      nullable: true,
    },
    published: booleanSchema,
  },
  required: ['name'],
  additionalProperties: false,
};

function validateSavePackage(data) {
  const schema = _.cloneDeep(savePackageSchema);
  const validator = new LeemonsValidator(schema);

  if (!validator.validate(data)) {
    throw validator.error;
  }
}

module.exports = {
  validateSavePackage,
};
