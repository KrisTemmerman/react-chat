// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    email: {type: String, unique: true},
    name: {
      firstname:{type:String, required:[true,'first name is required']},
      lastname:{type:String, required:[true,'last name is required']},
    },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};
