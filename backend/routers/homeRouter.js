const express = require("express");
const controller = require("../controllers/homeControllers");

const router = express.Router();

router.route("/").get(controller.getHomeInfo).post(controller.createHomeInfo).patch(controller.updateHomeInfo);

module.exports = router;
