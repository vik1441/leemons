module.exports = {
  modelName: 'notifications',
  collectionName: 'notifications',
  options: {
    useTimestamps: true,
  },
  attributes: {
    event: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_calendar::events',
      },
      */
    },
    date: {
      type: 'datetime',
      options: {
        notNull: true,
      },
    },
    state: {
      type: 'string',
      enum: ['active', 'sending', 'sended', 'error'],
      options: {
        notNull: true,
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
