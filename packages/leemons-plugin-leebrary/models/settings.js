module.exports = {
  modelName: 'settings',
  collectionName: 'settings',
  options: {
    useTimestamps: true,
  },
  attributes: {
    defaultCategory: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_leebrary::categories',
      },
      */
    },
    providerName: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
