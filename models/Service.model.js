const mongoose = require("mongoose");

const localizedString = {
  ar: { type: String, required: true },
  en: { type: String, required: true },
};

const cardSchema = new mongoose.Schema(
  {
    icon: String,
    header: localizedString,
    description: localizedString,
    slug: String,
  },
  { _id: false },
);

const goalSchema = new mongoose.Schema(
  {
    icon: String,
    title: localizedString,
    text: localizedString,
  },
  { _id: false },
);

const serviceSchema = new mongoose.Schema(
  {
    icon: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    header: localizedString,
    description: localizedString,

    page: {
      header: {
        heading: localizedString,
        description: localizedString,
      },

      about: {
        photo: String,
        heading: localizedString,
        description: localizedString,
        cta: {
          primary: localizedString,
        },
      },

      servicesSection: {
        heading: localizedString,
        description: localizedString,
        cards: [cardSchema],
      },

      strategy: {
        heading: localizedString,
        description: localizedString,
        cta: localizedString,
        goals: [goalSchema],
      },

      ctaSection: {
        heading: localizedString,
        description: localizedString,
        buttonText: localizedString,
      },
    },

    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Service", serviceSchema);
