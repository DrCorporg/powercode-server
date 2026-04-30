const express = require("express");
const controller = require("../controllers/contact.controller");

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.post("/:id/reply", controller.reply);

module.exports = router;
