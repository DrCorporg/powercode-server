const User = require("../models/User.model");

exports.createUser = async (data) => {
  return User.create(data);
};

exports.getUsers = async () => {
  return User.find().sort({ createdAt: -1 });
};

exports.getUserById = async (id) => {
  return User.findById(id);
};

exports.updateUser = async (id, data) => {
  const user = await User.findById(id).select("+password");

  if (!user) return null;

  if (data.name !== undefined) user.name = data.name;
  if (data.email !== undefined) user.email = data.email;
  if (data.phone !== undefined) user.phone = data.phone;
  if (data.role !== undefined) user.role = data.role;
  if (data.isActive !== undefined) user.isActive = data.isActive;

  if (data.password) {
    user.password = data.password;
  }

  await user.save();

  user.password = undefined;

  return user;
};

exports.deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
