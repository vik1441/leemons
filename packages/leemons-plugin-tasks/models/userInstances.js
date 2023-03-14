module.exports = {
  modelName: 'userInstances',
  options: {
    useTimestamps: true,
  },
  attributes: {
    instance: {
      type: 'string',
    },
    user: {
      type: 'string',
    },
    opened: {
      type: 'datetime',
    },
    start: {
      type: 'datetime',
    },
    end: {
      type: 'datetime',
    },
    grade: {
      type: 'string',
    },
    teacherFeedback: {
      type: 'richtext',
    },
  },
};
