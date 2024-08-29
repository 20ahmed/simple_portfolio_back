const express = require("express");
const controller = require("../controllers/worksController");
const router = express.Router();

router.route("/").get(controller.getAllWorks).post(controller.createWork);
router.route("/:id").get(controller.getWorkById).patch(controller.updateWork).delete(controller.deleteWork);

module.exports = router;
