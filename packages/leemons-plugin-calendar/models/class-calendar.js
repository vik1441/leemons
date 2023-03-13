module.exports = {
  modelName: 'class-calendar',
  collectionName: 'class-calendar',
  options: {
    useTimestamps: true,
  },
  attributes: {
    calendar: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_calendar::calendars',
      },
      */
    },
    class: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::class',
      },
      */
    },
    program: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_academic-portfolio::programs',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
