const express = require("express");
const router = express.Router();

const { findNearestCars } = require("../controllers/findNearestCars");
// find nearest car get request
router.get("/", findNearestCars);

module.exports = router;
