module.exports = {
  modelName: 'profile-contacts',
  collectionName: 'profile-contacts',
  options: {
    useTimestamps: true,
  },
  attributes: {
    fromProfile: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::profiles',
      },
      */
    },
    toProfile: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::profiles',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
