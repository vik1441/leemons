module.exports = {
  modelName: 'class-course',
  collectionName: 'class-course',
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
    course: {
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
