module.exports = {
  modelName: 'class-group',
  collectionName: 'class-group',
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
    group: {
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
