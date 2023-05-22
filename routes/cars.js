const express = require("express");
const router = express.Router();

const { addCar, bookCar } = require("../controllers/carController");
// add a new car
router.post("/add-car", addCar);
router.post("/book", bookCar);

module.exports = router;
