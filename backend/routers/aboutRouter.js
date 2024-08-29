const express = require("express");
const controller = require("../controllers/aboutControllers");
const router = express.Router();

router.route("/").get(controller.getAboutInfo).post(controller.createAboutInfo).patch(controller.updateAboutInfo);

module.exports = router;
