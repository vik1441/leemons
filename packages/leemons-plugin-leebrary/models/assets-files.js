module.exports = {
  modelName: 'assets-files',
  collectionName: 'assets-files',
  attributes: {
    asset: {
      type: 'string',
    },
    file: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_leebrary::files',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
