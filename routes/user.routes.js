const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { protect, protectAdmin } = require("../middlewares/auth.middleware");

// Admin only
router.use(protect);
router.use(protectAdmin);

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
