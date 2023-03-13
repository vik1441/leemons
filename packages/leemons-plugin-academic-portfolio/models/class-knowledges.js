module.exports = {
  modelName: 'class-knowledges',
  collectionName: 'class-knowledges',
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
    knowledge: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::knowledges',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
