module.exports = {
  modelName: 'user-register-password',
  collectionName: 'user-register-password',
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
    code: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
