module.exports = {
  modelName: 'message-config-profiles',
  collectionName: 'message-config-profiles',
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
    profile: {
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
