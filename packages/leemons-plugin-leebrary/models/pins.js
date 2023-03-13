module.exports = {
  modelName: 'pins',
  collectionName: 'pins',
  attributes: {
    asset: {
      type: 'string',
    },
    userAgent: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
