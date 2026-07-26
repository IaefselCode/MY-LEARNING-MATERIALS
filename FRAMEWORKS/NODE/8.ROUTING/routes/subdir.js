//we start with subdir because we havent handled it at all yet
const express = require("express");
const router = express.Router();
const path = require("path");

router.get(/^\/$|\/index(\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "index.html"));
});

router.get(/^\/$|\/test(\.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "subdir", "test.html"));
  });

module.exports = router;

//Now note our 404 doesent get styled like on the views folder
//Because we havent told express to use /public folder for subdir