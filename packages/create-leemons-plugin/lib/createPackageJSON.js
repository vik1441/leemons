const path = require('path');
const createFile = require('./helpers/utils/createFile');

module.exports = async (pluginName, routes) => {
  // Generate the app package.json
  const packageJSON = {
    name: `leemons-plugin-${pluginName}`,
    version: '1.0.0',
    private: true,
    leemons: {},
  };

  if (routes.config !== 'config') {
    packageJSON.leemons.configDir = routes.config;
  }
  const packageJSONDir = path.join(routes.app, 'package.json');
  await createFile(packageJSONDir, `${JSON.stringify(packageJSON, '', 2)}\n`);
};
