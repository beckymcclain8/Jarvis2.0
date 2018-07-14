const router = require("express").Router();
const mapControllers = require("../controllers/mapControllers");

// Matches with "/map"
router.route("/").get(mapControllers.locateUser);
//Need to figure out how to make REACT-ROUTER WORK
router.route("/results").get(mapControllers.locateNear);
console.log("THE MAP ROUTE HAS BEEN HIT WITH ROUTER.ROUTE");
// router.route("/results").get(mapsController.findAll);
// Matches with "/api/maps/:id"
// router
//   .route("/:id")
//   .get(mapsController.findById)
//   .put(mapsController.update)
//   .delete(mapsController.remove);

module.exports = router;
