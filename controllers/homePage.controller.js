const homePageService = require("../services/homePage.service");

exports.getHomePage = async (req, res) => {
  const homePage = await homePageService.getHomePage();
  res.json({ success: true, data: homePage });
};

exports.updateHomePage = async (req, res) => {
  const homePage = await homePageService.updateHomePage(req.body);
  res.json({ success: true, data: homePage });
};
