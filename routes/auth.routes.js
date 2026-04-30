const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { protect } = require("../middlewares/auth.middleware");

// Public
router.post("/login", authController.login);

// Logged-in user
router.get("/me", protect, authController.me);

module.exports = router;
