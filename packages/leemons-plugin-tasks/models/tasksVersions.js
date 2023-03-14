module.exports = {
  modelName: 'tasksVersions',
  attributes: {
    task: {
      type: 'string',
    },
    major: {
      type: 'integer',
    },
    minor: {
      type: 'integer',
    },
    patch: {
      type: 'integer',
    },
    status: {
      type: 'string',
    },
  },
};
