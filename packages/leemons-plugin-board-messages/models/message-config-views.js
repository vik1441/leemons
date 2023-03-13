module.exports = {
  modelName: 'message-config-views',
  collectionName: 'message-config-views',
  options: {
    useTimestamps: true,
  },
  attributes: {
    messageConfig: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_board-messages::message-config',
      },
      */
    },
    userAgent: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
