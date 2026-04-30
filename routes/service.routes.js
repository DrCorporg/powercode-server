const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller");
const { protect, protectAdmin } = require("../middlewares/auth.middleware");

router.get(
  "/admin/all",
  protect,
  protectAdmin,
  serviceController.getAllServicesForAdmin,
);
router.get(
  "/admin/:slug",
  protect,
  protectAdmin,
  serviceController.getServiceBySlugForAdmin,
);

router.get("/", serviceController.getActiveServices);
router.get("/:slug", serviceController.getActiveServiceBySlug);

router.post("/", protect, protectAdmin, serviceController.createService);
router.put("/:id", protect, protectAdmin, serviceController.updateService);
router.delete("/:id", protect, protectAdmin, serviceController.deleteService);

module.exports = router;
