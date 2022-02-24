const { haveAcademicCalendarConfigForProgram } = require('./haveAcademicCalendarConfigForProgram');
const { createProgramConfig } = require('./createProgramConfig');
const { getProgramConfigByProgramIds } = require('./getProgramConfigByProgramIds');

module.exports = {
  createProgramConfig,
  getProgramConfigByProgramIds,
  haveAcademicCalendarConfigForProgram,
};
