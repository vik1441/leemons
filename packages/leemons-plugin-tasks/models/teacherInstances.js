module.exports = {
  modelName: 'teacherInstances',
  options: {
    useTimestamps: true,
  },
  attributes: {
    instance: {
      type: 'string',
    },
    teacher: {
      type: 'string',
    },
  },
};
