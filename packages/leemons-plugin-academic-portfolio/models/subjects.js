module.exports = {
  modelName: 'subjects',
  collectionName: 'subjects',
  options: {
    useTimestamps: true,
  },
  attributes: {
    name: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    program: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
      */
    },
    course: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::groups',
      },
      */
    },
    image: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
