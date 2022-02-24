module.exports = {
  modelName: 'user-task-note',
  collectionName: 'user-task-note',
  options: {
    useTimestamps: true,
  },
  attributes: {
    evaluation: {
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
    },
    avgScore: {
      type: 'float',
    },
    customAvgScore: {
      type: 'float',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
