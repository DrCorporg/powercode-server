const ServiceContent = require("../models/ContactPage.model");

exports.getContent = async () => {
  return ServiceContent.findOne();
};

exports.updateContent = async (data) => {
  let serviceContent = await ServiceContent.findOne();

  if (!serviceContent) {
    serviceContent = await ServiceContent.create(data);
    return serviceContent;
  }

  serviceContent.set(data);
  await serviceContent.save();

  return serviceContent;
};
