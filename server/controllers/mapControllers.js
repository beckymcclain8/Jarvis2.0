const db = require("../models/Markers");
// console.log(db.new418);

// Defining methods
module.exports = {
  locateUser: function(req, res) {
    const userLocation = { location: [51.505, -0.09] };
    res.json(userLocation);
    console.log("GEOLOCATION OF THE USER COMMENCE");

    // _locateUser: {
    //   // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.updateViewport({
    //       longitude: position.coords.longitude,
    //       latitude: position.coords.latitude
    //     });
    //   });
    // }

    // console.log(req.body);
    // console.log("The controller is hooked up");
    // res.send(console.log("Everything is working"));
  },

  locateNear: function(req, res) {
    const resultsNear = [
      { location: [51.505, -0.09] },
      { location: [51.505, -0.08] },
      { location: [51.505, -0.07] }
    ];

    // res.json(resultsNear);
    // console.log("FINDING ALL THE HOSPITALS NEAR YOU");

    db.new418
      .find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [-86.42149916, 34.36320006]
            },
            $minDistance: 1000,
            $maxDistance: 50000
          }
        }
      })
      .then(function(data) {
        console.log(data);
        console.log("FINDING ALL THE HOSPITALS NEAR YOU");
        res.json(data);
      });
  }
};
