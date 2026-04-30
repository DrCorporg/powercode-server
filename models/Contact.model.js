const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,

    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },

    replies: [
      {
        message: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);
