module.exports = {
  modelName: 'bookmarks',
  collectionName: 'bookmarks',
  attributes: {
    asset: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    icon: {
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
