const passport = require("passport");
const db = require("../models");

module.exports = app => {
  //route handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  //   app.put("/saved_hospital", (req, res) => {
  //     console.log(req.user);
  //     console.log(req.body);
  //     db.User.findOneAndUpdate(
  //       { _id: { $oid: req.user } },
  //       { $addToSet: { hospitals: req.body.hospital } },
  //       { new: true }
  //     ).then(res => console.log("You have saved the article"));
  //   });
};
