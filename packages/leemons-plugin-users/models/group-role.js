module.exports = {
  modelName: 'group-role',
  collectionName: 'group-role',
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
