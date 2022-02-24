async function haveAcademicCalendarConfigForProgram(program, { transacting } = {}) {
  const academicCalendar = leemons.getPlugin('academic-calendar');
  const configured = false;
  if (academicCalendar) {
    // TODO Comprobar en academic calendar si esta configurado el programa
  }
  return {
    installed: !!academicCalendar,
    configured,
  };
}

module.exports = { haveAcademicCalendarConfigForProgram };
