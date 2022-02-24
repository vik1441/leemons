const _ = require('lodash');
const programConfigService = require('../src/services/program-config');

async function haveAcademicCalendarConfigForProgram(ctx) {
  const result = await programConfigService.haveAcademicCalendarConfigForProgram(ctx.params.id);
  ctx.status = 200;
  ctx.body = { status: 200, ...result };
}

async function getProgramConfig(ctx) {
  const programConfig = (await programConfigService.getProgramConfigByProgramIds(ctx.params.id))[0];
  ctx.status = 200;
  ctx.body = { status: 200, programConfig };
}

async function addProgramConfig(ctx) {
  const programConfig = await programConfigService.createProgramConfig(ctx.request.body);
  ctx.status = 200;
  ctx.body = { status: 200, programConfig };
}

module.exports = {
  getProgramConfig,
  addProgramConfig,
  haveAcademicCalendarConfigForProgram,
};
