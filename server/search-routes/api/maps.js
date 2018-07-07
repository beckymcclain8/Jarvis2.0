const router = require("express").Router();
const mapsController = require("../../controllers/mapsController");

// Matches with "/api/maps"
router.route("/").get(mapsController.findAll);

// Matches with "/api/maps/:id"
router
  .route("/:id")
  .get(mapsController.findById)
  .put(mapsController.update)
  .delete(mapsController.remove);

module.exports = router;
