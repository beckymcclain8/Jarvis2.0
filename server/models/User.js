const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//these are the same
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String,
  // `hospitals` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Hospital model
  // This allows us to populate the User with any associated Hospital
  // The ObjectIds will refer to the ids in the Hospital model
  hospitals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hospital"
    }
  ]
});

mongoose.model("users", userSchema);
