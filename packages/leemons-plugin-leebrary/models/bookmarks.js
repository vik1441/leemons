module.exports = {
  modelName: 'bookmarks',
  collectionName: 'bookmarks',
  attributes: {
    asset: {
      specificType: 'string',
    },
    url: {
      type: 'string',
    },
    icon: {
      references: {
        collection: 'plugins_leebrary::files',
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
