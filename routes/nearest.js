const express = require("express");
const router = express.Router();

// find nearest car get request
router.get("/", (req, res) => {
  res.send("cars list");
});

module.exports = router;
