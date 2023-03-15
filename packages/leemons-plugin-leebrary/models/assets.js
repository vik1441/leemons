module.exports = {
  modelName: 'assets',
  collectionName: 'assets',
  options: {
    useTimestamps: true,
  },
  attributes: {
    _id: {
      type: 'string',
    },
    name: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    tagline: {
      type: 'string',
    },
    description: {
      type: 'richtext',
    },
    color: {
      type: 'string',
    },
    cover: {
      type: 'string',
    },
    fromUser: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::users',
      },
      */
    },
    fromUserAgent: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_users::user-agent',
      },
      */
    },
    public: {
      type: 'boolean',
    },
    category: {
      type: 'string',
      /*
      references: {
        collection: 'plugins_leebrary::categories',
      },
      */
    },
    indexable: {
      type: 'boolean',
      options: {
        defaultTo: true,
      },
    },
    center: {
      type: 'string',
    },
    program: {
      type: 'string',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
