const permissionsPrefix = 'plugins.feedback';

const permissionNames = {
  feedback: `${permissionsPrefix}.feedback`,
};

const permissions = [
  {
    permissionName: permissionNames.feedback,
    actions: ['view', 'update', 'create', 'delete', 'admin'],
    localizationName: {
      es: 'Feedback',
      en: 'Feedback',
    },
  },
];

const menuItems = [
  // Main
  {
    item: {
      key: 'feedback',
      order: 305,
      iconSvg: '/public/feedback/menu-icon-active.svg',
      activeIconSvg: '/public/feedback/menu-icon-active.svg',
      label: {
        en: 'Feedback',
        es: 'Encuestas',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.feedback,
        actionNames: ['view', 'admin'],
      },
    ],
  },
  // List
  {
    item: {
      key: 'feedback-list',
      order: 2,
      parentKey: 'feedback',
      url: '/private/feedback',
      label: {
        en: 'Feedback library',
        es: 'Librería de encuestas',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.feedback,
        actionNames: ['view', 'admin'],
      },
    ],
  },
  // New
  {
    item: {
      key: 'feedback-new',
      order: 3,
      parentKey: 'feedback',
      url: '/private/feedback/new',
      label: {
        en: 'New feedback',
        es: 'Nuevo encuesta',
      },
    },
    permissions: [
      {
        permissionName: permissionNames.feedback,
        actionNames: ['create', 'admin'],
      },
    ],
  },
];

const assignableRoles = [
  {
    role: 'feedback',
    options: {
      teacherDetailUrl: '/private/feedback/detail/:id',
      studentDetailUrl: '/private/feedback/student/:id/:user',
      evaluationDetailUrl: '/private/feedback/result/:id/:user',
      dashboardUrl: '/private/feedback/result/:id',
      creatable: true,
      createUrl: '/private/feedback/new',
      canUse: [], // Assignables le calza 'calledFrom ('plugins.tasks')' y 'plugins.assignables'
      pluralName: { en: 'feedbacks', es: 'encuestas' },
      singularName: { en: 'feedback', es: 'encuesta' },
      order: 7,
      menu: {
        item: {
          iconSvg: '/public/feedback/menu-icon.svg',
          activeIconSvg: '/public/feedback/menu-icon-active.svg',
          label: {
            en: 'Feedback',
            es: 'Encuestas',
          },
        },
        permissions: [
          {
            permissionName: permissionNames.feedback,
            actionNames: ['view', 'admin'],
          },
        ],
      },

      componentOwner: 'plugins.feedback',
      listCardComponent: 'FeedbackListCard',
      detailComponent: 'FeedbackDetail',
    },
  },
];

module.exports = {
  pluginName: permissionsPrefix,
  permissions: {
    permissions,
    names: permissionNames,
  },
  menuItems,
  assignableRoles,
};
