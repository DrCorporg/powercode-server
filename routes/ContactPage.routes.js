const express = require("express");
const router = express.Router();

const {
  getServiceContent,
  updateServiceContent,
} = require("../controllers/ContactPage.controller");

router.get("/", getServiceContent);
router.put("/", updateServiceContent);

module.exports = router;
