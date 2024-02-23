const { Router } = require("express");
const allDrivers = require("../controllers/allDrivers");
const getDriverById = require("../controllers/getDriverById");
const getDriverByName = require("../controllers/getDriverByName");
const postDriver = require("../controllers/postDriver");

const router = Router();

router.get("/drivers", allDrivers);
router.get("/drivers/name", getDriverByName);
router.get("/drivers/:idDriver", getDriverById);
router.post("/drivers", postDriver);

module.exports = router;
