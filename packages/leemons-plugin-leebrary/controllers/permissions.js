const { set } = require('../src/services/permissions/set');

module.exports = {
  set: async (ctx) => {
    const { asset } = ctx.params;
    const { canAccess, programsCanAccess, classesCanAccess } = ctx.request.body;
    const { userSession } = ctx.state;

    const permissions = await set(
      asset,
      { programsCanAccess, classesCanAccess, canAccess },
      { deleteMissing: true, userSession }
    );

    ctx.status = 200;
    ctx.body = {
      status: 200,
      permissions,
    };
  },
};
