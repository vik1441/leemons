const _ = require('lodash');
const { table } = require('../tables');

async function addReviewers(program, _reviewers, { transacting: _transacting } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      const reviewers = _.isArray(_reviewers) ? _reviewers : [_reviewers];
      const permissionService = leemons.getPlugin('users').services.permissions;
      return Promise.all(
        _.map(reviewers, (reviewer) =>
          permissionService.addCustomPermissionToUserAgent(
            reviewer,
            {
              permissionName: `plugins.scores.program-reviewer.${program}`,
              actionNames: ['admin'],
            },
            { transacting }
          )
        )
      );
    },
    table.programConfigs,
    _transacting
  );
}

module.exports = { addReviewers };
