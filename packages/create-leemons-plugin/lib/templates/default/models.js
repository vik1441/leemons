const path = require('path');
const createDir = require('../../helpers/utils/createDir');
const createFile = require('../../helpers/utils/createFile');

module.exports = async (config) => {
  const routes = config.routes.values;

  const modelsPath = path.join(routes.app, routes.models);
  await createDir(modelsPath, 'models');

  const exampleModel = `\
module.exports = {
  collectionName: 'messages',
  options: {
    useTimestamps: true,
  },

  attributes: {
    message: {
      type: 'string',
      length: 100,
    },
  },
}
`;

  await createFile(path.join(modelsPath, 'messages.js'), exampleModel, 'saveMessage example model');
};
