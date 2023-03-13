module.exports = {
  modelName: 'group-user-agent',
  collectionName: 'group-user-agent',
  options: {
    useTimestamps: true,
  },
  attributes: {
    group: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::groups',
      },
      */
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
