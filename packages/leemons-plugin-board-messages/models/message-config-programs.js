module.exports = {
  modelName: 'message-config-programs',
  collectionName: 'message-config-programs',
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
    program: {
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
