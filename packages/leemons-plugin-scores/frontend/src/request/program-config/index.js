async function haveAcademicCalendarConfigForProgram(programId) {
  return leemons.api(`scores/program-config/have-calendar/${programId}`, {
    allAgents: true,
    method: 'GET',
  });
}

async function addProgramConfig(body) {
  return leemons.api('scores/program-config', {
    allAgents: true,
    method: 'POST',
    body,
  });
}

async function updateProgramConfig(body) {
  return leemons.api('scores/program-config', {
    allAgents: true,
    method: 'POST',
    body,
  });
}

async function getProgramConfig(programId) {
  return leemons.api(`scores/program-config/${programId}`, {
    allAgents: true,
    method: 'GET',
  });
}

export {
  getProgramConfig,
  addProgramConfig,
  updateProgramConfig,
  haveAcademicCalendarConfigForProgram,
};
