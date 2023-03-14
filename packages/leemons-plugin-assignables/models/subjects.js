module.exports = {
  modelName: 'subjects',
  attributes: {
    assignable: {
      // TODO: Convert to relation
      type: 'string',
    },
    program: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    subject: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    level: {
      type: 'string',
    },
    curriculum: {
      type: 'text',
      textType: 'mediumText',
    },
  },
};
