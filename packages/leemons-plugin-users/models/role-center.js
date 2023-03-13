module.exports = {
  modelName: 'role-center',
  collectionName: 'role-center',
  options: {
    useTimestamps: true,
  },
  attributes: {
    role: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::roles',
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
