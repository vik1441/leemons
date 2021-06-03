const path = require('path');
const createDir = require('../../helpers/utils/createDir');
const createFile = require('../../helpers/utils/createFile');

module.exports = async (config) => {
  const routes = config.routes.values;

  const controllersPath = path.join(routes.app, routes.controllers);
  await createDir(controllersPath, 'controllers');

  const routesContent = `\
module.exports = [
  {
    // Test it on: [GET] \${leemonsUrl}/api/${config.pluginName}/
    path: '/',
    method: 'GET',
    handler: 'message.helloWorld' // Handled by ${routes.controllers}/message.js function helloWorld
  },
  {
    // Test it on: [GET] \${leemonsUrl}/api/${config.pluginName}/hello/\${nameToGreet}
    path: '/hello/:name',
    method: 'GET',
    handler: 'message.helloName' // Handled by ${routes.controllers}/message.js function helloName
  },
];
`;

  const exampleController = `\
// The ctx is the KOA.js context object
async function helloWorld(ctx) {
  // Gets the ${config.pluginName}' service called saveMessage
  const saveMessage = leemons.plugin.services.saveMessage;

  const message = 'Hello world from ${config.pluginName} :D';

  await saveMessage(message);
  ctx.body = message;
}

/*
 * Uses rest params to greet a user
 */
async function helloName(ctx) {
  // Gets the ${config.pluginName}' service called saveMessage
  const saveMessage = leemons.plugin.services.saveMessage;

  const { name } = ctx.req.params;

  const message = \`Hello \${name} from ${config.pluginName} :D\`;

  await saveMessage(message);
  ctx.body = message;
}

module.exports = {
  helloWorld,
  helloName,
}
`;

  await Promise.all([
    createFile(path.join(controllersPath, 'routes.js'), routesContent, 'routes'),
    createFile(
      path.join(controllersPath, 'message.js'),
      exampleController,
      'example message controller'
    ),
  ]);
};
