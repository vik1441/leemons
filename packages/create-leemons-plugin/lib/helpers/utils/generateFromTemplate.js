const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const exitWithError = require('./exitWithError');

module.exports = async (template, config) => {
  const templateDir = path.join(__dirname, '..', '..', 'templates', template);
  try {
    if (!(await fs.exists(templateDir))) {
      exitWithError(chalk`{red The template {bold ${template}} does not exists}`);
    }

    const scripts = await fs.readdir(templateDir, { withFileTypes: true });
    await Promise.all(
      scripts
        .filter((script) => script.isFile() && path.extname(script.name) === '.js')
        .map((script) => ({ name: script.name, path: path.join(templateDir, script.name) }))
        .map(async (script) => {
          // eslint-disable-next-line import/no-dynamic-require, global-require
          const f = require(script.path);

          return f(config);
        })
    );
    // Copy front files
  } catch (e) {
    exitWithError('An error occurred while generating the frontend directories');
  }
};
