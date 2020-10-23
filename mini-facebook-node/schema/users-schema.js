const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  month: String,
  year: String,
  gender: String,
  createdOn: { type: Date, default: Date.now }
});

const UsersModel = mongoose.model('Users', UsersSchema, 'users');

module.exports = UsersModel

