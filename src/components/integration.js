const { IntegrationDefinition, messages } = require('@botpress/sdk');
const { z } = require('zod');

module.exports = new IntegrationDefinition({
  name: '<UNIQUE_INTEGRATION_NAME>',
  version: '0.0.1',
  configuration: {
    schema: z.object({
      botToken: z.string(),
    }),
  },
  channels: {
    group: {
      messages: {
        text: messages.defaults.text,
      },
      message: {
        tags: {
          id: {},
        },
      },
      conversation: {
        tags: {
          id: {},
        },
      },
    },
  },
  user: {
    tags: {
      id: {},
    },
  },
});
