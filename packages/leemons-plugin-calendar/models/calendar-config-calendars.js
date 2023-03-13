module.exports = {
  modelName: 'calendar-config-calendars',
  collectionName: 'calendar-config-calendars',
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
    config: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_calendar::calendar-configs',
      },
      */
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
