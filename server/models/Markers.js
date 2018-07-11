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

mongoose.model("Markers", markerSchema);
