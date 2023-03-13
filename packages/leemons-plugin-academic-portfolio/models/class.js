module.exports = {
  modelName: 'class',
  collectionName: 'class',
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
    subjectType: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::subject-types',
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
    class: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::class',
      },
      */
    },
    classroom: {
      type: 'string',
    },
    seats: {
      type: 'integer',
    },
    image: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    virtualUrl: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
