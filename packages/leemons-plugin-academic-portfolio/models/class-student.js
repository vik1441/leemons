module.exports = {
  modelName: 'class-student',
  collectionName: 'class-student',
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
    student: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
