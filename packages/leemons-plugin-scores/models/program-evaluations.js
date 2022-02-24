module.exports = {
  modelName: 'program-evaluations',
  collectionName: 'program-evaluations',
  options: {
    useTimestamps: true,
  },
  attributes: {
    program: {
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
    },
    name: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    start: {
      type: 'date',
      options: {
        notNull: true,
      },
    },
    end: {
      type: 'date',
      options: {
        notNull: true,
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
