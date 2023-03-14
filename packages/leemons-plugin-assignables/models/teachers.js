module.exports = {
  modelName: 'teachers',
  attributes: {
    assignableInstance: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    teacher: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    type: {
      type: 'string',
    },
  },
};
