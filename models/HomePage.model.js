const mongoose = require("mongoose");

const localizedString = {
  ar: { type: String, required: true },
  en: { type: String, required: true },
};

const homePageSchema = new mongoose.Schema(
  {
    hero: {
      image: String,
      header: localizedString,
      description: localizedString,
      cta: {
        primary: localizedString,
        secondary: localizedString,
      },
    },

    about: {
      photo: String,
      heading: localizedString,
      description: localizedString,
      cards: [
        {
          icon: String,
          header: localizedString,
          description: localizedString,
        },
      ],
    },

    servicesSection: {
      heading: localizedString,
      description: localizedString,
      services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
    },

    strategy: {
      heading: localizedString,
      description: localizedString,
      cta: localizedString,
      goals: [
        {
          icon: String,
          title: localizedString,
          text: localizedString,
        },
      ],
    },

    ctaSection: {
      heading: localizedString,
      description: localizedString,
      buttonText: localizedString,
    },

    projects: {
      heading: localizedString,
      description: localizedString,
      items: [
        {
          title: localizedString,
          img: String,
          order: Number,
        },
      ],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("HomePage", homePageSchema);
