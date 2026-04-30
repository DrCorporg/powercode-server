const express = require("express");
const router = express.Router();

const homePageController = require("../controllers/homePage.controller");
const { protect, protectAdmin } = require("../middlewares/auth.middleware");

router.get("/", homePageController.getHomePage);

router.put("/", protect, protectAdmin, homePageController.updateHomePage);

module.exports = router;
