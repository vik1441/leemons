module.exports = {
  modelName: 'program-subjects-credits',
  collectionName: 'program-subjects-credits',
  options: {
    useTimestamps: true,
  },
  attributes: {
    program: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
      */
    },
    subject: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::subjects',
      },
      */
    },
    // Curso solo seteado si el internalId tiene especificado un curso
    course: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::groups',
      },
      */
    },
    credits: {
      type: 'integer',
    },
    internalId: {
      type: 'string',
    },
    compiledInternalId: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
