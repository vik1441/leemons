module.exports = {
  modelName: 'class-substage',
  collectionName: 'class-substage',
  options: {
    useTimestamps: true,
  },
  attributes: {
    class: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::class',
      },
      */
    },
    substage: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::groups',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
