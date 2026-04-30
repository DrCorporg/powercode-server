const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

// static uploads
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/home-page", require("./routes/homePage.routes"));
app.use("/api/services", require("./routes/service.routes"));
app.use("/api/contact", require("./routes/ContactPage.routes"));
app.use("/api/uploads/image", require("./routes/upload.routes"));
app.use("/api/contactsub", require("./routes/contact.routes"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Powercode API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
