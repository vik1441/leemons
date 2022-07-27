module.exports = {
  modelName: 'assets-files',
  collectionName: 'assets-files',
  attributes: {
    asset: {
      type: 'string',
    },
    file: {
      references: {
        collection: 'plugins_leebrary::files',
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
