const service = require("../services/contact.service");
const nodemailer = require("nodemailer");

/* =========================
   MAILER - Office 365 Configuration
========================= */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/* =========================
   EMAIL ROUTING CONFIGURATION
========================= */
const emailRouting = {
  support: process.env.SUPPORT_EMAIL,
  hr: process.env.HR_EMAIL,
  general: process.env.GENERAL_EMAIL,
  partnerships: process.env.PARTNERSHIPS_EMAIL,
};

/* =========================
   CREATE MESSAGE & SEND EMAIL
========================= */
exports.create = async (req, res) => {
  try {
    const contact = await service.create(req.body);

    // Send email to admin
    try {
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: "awadhimself1@gmail.com",
        replyTo: req.body.email,
        subject: `New Contact Form Submission from ${req.body.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Phone:</strong> ${req.body.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${req.body.message}</p>
          <hr>
          <p><em>Contact ID: ${contact._id}</em></p>
        `,
      });
    } catch (emailErr) {
      console.error("Email to admin error:", emailErr);
      // Continue even if email fails
    }

    // Send confirmation email to the person who submitted the form
    try {
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: req.body.email,
        subject: "We received your message",
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${req.body.name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <hr>
          <p><strong>Your message:</strong></p>
          <p>${req.body.message}</p>
          <hr>
          <p>Best regards,<br>${process.env.EMAIL_FROM_NAME}</p>
        `,
      });
    } catch (emailErr) {
      console.error("Confirmation email error:", emailErr);
      // Continue even if email fails
    }

    res.json({
      success: true,
      data: contact,
      message: "Contact submitted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

/* =========================
   GET ALL
========================= */
exports.getAll = async (req, res) => {
  const data = await service.getAll();

  res.json({
    success: true,
    data,
  });
};

/* =========================
   REPLY + EMAIL
========================= */
exports.reply = async (req, res) => {
  try {
    const { message } = req.body;

    const contact = await service.getById(req.params.id);

    if (!contact) {
      return res
        .status(404)
        .json({ success: false, error: "Contact not found" });
    }

    /* Send reply email to customer */
    try {
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: contact.email,
        replyTo: process.env.EMAIL_FROM,
        subject: `Re: ${contact.category.toUpperCase()} - Your inquiry response`,
        html: `
          <h2>Response to your inquiry</h2>
          <p>Dear ${contact.name},</p>
          <p>${message}</p>
          <hr>
          <p>Best regards,<br>${process.env.EMAIL_FROM_NAME}</p>
          <p><small>Contact ID: ${contact._id}</small></p>
        `,
      });
    } catch (emailErr) {
      console.error("Reply email error:", emailErr);
      // Continue even if email fails
    }

    await service.addReply(contact._id, message);

    res.json({
      success: true,
      message: "Reply sent successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
