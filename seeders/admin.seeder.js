const User = require("../models/User.model");

const seedUsers = async () => {
  await User.deleteMany();

  const admin = await User.create({
    name: "PowerCode Admin",
    email: "admin@powercode.com",
    password: "Admin@123456",
    phone: "+971500000000",
    role: "admin",
    isActive: true,
  });

  return admin;
};

module.exports = seedUsers;
