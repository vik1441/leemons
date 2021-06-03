const path = require('path');
const createDir = require('../../helpers/utils/createDir');
const createFile = require('../../helpers/utils/createFile');

module.exports = async (config) => {
  const routes = config.routes.values;

  const frontendPath = path.join(routes.app, routes.next);
  await createDir(frontendPath, 'frontend');
  await createDir(path.join(frontendPath, 'pages'), 'frontend pages');
  await createDir(path.join(frontendPath, 'src'), 'frontend src');
  await createDir(path.join(frontendPath, 'src', 'components'), 'frontend src/components');

  const packageJSON = `\
{
  "name": "leemons-plugin-${config.pluginName}-front",
  "version": "1.0.0"
}
`;

  // TODO: Add ui library component
  const homePage = `\
// imports the component from /${config.pluginName}/${config.next}/components/GreetUser.js
import GreetUser from '@${config.pluginName}/components/GreetUser';

// The plugin' main page, rendered in '\${leemonsUrl}/${config.pluginName}'
export default function Home() {
  return (
    <>
      <p>Hello world from ${config.pluginName}</p>
      <GreetUser />
    </>
  );
}
`;

  const pluginInit = `\
/*
 * This file contains the plugin initialization functions.
 * You must be careful with this function, it will affect the load times.
 *
 * In this function, you can set the hooks your plugin needs to work
 */
export default function ${config.pluginName}Init() {
  console.log('The plugin ${config.pluginName} was successfuly loaded');
}
`;

  const component = `\
/*
 * This file defines your plugin' first component, it will be loaded from
 * the app, for importing it, you can use:
 *
 * import Components from '@${config.pluginName}/componentes';
 *
 * The import shortcut will always refer to your plugin' src directory.
 */

export default function GreetUser() {
  return <p>Hello world from GreetUser component</p>;
}
`;

  //   const routesContent = `\
  // module.exports = [
  //   {
  //     // Test it on: [GET] \${leemonsUrl}/api/${config.pluginName}/
  //     path: '/',
  //     method: 'GET',
  //     handler: 'message.helloWorld' // Handled by ${routes.frontend}/message.js function helloWorld
  //   },
  //   {
  //     // Test it on: [GET] \${leemonsUrl}/api/${config.pluginName}/hello/\${nameToGreet}
  //     path: '/hello/:name',
  //     method: 'GET',
  //     handler: 'message.helloName' // Handled by ${routes.frontend}/message.js function helloName
  //   },
  // ];
  // `;

  //   const exampleController = `\
  // // Gets the ${config.pluginName}' service called saveMessage
  // const saveMessage = leemons.plugin.services.saveMessage;

  // // The ctx is the KOA.js context object
  // async function helloWorld(ctx) {
  //   const message = 'Hello world from ${config.pluginName} :D';

  //   await saveMessage(message);
  //   ctx.body = message;
  // }

  // /*
  //  * Uses rest params to greet a user
  //  */
  // function helloName(ctx) {
  //   const { name } = ctx.req.params;

  //   const message = \`Hello \${name} from ${config.pluginName} :D\`;

  //   await saveMessage(message);
  //   ctx.body = message;
  // }

  // module.exports = {
  //   helloWorld,
  //   helloName,
  // }
  // `;

  await Promise.all([
    createFile(path.join(frontendPath, 'package.json'), packageJSON, 'frontend package.json'),
    createFile(path.join(frontendPath, 'pages', 'index.js'), homePage, 'frontend home page'),
    createFile(
      path.join(frontendPath, 'src', 'index.js'),
      pluginInit,
      'frontend initialization file'
    ),
    createFile(
      path.join(frontendPath, 'src', 'components', 'GreetUser.js'),
      component,
      'frontend GreetUser component file'
    ),
  ]);
};
