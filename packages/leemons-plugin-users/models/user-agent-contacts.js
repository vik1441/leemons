module.exports = {
  modelName: 'user-agent-contacts',
  collectionName: 'user-agent-contacts',
  options: {
    useTimestamps: true,
  },
  attributes: {
    fromUserAgent: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
    fromCenter: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::centers',
      },
      */
    },
    fromProfile: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::profiles',
      },
      */
    },
    toUserAgent: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
    toCenter: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::centers',
      },
      */
    },
    toProfile: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::profiles',
      },
      */
    },
    pluginName: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    target: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
