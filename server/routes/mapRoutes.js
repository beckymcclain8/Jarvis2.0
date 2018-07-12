const router = require("express").Router();
const mapsController = require("../controllers/mapControllers");
const path = require("path");

// Need to match with "/maps/results"
//When a user selects a hospital search bunnton this route will fire-TODO
router.route("/").get(mapsController.findNear);

// Matches with "/maps/:id"
//These are user routes for saving hospitals to thier profiles
// router- TODO
//   .route("/:id")
//   .get(mapsController.findById)
//   .put(mapsController.update)
//   .delete(mapsController.remove);

// Send the build location of the APP
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
