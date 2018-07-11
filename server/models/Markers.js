const mongoose = require("mongoose");
const { Schema } = mongoose;

const markerSchema = new Schema({
  type: {
    type: String,
    default: "Feature"
  },
  location: {
    type: {
      type: String,
      required: true,
      enum: ["Point", "LineString", "Polygon"],
      default: "Point"
    },
    coordinates: { type: [Number], default: [0, 0] }
  },
  properties: {
    drgdefinition: String,
    providerid: String,
    providername: String,
    providerstreetaddress: String,
    providercity: String,
    providerstate: AL,
    providerzipcode: Number,
    hospitalreferralregiondescription: String,
    totaldischarges: Number,
    averagecoveredcharges: Number,
    averagetotalpayments: Number,
    averagemedicarepayments: Number
  }
});

const new418 = mongoose.model("new418", markerSchema, "new418");
const new419 = mongoose.model("new419", markerSchema, "new419");
const new469 = mongoose.model("new469", markerSchema, "new469");
const new470 = mongoose.model("new470", markerSchema, "new470");
const new482 = mongoose.model("new482", markerSchema, "new482");
const new638 = mongoose.model("new638", markerSchema, "new638");
const new897 = mongoose.model("new897", markerSchema, "new897");

module.exports = {
  new418,
  new419,
  new469,
  new470,
  new482,
  new638,
  new897
};
