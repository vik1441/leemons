const { pluginName, menuItems, permissions } = require('./config/constants');
const addMenuItems = require('./src/services/menu-builder/add');
const init = require('./init');

async function initMenuBuilder() {
  const [mainItem, ...items] = menuItems;
  await addMenuItems(mainItem);
  leemons.events.emit('init-menu');
  await addMenuItems(items);
  leemons.events.emit('init-submenu');
}

async function events(isInstalled) {
  leemons.events.once('plugins.multilanguage:pluginDidLoad', async () => {
    init();
  });

  if (!isInstalled) {
    leemons.events.once('plugins.users:init-permissions', async () => {
      const usersPlugin = leemons.getPlugin('users');
      await usersPlugin.services.permissions.addMany(permissions.permissions);
      leemons.events.emit('init-permissions');
    });

    leemons.events.once(
      ['plugins.menu-builder:init-main-menu', `${pluginName}:init-permissions`],
      async () => {
        // await initMenuBuilder();
      }
    );
  } else {
    leemons.events.once(`${pluginName}:pluginDidInit`, async () => {
      leemons.events.emit('init-permissions');
      // leemons.events.emit('init-menu');
      // leemons.events.emit('init-submenu');
    });
  }
}

module.exports = events;
