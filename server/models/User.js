const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//these are the same
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String,
  // `hospitals` is an array that stores hospital Objects
  hospitals: []
});

const User = mongoose.model("users", userSchema);

module.exports = User;
