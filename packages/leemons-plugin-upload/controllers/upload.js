const uploadService = require('../services/upload');

const validateProviderConfigObj = {
  type: 'object',
  properties: {
    providerName: { type: 'string' },
    config: {
      type: 'object',
    },
  },
  required: ['providerName', 'config'],
  additionalProperties: false,
};

async function init(ctx) {
  await uploadService.init();
  ctx.body = { status: 200 };
}

async function providers(ctx) {
  ctx.body = { providers: uploadService.providers() };
}

async function addProvider(ctx) {
  const validator = new global.utils.LeemonsValidator(validateProviderConfigObj);
  if (validator.validate(ctx.request.body)) {
    await uploadService.addProvider(ctx.request.body);
    ctx.status = 200;
    ctx.body = { status: 200 };
  } else {
    throw new Error(validator.error);
  }
}

module.exports = {
  addProvider,
  providers,
  init,
};
