module.exports = {
  pluginName: 'providers.leebrary-tests',
  category: {
    key: 'tests-questions-banks',
    creatable: true,
    createUrl: '/private/tests/questions-banks/new',
    duplicable: true,
    provider: 'leebrary-tests',
    canUse: ['plugins.tests'],
    menu: {
      item: {
        iconSvg: '/public/leebrary-tests/menu-icon.svg',
        activeIconSvg: '/public/leebrary-tests/menu-icon.svg',
        label: {
          en: 'Questions Banks',
          es: 'Bancos de preguntas',
        },
      },
      permissions: [
        {
          permissionName: 'plugins.tests.questionsBanks',
          actionNames: ['view', 'update', 'create', 'delete', 'admin'],
        },
      ],
    },
    listCardComponent: 'QuestionsBanksListCard',
    detailComponent: 'QuestionsBanksDetail',
  },
};
