module.exports = {
  modelName: 'userDeliverables',
  attributes: {
    instance: {
      type: 'string',
    },
    user: {
      type: 'string',
    },
    deliverable: {
      type: 'text',
      textType: 'mediumText',
    },
    type: {
      type: 'string',
    },
  },
};
