const express = require("express");
const router = express.Router();
const refreshTokenController = require("../controllers/refreshTokenController");
// const { handleLogin } = require("../controllers/refreshTokenController");

router.route("/").get(refreshTokenController.handleRefreshToken);


module.exports = router

//So now we need to insert these route into the server along side with the other routes