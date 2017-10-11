const assert = require('assert');
const app = require('../../src/app');

describe('\'react-chat\' service', () => {
  it('registered the service', () => {
    const service = app.service('react-chat');

    assert.ok(service, 'Registered the service');
  });
});
