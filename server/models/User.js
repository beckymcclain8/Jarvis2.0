const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//these are the same
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String
});

mongoose.model("users", userSchema);