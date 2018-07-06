const router = require("express").Router();
const mapRoutes = require("./maps");

// Book routes
router.use("/map", mapRoutes);

module.exports = router;
