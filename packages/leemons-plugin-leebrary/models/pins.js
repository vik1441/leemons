module.exports = {
  modelName: 'pins',
  collectionName: 'pins',
  attributes: {
    asset: {
      specificType: 'string',
    },
    userAgent: {
      references: {
        collection: 'plugins_users::user-agent',
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
