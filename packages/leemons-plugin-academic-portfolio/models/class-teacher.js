module.exports = {
  modelName: 'class-teacher',
  collectionName: 'class-teacher',
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
    teacher: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
    // main-teacher | associate-teacher
    type: {
      type: 'string',
      options: {
        defaultTo: 'associate-teacher',
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
