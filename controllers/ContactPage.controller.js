const service = require("../services/ContactPage.service");

exports.getServiceContent = async (req, res) => {
  try {
    const data = await service.getContent();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateServiceContent = async (req, res) => {
  try {
    const updated = await service.updateContent(req.body);

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
