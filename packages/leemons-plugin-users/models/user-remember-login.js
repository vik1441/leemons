module.exports = {
  modelName: 'user-remember-login',
  collectionName: 'user-remember-login',
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
    profile: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::profiles',
      },
      */
    },
    center: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::centers',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
