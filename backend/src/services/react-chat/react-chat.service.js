// Initializes the `react-chat` service on path `/react-chat`
const createService = require('feathers-mongoose');
const createModel = require('../../models/react-chat.model');
const hooks = require('./react-chat.hooks');
const filters = require('./react-chat.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'react-chat',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/react-chat', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('react-chat');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
