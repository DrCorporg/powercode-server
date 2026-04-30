const uploadService = require("../services/upload.service");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const { url, key } = await uploadService.uploadImageToR2(req.file);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      url,
      key,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Upload failed",
    });
  }
};
