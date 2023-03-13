module.exports = {
  modelName: 'user-agent',
  collectionName: 'user-agent',
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
    role: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::roles',
      },
      */
    },
    reloadPermissions: {
      type: 'boolean',
      options: {
        defaultTo: false,
      },
    },
    datasetIsGood: {
      type: 'boolean',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
