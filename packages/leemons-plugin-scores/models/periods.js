module.exports = {
  modelName: 'periods',
  attributes: {
    center: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    program: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    course: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    startDate: {
      type: 'datetime',
    },
    endDate: {
      type: 'datetime',
    },
    createdBy: {
      type: 'string',
    },
    public: {
      type: 'boolean',
    },
  },
};
