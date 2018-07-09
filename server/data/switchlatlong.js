//Use this script to switch coordinate index of lat/long for mongodb after
//location field is added to satisfy mongo contraint.

const fs = require("fs");

let hospital419 = require("./code419.json");
let hospital469 = require("./code469.json");
let hospital470 = require("./code470.json");
let hospital482 = require("./code482.json");
let hospital638 = require("./code638.json");
let hospital897 = require("./code897.json");

// const newHospitals = hospitals.map(hospital => {
//   let fixhospital = hospital.location.geometry.coordinates.reverse();
//   return hospital;
// });

// fs.appendFileSync("418.txt", JSON.stringify(newHospitals, null, 2));

function latlongFix(data, file) {
  const newData = data.map(point => {
    let fixdata = point.location.geometry.coordinates.reverse();
    return point;
  });

  fs.appendFileSync(file, JSON.stringify(newData, null, 2));
}

latlongFix(hospital419, "419.txt");
latlongFix(hospital469, "469.txt");
latlongFix(hospital470, "470.txt");
latlongFix(hospital482, "482.txt");
latlongFix(hospital638, "638.txt");
latlongFix(hospital897, "897.txt");
