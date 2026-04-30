const ServiceContent = require("../models/ContactPage.model");

const seedContactPage = async () => {
  await ServiceContent.deleteMany();

  const serviceContent = await ServiceContent.create({
    heading: {
      ar: "تواصل معنا",
      en: "Contact Us",
    },
    description: {
      ar: "يمكنك ملء النموذج التالي و سنقوم بالرد عليك",
      en: "Fill the form and we will reply soon",
    },
    cards: [
      {
        icon: "/icons/location.svg",
        header: {
          ar: "الإمارات",
          en: "UAE",
        },
        description: {
          ar: "العنوان",
          en: "Address",
        },
      },
      {
        icon: "/icons/mail.svg",
        header: {
          ar: "powercode.gm@gmail.com",
          en: "powercode.gm@gmail.com",
        },
        description: {
          ar: "البريد الإلكتروني",
          en: "Email",
        },
      },
      {
        icon: "/icons/phone.svg",
        header: {
          ar: "+971567420156",
          en: "+971567420156",
        },
        description: {
          ar: "رقم الجوال",
          en: "Mobile",
        },
      },
    ],
  });

  return serviceContent;
};

module.exports = seedContactPage;
