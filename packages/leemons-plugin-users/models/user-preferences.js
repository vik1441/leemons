module.exports = {
  modelName: 'user-preferences',
  collectionName: 'user-preferences',
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
    gender: {
      type: 'string',
    },
    pronoun: {
      type: 'string',
    },
    pluralPronoun: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
