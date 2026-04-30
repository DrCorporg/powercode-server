const HomePage = require("../models/HomePage.model");
const Service = require("../models/Service.model");

const seedHomePage = async () => {
  await HomePage.deleteMany();

  const services = await Service.find().sort({ order: 1 });

  await HomePage.create({
    hero: {
      image: "/Hero.png",

      header: {
        ar: "من الفكرة إلى التنفيذ… نصنع مساحات مائية تنبض بالفخامة",
        en: "From Concept to Execution… We Create Luxurious Water Spaces",
      },

      description: {
        ar: "نصمم وننفذ حمامات سباحة وحلول خارجية بأعلى معايير الجودة وخبرة تتجاوز 20 عامًا.",
        en: "We design and build swimming pools and outdoor solutions with over 20 years of experience and top quality standards.",
      },

      cta: {
        primary: {
          ar: "تواصل معنا",
          en: "Contact Us",
        },
        secondary: {
          ar: "استعرض خدماتنا",
          en: "View Services",
        },
      },
    },
    about: {
      photo: "/about.png",
      heading: {
        ar: "من نحن",
        en: "About Us",
      },
      description: {
        ar: "نحن في Power Code شركة متخصصة في تصميم وتنفيذ حمامات السباحة والمساحات الخارجية في أبوظبي، بخبرة تمتد لأكثر من 20 عامًا. نقدم حلولًا متكاملة تبدأ من الفكرة والتصميم، مرورًا بالتنفيذ، وحتى الصيانة، مع الالتزام بأعلى معايير الجودة والسلامة.",
        en: "At Power Code, we specialize in designing and building swimming pools and outdoor spaces in Abu Dhabi, with over 20 years of experience. We provide complete solutions from concept and design to execution and maintenance.",
      },
      cta: {
        primary: {
          ar: "تواصل معنا",
          en: "Contact Us",
        },
        secondary: {
          ar: "استعرض خدماتنا",
          en: "View Services",
        },
      },
      cards: [
        {
          icon: "/icons/target.svg",
          header: {
            ar: "رسالتنا",
            en: "Our Mission",
          },
          description: {
            ar: "نسعى في Power Code إلى تقديم حلول متكاملة لحمامات السباحة والمساحات الخارجية تجمع بين الجودة العالية والتصميم المبتكر.",
            en: "We aim to provide integrated swimming pool and outdoor space solutions that combine high quality with innovative design.",
          },
        },
        {
          icon: "/icons/vision.svg",
          header: {
            ar: "رؤيتنا",
            en: "Our Vision",
          },
          description: {
            ar: "أن نكون من الشركات الرائدة في تقديم حلول حمامات السباحة والعناصر المائية في الإمارات.",
            en: "To become one of the leading companies in swimming pool and water feature solutions in the UAE.",
          },
        },
      ],
    },

    servicesSection: {
      heading: {
        ar: "خدماتنا",
        en: "Our Services",
      },
      description: {
        ar: "نقدم حلول متكاملة لكل ما يخص حمامات السباحة، من التصميم وحتى الصيانة بأعلى جودة",
        en: "We provide complete swimming pool solutions, from design to maintenance, with the highest quality.",
      },
      services: services.map((service) => service._id),
    },

    strategy: {
      heading: {
        ar: "أهدافنا الإستراتيجية",
        en: "Our Strategic Goals",
      },
      description: {
        ar: "نسعى لتحقيق التميز من خلال تقديم حلول مبتكرة ومستدامة وعالية الجودة في مجال المسابح واللاندسكيب.",
        en: "We aim for excellence by delivering innovative, sustainable, and high-quality solutions in pools and landscaping.",
      },
      cta: {
        ar: "تواصل معنا",
        en: "Contact Us",
      },
      goals: [
        {
          icon: "/icons/target-1.svg",
          title: {
            ar: "الريادة في الإمارات",
            en: "Leadership in the UAE",
          },
          text: {
            ar: "تعزيز مكانتنا ضمن أفضل شركات حلول المسابح واللاندسكيب في دولة الإمارات.",
            en: "Strengthening our position among the best pool and landscaping solution companies in the UAE.",
          },
        },
        {
          icon: "/icons/target-2.svg",
          title: {
            ar: "دعم التنمية المستدامة",
            en: "Supporting Sustainable Development",
          },
          text: {
            ar: "المساهمة في تحقيق رؤية الإمارات للتنمية الحضرية المستدامة.",
            en: "Contributing to the UAE vision for sustainable urban development.",
          },
        },
        {
          icon: "/icons/target-3.svg",
          title: {
            ar: "التوسع والنمو",
            en: "Expansion and Growth",
          },
          text: {
            ar: "توسيع نطاق مشاريعنا في القطاعين السكني والتجاري.",
            en: "Expanding our projects across both residential and commercial sectors.",
          },
        },
        {
          icon: "/icons/target-4.svg",
          title: {
            ar: "الابتكار والتقنية",
            en: "Innovation and Technology",
          },
          text: {
            ar: "تعزيز استخدام أحدث التقنيات والحلول المبتكرة في تصميم وتنفيذ المشاريع.",
            en: "Enhancing the use of the latest technologies and innovative solutions in project design and execution.",
          },
        },
        {
          icon: "/icons/target-5.svg",
          title: {
            ar: "رضا العملاء",
            en: "Customer Satisfaction",
          },
          text: {
            ar: "تحقيق أعلى مستويات رضا العملاء من خلال تقديم خدمات متميزة تلبي تطلعاتهم.",
            en: "Achieving the highest levels of customer satisfaction by delivering exceptional services that meet their expectations.",
          },
        },
        {
          icon: "/icons/target-6.svg",
          title: {
            ar: "الجودة ومعايير السلامة",
            en: "Quality and Safety Standards",
          },
          text: {
            ar: "نلتزم بتقديم أعلى معايير الجودة مع ضمان تطبيق إجراءات السلامة في جميع مراحل التصميم والتنفيذ والصيانة.",
            en: "We are committed to delivering the highest quality standards while ensuring safety procedures are applied throughout all stages of design, execution, and maintenance.",
          },
        },
      ],
    },

    ctaSection: {
      heading: {
        ar: "هل لديك مشروع جديد؟",
        en: "Do you have a new project?",
      },
      description: {
        ar: "تواصل معنا الآن ودعنا نحول فكرتك إلى واقع.",
        en: "Contact us now and let us turn your idea into reality.",
      },
      buttonText: {
        ar: "تواصل معنا",
        en: "Contact Us",
      },
    },

    projects: {
      heading: {
        ar: "مشاريعنا",
        en: "Our Projects",
      },
      description: {
        ar: "استعرض مجموعة من مشاريعنا المنفذة التي تعكس التزامنا بالجودة والابتكار والاهتمام بأدق التفاصيل. بدءًا من المسابح السكنية وصولًا إلى المشاريع التجارية الكبرى، يتم تنفيذ كل مشروع وفق أعلى المعايير.",
        en: "Explore a collection of our completed projects that reflect our commitment to quality, innovation, and attention to detail. From residential pools to large commercial projects, every project is executed according to the highest standards.",
      },
      items: [
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/01.png",
          order: 1,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/02.png",
          order: 2,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/03.png",
          order: 3,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/04.png",
          order: 4,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/05.png",
          order: 5,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/06.png",
          order: 6,
        },
        {
          title: { ar: "مشروع", en: "Project" },
          img: "/projects/07.png",
          order: 7,
        },
      ],
    },
  });
};

module.exports = seedHomePage;
