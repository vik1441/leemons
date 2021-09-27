module.exports = {
  modelName: 'file',
  collectionName: 'file',
  options: {
    useTimestamps: true,
  },
  attributes: {
    name: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    alternativeText: {
      type: 'string'
    },
    caption: {
      type: 'string'
    },
    width: {
      type: 'integer'
    },
    height: {
      type: 'integer'
    },
    formats: {
      type: 'json'
    },
    hash: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    ext: {
      type: 'string',
    },
    mime: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    size: {
      type: 'decimal',
      options: {
        notNull: true,
      }
    },
    url: {
      type: 'string',
      options: {
        notNull: true,
      }
    },
    previewUrl: {
      type: 'string'
    },
    provider: {
      type: 'string',
      options: {
        notNull: true,
      }
    },
    provider_metadata: {
      type: 'json'
    }
  },
  primaryKey: {
    type: 'uuid',
  },
};
