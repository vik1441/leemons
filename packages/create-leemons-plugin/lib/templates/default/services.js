const path = require('path');
const createDir = require('../../helpers/utils/createDir');
const createFile = require('../../helpers/utils/createFile');

module.exports = async (config) => {
  const routes = config.routes.values;

  const servicesPath = path.join(routes.app, routes.services);
  await createDir(servicesPath, 'services');

  const exampleService = `\
// Get the messages table from this plugin
const messagesTable = leemons.query('plugins_${config.pluginName}::messages');

module.exports = async function saveMessage(message) {
  try {
    // If successful, return the entry
    const messageEntry = await messagesTable.create({ message });

    return { created: true, message: messageEntry };
  } catch(e) {
    return { created: false };
  }
}
`;

  await createFile(
    path.join(servicesPath, 'saveMessage.js'),
    exampleService,
    'saveMessage example service'
  );
};
