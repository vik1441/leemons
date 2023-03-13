module.exports = {
  modelName: 'program-calendar',
  collectionName: 'program-calendar',
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
