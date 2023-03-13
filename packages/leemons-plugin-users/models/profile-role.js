module.exports = {
  modelName: 'profile-role',
  collectionName: 'profile-role',
  options: {
    useTimestamps: true,
  },
  attributes: {
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
