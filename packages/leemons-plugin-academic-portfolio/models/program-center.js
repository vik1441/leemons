module.exports = {
  modelName: 'program-center',
  collectionName: 'program-center',
  options: {
    useTimestamps: true,
  },
  attributes: {
    program: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::programs',
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
