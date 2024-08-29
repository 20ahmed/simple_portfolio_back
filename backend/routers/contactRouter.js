const express = require("express");
const controller = require("../controllers/contactControllers");
const router = express.Router();

router.route("/").post(controller.createContact).get(controller.getContacts);
router.route("/:id").delete(controller.deleteContact);

module.exports = router;
