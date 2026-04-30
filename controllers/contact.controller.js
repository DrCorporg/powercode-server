const service = require("../services/contact.service");
const nodemailer = require("nodemailer");

/* =========================
   MAILER
========================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   CREATE MESSAGE
========================= */
exports.create = async (req, res) => {
  try {
    const contact = await service.create(req.body);

    res.json({
      success: true,
      data: contact,
    });
  } catch (err) {
    res.status(500).json({ success: false });
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
      return res.status(404).json({ success: false });
    }

    /* send email */
    await transporter.sendMail({
      from: `"Support" <${process.env.EMAIL_USER}>`,
      to: contact.email,
      subject: "Reply from support",
      html: `<p>${message}</p>`,
    });

    await service.addReply(contact._id, message);

    res.json({
      success: true,
      message: "Reply sent",
    });
  } catch (err) {
    res.status(500).json({ success: false });
    console.log(err);
  }
};
