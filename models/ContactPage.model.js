const mongoose = require("mongoose");

const multiLang = {
  ar: { type: String, required: true },
  en: { type: String, required: true },
};

const cardSchema = new mongoose.Schema({
  icon: String,
  header: multiLang,
  description: multiLang,
});

const schema = new mongoose.Schema(
  {
    heading: multiLang,
    description: multiLang,
    cards: [cardSchema],
  },
  { timestamps: true },
);

module.exports = mongoose.model("ContactPage", schema);
