module.exports = {
  modelName: 'packages',
  collectionName: 'packages',
  attributes: {
    assignable: {
      type: 'string',
    },
    launchUrl: {
      type: 'string',
      nullable: false,
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
