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

mongoose.model("users", userSchema);
