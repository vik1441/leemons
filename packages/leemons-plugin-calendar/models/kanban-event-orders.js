module.exports = {
  modelName: 'kanban-event-orders',
  collectionName: 'kanban-event-orders',
  options: {
    useTimestamps: true,
  },
  attributes: {
    userAgent: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
    column: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_calendar::kanban-columns',
      },
      */
    },
    events: {
      type: 'text',
      textType: 'mediumText',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
