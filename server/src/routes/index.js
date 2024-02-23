const { Router } = require("express");
const allDrivers = require("../controllers/allDrivers");
const getDriverById = require("../controllers/getDriverById")

const router = Router();

router.get("/drivers", allDrivers);
router.get("/drivers/:idDriver", getDriverById);

module.exports = router;
