const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const HospitalSchema = new Schema({
  provider_name: {
    type: String,
    required: true
  },
  provider_street_address: {
    type: String,
    required: true
  },
  provider_city: {
    type: String,
    required: true
  },
  provider_state: {
    type: String,
    required: true
  },
  provider_zip_code: {
    type: String,
    required: true
  },
  procedure: {
    type: String
  },
  average_covered_charges: {
    type: Number
  }
});

// This creates our model from the above schema, using mongoose's model method
const Hospital = mongoose.model("Hospital", HospitalSchema);

// Export the Hospital model
module.exports = Hospital;
