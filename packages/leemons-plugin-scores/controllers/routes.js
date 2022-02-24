// TODO [Importante]: Añadir autenticación y permisos
module.exports = [
  // Program config
  {
    path: '/program-config/have-calendar/:id',
    method: 'GET',
    handler: 'programConfig.haveAcademicCalendarConfigForProgram',
    authenticated: true,
  },
  {
    path: '/program-config/:id',
    method: 'GET',
    handler: 'programConfig.getProgramConfig',
    authenticated: true,
  },
  {
    path: '/program-config',
    method: 'POST',
    handler: 'programConfig.addProgramConfig',
    authenticated: true,
  },
];
