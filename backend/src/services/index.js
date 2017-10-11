const reactChat = require('./react-chat/react-chat.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(reactChat);
  app.configure(users);
};
