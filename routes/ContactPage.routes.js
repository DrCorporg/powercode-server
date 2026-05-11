const express = require("express");
const router = express.Router();

const {
  getServiceContent,
  updateServiceContent,
} = require("../controllers/ContactPage.controller");
const { protect, protectAdmin } = require("../middlewares/auth.middleware");

router.get("/", getServiceContent);
router.put("/", protect, protectAdmin, updateServiceContent);

module.exports = router;
