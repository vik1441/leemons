module.exports = {
  userNavigator: {
    student: 'Student',
    multiSubject: 'Multi-subject',
  },
  assignmentForm: {
    subjects: {
      title: 'Included subjects',
      subjectInput: {
        label: 'Subjects',
        placeholder: 'Type the subject names',
        error: 'Pick at least one subject',
      },
    },
    groups: {
      title: '¿Who will perform?',
      options: {
        class: 'Existing class',
        customGroup: 'Custom group',
      },
      noStudentsError:
        'No student was found for the selected subjects. Add or remove subjects to continue.',
      class: {
        studentsCount: 'matching students',
        autoAssignStudents: 'Auto-assign new students',
        excludeStudents: 'Esclude specific students',
        error: 'Pick at least one group',
        notAllStudentsAssigned: "Some students won't be included in the activity",
        excludeStudentsInput: {
          label: 'Students',
          placeholder: 'Type the excluded students',
        },
      },
      customGroup: {
        studentsInput: {
          label: 'Add participants',
          placeholder: 'Type the group students',
          error: 'Add at least one student',
        },
        groupName: {
          label: 'Group name',
          placeholder: 'Type the name',
          error: 'The name is required',
        },
        hideCustomName: 'Hide groupname to students',
      },
    },
    dates: {
      title: '¿When will occur?',
      optionsInput: {
        label: 'Timespan',
        options: {
          alwaysAvailable: 'Anytime',
          fixed: 'Timespan',
          session: 'Live session',
        },
      },
      hideFromCalendar: 'Hide from calendar until start/deadline',
      maxTime: 'Set execution max time',
      maxTimeInput: {
        label: 'Execution time',
      },

      fixedType: {
        title: {
          fixed: 'Set up timespan',
          session: 'Setup live session',
        },
        startDate: {
          label: 'Start date',
          placeholder: 'Type the date',
          error: 'Pick a start date',
        },
        deadline: {
          label: 'Deadline',
          placeholder: 'Type the date',
          error: 'Pick a deadline',
        },
        bothDatesError: 'Pick a start date and deadline',
      },
    },
    instructions: {
      title: 'Statement or instructions',
      description: 'Indications on how to consume the resource (optional)',
      editor: {
        placeholder: 'Type the statement',
      },
    },
    evaluation: {
      title: 'Evaluation',
      description:
        'All types of evaluations have the possibility to include comments (except the non-evaluatable)',
      typeInput: {
        label: 'Type',
        options: {
          nonEvaluable: 'No evaluable',
          calificable: 'Gradable',
          punctuable: 'Punctuable',
          feedbackOnly: 'Feedback only',
        },
      },
      showCurriculum: 'Show curriculum',
    },
    others: {
      title: 'Other options',
      teacherDeadline: 'Add deadline for teacher correction',
      teacherDeadlineInput: {
        label: 'Deadline',
        placeholder: 'Type the date',
        error: 'Pick a date',
      },
      notifyStudents: 'Notify students',
      messageForStudents: 'Message for students',
      hideResponses: 'Hide the answers of the activity once it is finished.',
      hideReport: 'Hide the results report.',
    },
    buttons: {
      assign: 'Assign',
      save: 'Save', // Used on modules assignation drawer
    },
  },
  activity_deadline_header: {
    noDeadline: 'No deadline',
    deadline: 'Deadline',
    deadlineExtraTime: 'Add time',
    closeTask: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    archiveTask: 'Archive',
    period: 'Period type',
    startDate: 'Start date',
    startHour: 'Start hour',
    endDate: 'End date',
    endHour: 'End hour',
    closedPeriod: 'Closed period',
    liveSession: 'Live session',
    openPeriod: 'Open period',
    liveSessionData: 'Date',
  },
  activity_dashboard: {
    closeAction: {
      verbs: {
        opening: 'opening',
        opened: 'opened',
        closing: 'closing',
        closed: 'closed',
      },
      messages: {
        success: 'Activity {{verb}}',
        error: 'Error {{verb}} activity: {{error}}',
      },
    },
    start: {
      messages: {
        success: 'Activity start date updated',
        error: 'Error updating activity start date: {{error}}',
      },
    },
    deadline: {
      messages: {
        success: 'Activity deadline updated',
        error: 'Error updating activity deadline: {{error}}',
      },
    },
    labels: {
      graphs: {
        status: 'Status summary',
        grades: 'Grades summary',
      },
      studentList: {
        studentsCount: 'Students {{count}}',
        search: 'Search student',
        student: 'Student',
        status: 'Status',
        completed: 'Completed',
        avg: 'Avg. time',
        score: 'Score',
      },
    },
    archiveAction: {
      verbs: {
        archiving: 'Archiving',
        archived: 'Archived',
        unarchiving: 'Unarchiving',
        unarchived: 'Unarchived',
      },
      messages: {
        success: 'Activity {{verb}}',
        error: 'Error {{verb}} Activity: {{error}}',
      },
    },
    archiveModal: {
      title: 'There are students not evaluated yet',
      message1: 'The are some students who have not been evaluated yet.',
      message2: 'After archiving this activity, you can add the scores in the notebook.',
      confirm: 'Accept and archive',
      cancel: 'Cancel',
    },
  },
  studentsList: {
    labels: {
      students: 'Students',
      assignStudent: 'Assign student',
      bulkActions: {
        label: 'Actions',
        SEND_REMINDER: 'Send reminder',
      },
      rememberModal: {
        title: 'Send reminder to students that:',
        notOpen: 'They have not opened the activity',
        notEnd: 'They have not finished the activity',
        send: 'Send',
        sended: 'Reminder sent',
      },
      studentListcolumns: {
        student: 'Student',
        status: 'Status',
        completed: 'Completed',
        avgTime: 'Avg. time',
        score: 'Score',
        unreadMessages: 'Messages',
        sendReminder: 'Send reminder',
      },
    },
    placeholders: {
      bulkActions: 'Select an action',
      searchStudent: 'Search student',
    },
    descriptions: {
      searchStudent: 'selected',
    },
  },
  activity_status: {
    late: 'Late',
    completed: 'Completed',
    ongoing: 'Ongoing',
    opened: 'Opened',
    notOpened: 'Not opened',
    assigned: 'Scheduled',
    notStarted: 'Not started',
    started: 'Started',
    closed: 'Closed',
    evaluated: 'Evaluated',
    submitted: 'Submitted',
    ended: 'Finished',
    notSubmitted: 'Not submitted',
    noLimit: 'No time limit',
    blocked: 'Blocked',
  },
  teacher_actions: {
    sendReminder: 'Send reminder',
    evaluate: 'Evaluate',
    review: 'Review',
    reminderSended: 'Reminder sent',
  },
  levelsOfDifficulty: {
    beginner: 'Beginner',
    elementary: 'Elementary',
    lowerIntermediate: 'Lower Intermediate',
    intermediate: 'Intermediate',
    upperIntermediate: 'Upper Intermediate',
    advanced: 'Advanced',
  },
  assignment_list: {
    teacher: {
      activity: 'Activity/Module',
      subject: 'Subject, group and students',
      students: 'Students',
      start: 'Start',
      deadline: 'Deadline',
      status: 'Status',
      completions: 'Completions',
      evaluated: 'Evaluated',
      messages: 'Messages',
    },
    student: {
      activity: 'Activity/Module',
      subject: 'Subject and group',
      start: 'Start',
      deadline: 'Deadline',
      status: 'Status',
      progress: 'Progress',
      messages: 'Messages',
    },
  },
  multiSubject: 'Multi-subject',
  customObjectives: 'Custom objectives',
  activities_filters: {
    ongoing: 'Ongoing {{count}}',
    evaluated: 'Evaluated {{count}}',
    history: 'History {{count}}',
    search: 'Search activities in progress',
    subject: 'Subject',
    status: 'Status',
    progress: 'Progress',
    type: 'Type',
    sort: 'Orden',
    seeAll: 'See all',
  },
  sortTypes: {
    assignation: 'Assignation',
    start: 'Start date',
    deadline: 'Deadline',
  },
  activities_list: {
    emptyState: 'There are no activities yet',
    blocked: 'The selected activity is blocked',
  },
  ongoing: {
    ongoing: 'Ongoing activities',
    history: 'History',
    activities: 'Activities',
  },
  dates: {
    visualization: 'Visualization',
    start: 'Start',
    deadline: 'Deadline',
    close: 'Close',
    closed: 'Closed',
  },
  need_your_attention: {
    activitiesTitle: 'Pending activities',
    evaluationsTitle: 'Pending evaluations',
    ownEvaluations: 'My evaluations',
    new: 'New',
    activitiesEmptyState: 'There are no pending activities',
    evaluationsEmptyState: 'There are no pending evaluations',
    seeAllActivities: 'See all the activities',
    seeAllEvaluations: 'See all the evaluations',
    assigment: {
      subject: 'Subject',
      submission: 'Submissions',
      avgTime: 'Avg. time',
      grade: 'Score',
      score: 'Correct answers',
      activityType: 'Activity type',
    },
  },
  pagination: {
    show: 'Show',
    goTo: 'Go to',
  },
  student_actions: {
    continue: 'Continue',
    start: 'Start',
    view: 'View',
    notSubmitted: 'Not submitted',
    correction: 'Correction',
    review: 'Review',
    disabled: {
      results: 'The results have been hidden by your teacher',
      previous: 'The previous activity must be completed first',
    },
  },
  assetListFilters: {
    programLabel: 'Program',
    subjectLabel: 'Subjects',
    program: 'Program...',
    subject: 'Subject...',
    allPrograms: 'All the programs',
    allSubjects: 'All the subjects',
    subectGroups: {
      mySubjects: 'My subjects',
      collaborations: 'Collaborations',
    },
  },
};
