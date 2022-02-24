module.exports = {
  modelName: 'user-evaluation-notes',
  collectionName: 'user-evaluation-notes',
  options: {
    useTimestamps: true,
  },
  attributes: {
    evaluation: {
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
    },
    userAgent: {
      references: {
        collection: 'plugins_users::user-agent',
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
