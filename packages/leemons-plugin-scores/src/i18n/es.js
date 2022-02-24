module.exports = {
  setup_page: {
    page_title: 'Configuración de las puntuaciones',
    page_description:
      'Configure sus periodos de evaluación: trimestral, semestral, anual... y los diferentes roles de usuario para puntuar tareas y asignaturas, revisar y exportar informes. En primer lugar, seleccione el programa que desea configurar.',
    select_center: 'Seleccionar centro',
    programConfigSaved: 'Configuración guardada',
    setup: {
      periods: {
        step_label: 'Periodos',
        labels: {
          title: 'Periodos y etapas de evaluación',
          description: 'Seleccione cuáles de sus períodos académicos serán calificables',
          periodCustomLabel: 'Personalizado',
          periodProgramLabel: 'El programa completo',
          periodCourseLabel: 'Cada curso del programa ({i} cursos)',
          periodSubstageLabel: 'Todas las subetapas ({i} {x})',
          periodsRequired: 'Mínimo hay que seleccionar un periodo',
          finalPeriodTitle: 'En qué periodo se presenta la nota final',
          finalPeriodProgramLabel: 'Al final del programa completo',
          finalPeriodCourseLabel: 'Al final de cada curso',
          finalPeriodSubstage: 'Al final de cada substage',
          finalPeriodsRequired: 'Campo obligatorio',
          calendarAlertNoInstalled:
            'Para poder usar las opciones desactivadas instala y configura el programa en el plugin academic-calendar',
          calendarAlertNoConfigured:
            'Para poder usar las opciones desactivadas configura el plugin academic-calendar',
          next: 'Siguiente',
        },
      },
      teachers: {
        step_label: 'Profesores',
        labels: {
          title: 'Profesores',
          description:
            'Definir el nivel de control de los profesores para modificar las calificaciones:',
          avgNoteLabel:
            'Los profesores pueden modificar las calificaciones finales de una asignatura',
          reminderDescription: '¿Con cuánta antelación quiere que los profesores envíen sus notas?',
          reminderNote:
            'Esto es sólo un recordatorio amistoso para asegurarse de que los profesores comprueban la fecha límite de entrega.',
          selectPeriodLabel: 'Seleccione el periodo',
          periods: {
            days: 'Dias',
            weeks: 'Semanas',
            months: 'Meses',
          },
          next: 'Siguiente',
          prev: 'Anterior',
        },
      },
      reviewers: {
        step_label: 'Revisores',
        labels: {
          title: 'Jefes de estudio y supervisores',
          description:
            'Asignar supervisores para revisar las calificaciones y dar la aprobación final para la publicación de los informes (recuerde especificarlos para cada programa).',
          assign: 'Asignar',
          reviewersRequired: 'Mínimo hay que seleccionar un revisor',
          save: 'Guardar',
          prev: 'Anterior',
        },
      },
    },
  },
};
