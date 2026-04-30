const authService = require("../services/auth.service");

exports.login = async (req, res) => {
  try {
    const data = await authService.login(req.body);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.me = async (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone,
      role: req.user.role,
      isActive: req.user.isActive,
    },
  });
};
