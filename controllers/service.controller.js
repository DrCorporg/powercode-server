const serviceService = require("../services/service.service");

exports.getActiveServices = async (req, res) => {
  const services = await serviceService.getActiveServices();

  res.json({
    success: true,
    data: services,
  });
};

exports.getAllServicesForAdmin = async (req, res) => {
  const services = await serviceService.getAllServicesForAdmin();

  res.json({
    success: true,
    data: services,
  });
};

exports.getActiveServiceBySlug = async (req, res) => {
  const service = await serviceService.getActiveServiceBySlug(req.params.slug);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.json({
    success: true,
    data: service,
  });
};

exports.getServiceBySlugForAdmin = async (req, res) => {
  const service = await serviceService.getServiceBySlugForAdmin(
    req.params.slug,
  );

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.json({
    success: true,
    data: service,
  });
};

exports.createService = async (req, res) => {
  const service = await serviceService.createService(req.body);

  res.status(201).json({
    success: true,
    data: service,
  });
};

exports.updateService = async (req, res) => {
  const service = await serviceService.updateService(req.params.id, req.body);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.json({
    success: true,
    data: service,
  });
};

exports.deleteService = async (req, res) => {
  const service = await serviceService.deleteService(req.params.id);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.json({
    success: true,
    message: "Service deleted successfully",
  });
};
