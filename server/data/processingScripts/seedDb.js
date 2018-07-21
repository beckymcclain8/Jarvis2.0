const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hospitals",
  {
    useMongoClient: true
  }
);

const hospitalSeed = [
    {
        type: "Feature",
        location: {
          type: "Point",
          coordinates: [
            -85.36151578,
            31.21543828
          ]
        },
        properties: {
          drgdefinition: "418 - LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W CC",
          providerid: "10001",
          providername: "SOUTHEAST ALABAMA MEDICAL CENTER",
          providerstreetaddress: "1108 ROSS CLARK CIRCLE",
          providercity: "DOTHAN",
          providerstate: "AL",
          providerzipcode: 36301,
          hospitalreferralregiondescription: "AL - Dothan",
          totaldischarges: 26,
          averagecoveredcharges: 42380.07,
          averagetotalpayments: 10145.8,
          averagemedicarepayments: 9046.23
        }
      }
    ];

    db.hospital
    .remove({})
    .then(()=> db.Hospital.collection.insertMany(hospitalSeed))
    .then(data => {
        console.log(data.insertedIds.length + "hospitals inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });