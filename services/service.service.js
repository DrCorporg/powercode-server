const Service = require("../models/Service.model");

exports.getActiveServices = async () => {
  return Service.find({ isActive: true }).sort({ order: 1 });
};

exports.getAllServicesForAdmin = async () => {
  return Service.find().sort({ order: 1 });
};

exports.getActiveServiceBySlug = async (slug) => {
  return Service.findOne({ slug, isActive: true });
};

exports.getServiceBySlugForAdmin = async (slug) => {
  return Service.findOne({ slug });
};

exports.createService = async (data) => {
  return Service.create(data);
};

exports.updateService = async (id, data) => {
  return Service.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteService = async (id) => {
  return Service.findByIdAndDelete(id);
};
