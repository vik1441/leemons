/* eslint-disable no-unreachable */
const mime = require('mime-types');
const scormService = require('../src/services/package');

async function savePackage(ctx) {
  const data = JSON.parse(ctx.request.body.data);
  const filesData = ctx.request.files;

  if (filesData?.files) {
    const files = filesData.files.length ? filesData.files : [filesData.files];

    const [file] = files;
    const contentType = file.type;
    const extension = mime.extension(contentType);

    if (extension !== 'zip') {
      throw new global.utils.HttpError(415, 'File must be a ZIP file');
    }

    data.packageFile = file;
  }

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
