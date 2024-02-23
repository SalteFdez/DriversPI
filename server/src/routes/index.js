const { Router } = require("express");
const allDrivers = require("../controllers/allDrivers");

const router = Router();

router.get("/drivers", allDrivers);

module.exports = router;
