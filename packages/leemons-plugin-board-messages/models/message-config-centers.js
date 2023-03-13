module.exports = {
  modelName: 'message-config-centers',
  collectionName: 'message-config-centers',
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
    center: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
