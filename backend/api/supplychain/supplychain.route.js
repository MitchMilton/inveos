const express = require("express");
const supplychainController = require("./supplychain.controller");

const router = express.Router();

router.route("/").get(supplychainController.listConfirmed);

module.exports = router;
