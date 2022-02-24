const _ = require('lodash');
const { table } = require('../tables');

async function getReviewers(program, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      const permissionService = leemons.getPlugin('users').services.permissions;
      return permissionService.findUserAgentsWithPermission(
        {
          permissionName: `plugins.scores.program-reviewer.${program}`,
          actionNames: ['admin'],
        },
        { transacting }
      );
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { getReviewers };
