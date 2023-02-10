const { table } = require('../tables');

async function sharePackage(
  id,
  { canAccess, programsCanAccess, classesCanAccess, isPublic },
  { transacting: _transacting, userSession } = {}
) {
  return global.utils.withTransaction(
    async (transacting) => {
      const { assignables: assignableService } = leemons.getPlugin('assignables').services;
      await Promise.all(
        canAccess.map(({ userAgent, role }) =>
          assignableService.addUserToAssignable(id, [userAgent], role, { userSession, transacting })
        )
      );
    },

    table.packages,
    _transacting
  );
}

module.exports = sharePackage;
