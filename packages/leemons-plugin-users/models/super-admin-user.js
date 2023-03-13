module.exports = {
  modelName: 'super-admin-user',
  collectionName: 'super-admin-user',
  options: {
    useTimestamps: true,
  },
  attributes: {
    user: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::users',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
