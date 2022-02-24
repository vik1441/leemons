module.exports = {
  setup_page: {
    page_title: 'Scores Setup',
    page_description:
      'Config your evaluation periods: trimester, semester, anual… and the diferente user roles to scoring tasks and subjects, review and export reports. First of all, select the program you want to setup.',
    select_center: 'Select center',
    programConfigSaved: 'Program configuration saved',
    setup: {
      periods: {
        step_label: 'Periods',
        labels: {
          title: 'Periods and evaluation stages',
          description: 'Select which of your academic periods will be gradables.',
          periodCustomLabel: 'Custom',
          periodProgramLabel: 'The full program',
          periodCourseLabel: 'Each program course ({i} courses)',
          periodSubstageLabel: 'All substages ({i} {x})',
          periodsRequired: 'At least one period must be selected',
          finalPeriodTitle: 'At what period is the final grade submitted?',
          finalPeriodProgramLabel: 'At the end of the full program',
          finalPeriodCourseLabel: 'At the end of each course',
          finalPeriodSubstage: 'At the end of each substage',
          finalPeriodsRequired: 'Field required',
          calendarAlertNoInstalled:
            'To be able to use the disabled options install and configure the program in the academic-calendar plugin',
          calendarAlertNoConfigured:
            'To be able to use the disabled options configure the program in the academic-calendar plugin',
          next: 'Next',
        },
      },
      teachers: {
        step_label: 'Teachers',
        labels: {
          title: 'Teachers',
          description: 'Define the level of control of teachers to modify grades:',
          avgNoteLabel: 'Teachers can modify the final grades of a subject.',
          reminderDescription:
            'How much advance notice do you want to give teachers to submit their grades?',
          reminderNote:
            'This is just a friendly reminder to make sure teachers check the submission deadline.',
          selectPeriodLabel: 'Select period',
          periods: {
            days: 'Days',
            weeks: 'Weeks',
            months: 'Months',
          },
          next: 'Next',
          prev: 'Previous',
        },
      },
      reviewers: {
        step_label: 'Reviewers',
        labels: {
          title: 'Heads of studies and supervisors',
          description:
            'Assign supervisors in order to review the grades and give final approval for reports publication (remember to specify them for each program).',
          assign: 'Assign',
          reviewersRequired: 'At least one reviewer must be selected',
          save: 'Save',
          prev: 'Previous',
        },
      },
    },
  },
};
