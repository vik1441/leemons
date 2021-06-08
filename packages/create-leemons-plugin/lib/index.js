const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');

const form = require('./form');
const hasAccess = require('./helpers/utils/fsPermissions');
const isFolderEmpty = require('./helpers/validators/isFolderEmpty');
const validateName = require('./helpers/validators/packageName');
const shouldUseYarn = require('./helpers/packageManager/shouldUseYarn');
const installDeps = require('./helpers/packageManager/installDeps');
const exitWithError = require('./helpers/utils/exitWithError');
const saveConfigDirs = require('./helpers/utils/saveConfigDirs');
const createDir = require('./helpers/utils/createDir');
const createPackageJSON = require('./createPackageJSON');
const generateFromTemplate = require('./helpers/utils/generateFromTemplate');

module.exports = async (_pluginName, useNPM) => {
  try {
    const template = 'default';
    const cwd = process.cwd();

    // Get plugin settings
    let userConfig = { pluginName: _pluginName, ...(await form(_pluginName)) };

    // Fill required but user-optional info
    userConfig = _.defaultsDeep(userConfig, {
      routes: {
        values: {
          app: path.join(cwd, userConfig.pluginName),
          config: 'config',
          models: 'models',
          controllers: 'controllers',
          services: 'services',
          next: 'next',
          env: '.env',
        },
      },
    });

    const {
      pluginName,
      routes: { values: routes },
    } = userConfig;

    /**
     * Crear config
     * Crear controllers
     * Crear services
     * Crear frontend
     * Crear models
     */

    // Validate plugin name
    if (!validateName(pluginName)) {
      exitWithError(chalk`{red The name {bold ${pluginName}} is not valid}`);
    }

    // Throw error when plugin folder is not empty
    if (!(await isFolderEmpty(routes.app))) {
      exitWithError(chalk`{red The directory {bold ${routes.app}} is not empty}`);
    }

    // Throw if we don't have permissions
    if (!(await hasAccess(cwd, ['r', 'w', 'x']))) {
      exitWithError(
        chalk`{red The directory {bold ${cwd}} does not have read, write and execute permissions}`
      );
    }

    // Decide to use npm or yarn
    const useYarn = useNPM || (await shouldUseYarn());

    // Create the plugin dir
    await createDir(routes.app, pluginName);

    // run simultaneous
    await Promise.all([
      createPackageJSON(pluginName, routes).then(async () => {
        // Install the plugin's dependencies
        const dependencies = [];
        if (!(await installDeps(routes.app, dependencies, useYarn))) {
          exitWithError('An error occurred while installing the dependencies');
        }
      }),

      // Create front directory
      generateFromTemplate(template, userConfig),

      // Create config dir
      createDir(path.join(routes.app, routes.config), 'config').then(async () =>
        Promise.all([
          // Save config.js
          saveConfigDirs(routes.app, userConfig),
        ])
      ),
    ]);
  } catch (e) {
    console.log(e);
    exitWithError('An unknown error occurred while creating the plugin');
  }
};
