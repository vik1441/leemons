const _ = require('lodash');
const scormService = require('../src/services/package');

async function savePackage(ctx) {
  const data = JSON.parse(ctx.request.body.data);
  _.forIn(ctx.request.files, (value, key) => {
    _.set(data, key, value);
  });
  const scorm = await scormService.savePackage(data, {
    userSession: ctx.state.userSession,
  });
  ctx.status = 200;
  ctx.body = { status: 200, scorm };
}

async function getPackage(ctx) {
  const scorm = await scormService.getPackage(ctx.request.params.id, {
    userSession: ctx.state.userSession,
  });
  ctx.status = 200;
  ctx.body = { status: 200, scorm };
}
async function deletePackage(ctx) {
  const scorm = await scormService.deletePackage(ctx.request.params.id, {
    userSession: ctx.state.userSession,
  });
  ctx.status = 200;
  ctx.body = { status: 200, scorm };
}

async function duplicatePackage(ctx) {
  const scorm = await scormService.duplicatePackage(ctx.request.body.id, {
    published: ctx.request.body.published,
    userSession: ctx.state.userSession,
  });
  ctx.status = 200;
  ctx.body = { status: 200, scorm };
}

async function assignPackage(ctx) {
  const scorm = await scormService.assignPackage(ctx.request.body, {
    userSession: ctx.state.userSession,
    ctx,
  });
  ctx.status = 200;
  ctx.body = { status: 200, scorm };
}

async function sharePackage(ctx) {
  const permissions = await scormService.sharePackage(
    ctx.request.body.assignableId,
    {
      canAccess: ctx.request.body.canAccess,
    },
    { userSession: ctx.state.userSession }
  );
  ctx.status = 200;
  ctx.body = { status: 200, permissions };
}

module.exports = {
  getPackage,
  savePackage,
  sharePackage,
  deletePackage,
  assignPackage,
  duplicatePackage,
};
