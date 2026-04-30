const HomePage = require("../models/HomePage.model");

exports.getHomePage = async () => {
  return HomePage.findOne().populate("servicesSection.services");
};

exports.updateHomePage = async (data) => {
  let homePage = await HomePage.findOne();

  if (!homePage) {
    homePage = await HomePage.create(data);
    return homePage.populate("servicesSection.services");
  }

  homePage.set(data);
  await homePage.save();

  return homePage.populate("servicesSection.services");
};
