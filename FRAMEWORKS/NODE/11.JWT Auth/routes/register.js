//Now lets create a route for the registerController
const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.route("/").post(registerController.handleNewUser);
// router.post("/",registerController.handleNewUser); //Or we can just Say

module.exports = router