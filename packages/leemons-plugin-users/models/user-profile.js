module.exports = {
  modelName: 'user-profile',
  collectionName: 'user-profile',
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
    role: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::roles',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
