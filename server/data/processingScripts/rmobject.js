//Use this script to switch coordinate index of lat/long for mongodb after
//location field is added to satisfy mongo contraint.

const fs = require("fs");
var hospital418 = require("./code418.json");
let hospital419 = require("./code419.json");
let hospital469 = require("./code469.json");
let hospital470 = require("./code470.json");
let hospital482 = require("./code482.json");
let hospital638 = require("./code638.json");
let hospital897 = require("./code897.json");

function rmFeatureKey(data, file) {
  const newData = data.map(point => {
    let hospitalObj = {
      type: "Feature",
      location: point.location.geometry,
      properties: point.properties
    };
    return JSON.stringify(hospitalObj, null, 2);
  });
  fs.appendFileSync(file, newData);
}

rmFeatureKey(hospital418, "418.txt");
rmFeatureKey(hospital419, "419.txt");
rmFeatureKey(hospital469, "469.txt");
rmFeatureKey(hospital470, "470.txt");
rmFeatureKey(hospital482, "482.txt");
rmFeatureKey(hospital638, "638.txt");
rmFeatureKey(hospital897, "897.txt");
