const Contact = require("../models/Contact.model");

exports.create = async (data) => {
  return Contact.create(data);
};

exports.getAll = async () => {
  return Contact.find().sort({ createdAt: -1 });
};

exports.getById = async (id) => {
  return Contact.findById(id);
};

exports.addReply = async (id, message) => {
  const contact = await Contact.findById(id);

  contact.replies.push({ message });
  contact.status = "replied";

  await contact.save();

  return contact;
};
