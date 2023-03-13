module.exports = {
  modelName: 'event-calendar',
  collectionName: 'event-calendar',
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
    event: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_calendar::events',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
