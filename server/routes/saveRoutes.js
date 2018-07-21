const db = require("../models");

module.exports = app => {
  app.post("/api/save_hospital", (req, res) => {
    console.log(req.user);
    console.log(req.body);
    db.User.findOneAndUpdate(
      { _id: req.user },
      { $addToSet: { hospitals: req.body.hospital } },
      { new: true }
    )
      .then(res => console.log("You have saved the article"))
      .catch(err => console.log(err));
  });

  app.get("/api/delete_hospital", (req, res) => {
    console.log(req.user);
    console.log(req.body);
    db.User.findOneAndUpdate(
      { _id: req.user },
      { $pull: { hospitals: req.body.hospital } },
      { multi: true }
    )
      .then(res => console.log("You have deleted the hospital"))
      .catch(err => console.log(err));
  });

  // Retrieve data from the db
  app.get("/api/save_hospital", function(req, res) {
    // Find all results from the scrapedData collection in the db
    db.User.find({ _id: req.user }, function(error, found) {
      // Throw any errors to the console
      if (error) {
        console.log(error);
      }
      // If there are no errors, send the data to the browser as json
      else {
        res.json(found);
      }
    });
  });
};
