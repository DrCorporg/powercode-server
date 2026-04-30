const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = require("../middlewares/upload");
const uploadController = require("../controllers/upload.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

router.post(
  "/",
  auth.protect,
  role("admin", "moderator"),
  upload.single("file"),
  uploadController.uploadImage,
);

// Error handling for multer
router.use((err, req, res, next) => {
  if (
    err.message === "Only images allowed" ||
    err instanceof multer.MulterError
  ) {
    return res.status(400).json({
      success: false,
      message: err.message || "File upload error",
    });
  }
  next(err);
});

module.exports = router;
