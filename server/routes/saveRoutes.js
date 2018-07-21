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

  // app.get("/api/save_hospital", (req, res) => {
  //   console.log(req.user);
  //   db.User.find({ _id: req.user })
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => console.log(err));
  // });

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

// module.exports = app => {
//   //route handler

//   app.get("/:id", (req, res) => {
//     // db.User.find({ _id: ObjectId(req.body._idUser) })
//     //   .then(dbUser => res.json(dbUser))
//     //   .catch(err => res.json(err));

//     db.User.findById(req.params.id)
//       .then(dbArticle => res.json(dbArticle))
//       .catch(err => res.status(422).json(err));

//     // User.findOneAndUpdate(
//     //   { _id: { $oid: req.body._idUser } },
//     //   { $addToSet: { hospitals: req.body.hospital } },
//     //   { new: true }
//     // )
//     //   .then(dbUser => {
//     //     // If the User was updated successfully, send it back to the client
//     //     res.json(dbUser);
//     //     console.log("The following user has been updated", dbuser);
//     //     console.log("Your profile have been updated");
//     //   })
//     //   .catch(err => {
//     //     // If an error occurs, send it back to the client
//     //     res.json(err);
//     //   });
//   });

//   // app.get("/current_user", (req, res) => {
//   //   User.find({ googleID: req.user.googleID })
//   //     // Specify that we want to populate the retrieved users with any associated hospitals
//   //     .populate("hospitals")
//   //     .then(function(dbUser) {
//   //       // If able to successfully find and associate all Hospitals and Current User, send them back to the client
//   //       res.json(dbUser);
//   //       console.log("Here is the user your are returning ", dbUser.googleName);
//   //     })
//   //     .catch(function(err) {
//   //       // If an error occurs, send it back to the client
//   //       res.json(err);
//   //     });
//   // });
// };
