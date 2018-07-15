const db = require("../models");

module.exports = app => {
  //route handler
  app.post("/:current_user", (req, res) => {
    console.log(req.body);
    //^^Test to see if req.body is the same as below
    const hospital = {
      id: req.body._id,
      provider_name: req.body.provider_name,
      provider_street_address: req.body.provider_street_address,
      provider_city: req.body.provider_city,
      provider_state: req.body.provider_state,
      provider_zip_code: req.body.provider_zip_code,
      procedure: req.body.procedure,
      average_covered_charges: req.body.average_covered_charges
    };
    console.log.log(hospital);

    db.Hospital.create(hospital).then(dbHospital => {
      // If a hospital was created successfully, find current User (there's only one) and push the new hospital's _id to the User's `hospitals` array
      // { new: true } return the new user
      return db.User.findOneAndUpdate(
        { googleID: req.params.current_user },
        { $push: { hospitals: dbHospital._id } }
        // { new: true }
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
  });
};
