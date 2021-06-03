const form = require('./helpers/forms');
const routesTemplate = require('./helpers/forms/routesTemplate');

module.exports = async (appName) => {
  const questions = [
    {
      type: 'toggle',
      name: 'isPrivate',
      message: 'Is your plugin private?',
      enabled: 'Yep',
      disabled: 'Nope',
    },
    {
      type: 'toggle',
      name: 'customRoutes',
      message: 'Do you want custom routes?',
      enabled: 'Yep',
      disabled: 'Nope',
    },
    {
      type: 'snippet',
      name: 'routes',
      condition: ({ customRoutes }) => customRoutes,
      message: 'Fill custom routes',
      required: true,
      template: routesTemplate,
    },
  ];

  if (!appName) {
    questions.unshift({
      type: 'input',
      name: 'pluginName',
      message: 'What is the name of yout plugin?',
      validate: (value) => (value ? true : 'Invalid input'),
    });
  }

  const data = { appName, ...(await form(questions)) };

  return data;
};
