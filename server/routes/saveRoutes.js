const db = require("../models");

module.exports = app => {
  //route handler
  app.post("/current_user", (req, res) => {
    console.log(req.body);
    //^^Test to see if req.body is the same as below
    const hospital = {
      id: req.body.provider_id,
      provider_name: req.body.provider_name,
      provider_street_address: req.body.provider_street_address,
      provider_city: req.body.provider_city,
      provider_state: req.body.provider_state,
      provider_zip_code: req.body.provider_zip_code,
      procedure: req.body.procedure, //I think we need to call out the procdure if available
      average_covered_charges: req.body.average_covered_charges
    };
    console.log(hospital);

    db.User.findOneAndUpdate(
      { googleID: req.user.googleID },
      { $addToSet: { hospitals: hospital } },
      { new: true }
    )
      .then(dbUser => {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
        console.log("The following user has been updated", dbuser);
        console.log("Your profile have been updated");
      })
      .catch(err => {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });

  // app.get("/current_user", (req, res) => {
  //   db.User.find({ googleID: req.user.googleID })
  //     // Specify that we want to populate the retrieved users with any associated hospitals
  //     .populate("hospitals")
  //     .then(function(dbUser) {
  //       // If able to successfully find and associate all Hospitals and Current User, send them back to the client
  //       res.json(dbUser);
  //       console.log("Here is the user your are returning ", dbUser.googleName);
  //     })
  //     .catch(function(err) {
  //       // If an error occurs, send it back to the client
  //       res.json(err);
  //     });
  // });
};
