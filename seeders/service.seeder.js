const Service = require("../models/Service.model");

const serviceCards = [
  {
    icon: "/icons/service-1.svg",
    slug: "pool-design",
    header: {
      ar: "تصميم وتنفيذ حمامات السباحة",
      en: "Swimming Pool Design and Construction",
    },
    description: {
      ar: "نصمم وننفذ مسابح عصرية تناسب المساحات المختلفة بأعلى معايير الجودة والدقة.",
      en: "We design and build modern swimming pools suitable for different spaces with high quality and precision.",
    },
  },
  {
    icon: "/icons/service-2.svg",
    slug: "pool-maintenance",
    header: {
      ar: "صيانة وتنظيف وتشغيل المسابح",
      en: "Pool Maintenance, Cleaning and Operation",
    },
    description: {
      ar: "خدمات صيانة دورية وتنظيف شامل للحفاظ على نقاء المياه وكفاءة التشغيل.",
      en: "Regular maintenance and cleaning services to maintain water clarity and operating efficiency.",
    },
  },
  {
    icon: "/icons/service-3.svg",
    slug: "pool-equipment",
    header: {
      ar: "توريد وتركيب معدات وأنظمة المسابح",
      en: "Pool Equipment and Systems Supply",
    },
    description: {
      ar: "نوفر أحدث المعدات والأنظمة لضمان كفاءة التشغيل وأداء عالي للمسبح.",
      en: "We provide modern equipment and systems to ensure efficient and high-performance pool operation.",
    },
  },
  {
    icon: "/icons/service-4.svg",
    slug: "pool-renovation",
    header: {
      ar: "إصلاح وتجديد وتحديث المسابح",
      en: "Pool Repair, Renovation and Upgrade",
    },
    description: {
      ar: "نقدم حلول إصلاح وتجديد احترافية لتحديث المسابح وتحسين أدائها ومظهرها.",
      en: "We provide professional repair and renovation solutions to upgrade pool performance and appearance.",
    },
  },
  {
    icon: "/icons/service-5.svg",
    slug: "pool-finishing",
    header: {
      ar: "تشطيبات وتجهيزات المسابح",
      en: "Pool Finishing and Preparation",
    },
    description: {
      ar: "تشطيبات احترافية تضيف لمسة جمالية فاخرة باستخدام أفضل الخامات والتقنيات.",
      en: "Professional finishing that adds a luxurious aesthetic touch using premium materials and techniques.",
    },
  },
];

const seedServices = async () => {
  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      icon: "/icons/service-1.svg",
      slug: "pool-design",
      order: 1,
      header: serviceCards[0].header,
      description: serviceCards[0].description,

      page: {
        header: {
          heading: {
            ar: "تصميم وتنفيذ حمامات السباحة",
            en: "Swimming Pool Design and Construction",
          },
          description: {
            ar: "نقدم خدمات متكاملة لتصميم وتنفيذ حمامات السباحة، حيث نجمع بين الابتكار في التصميم والجودة في التنفيذ لنقدم حلولًا متكاملة تناسب مختلف المساحات وتلبي أعلى معايير الجودة.",
            en: "We provide complete swimming pool design and construction services, combining innovative design with high-quality execution to deliver solutions suitable for different spaces.",
          },
        },

        about: {
          photo: "/about.png",
          heading: {
            ar: "رؤيتنا في التصميم والتنفيذ",
            en: "Our Vision in Design and Construction",
          },
          description: {
            ar: "تعتمد رؤيتنا في تصميم وتنفيذ حمامات السباحة على تقديم حلول مبتكرة تجمع بين الجمال المعماري والكفاءة التشغيلية. نبدأ بفهم دقيق لاحتياجات العميل وطبيعة المساحة، ثم نقوم بتطوير تصاميم مدروسة تراعي أدق التفاصيل وتواكب أحدث الاتجاهات.",
            en: "Our vision in swimming pool design and construction is based on delivering innovative solutions that combine architectural beauty with operational efficiency. We start by understanding the client’s needs and the space, then develop thoughtful designs that consider every detail.",
          },
          cta: {
            primary: {
              ar: "تواصل معنا",
              en: "Contact Us",
            },
          },
        },

        servicesSection: {
          heading: {
            ar: "خدمات تصميم وتنفيذ حمامات السباحة",
            en: "Swimming Pool Design and Construction Services",
          },
          description: {
            ar: "نعتمد في عملنا على فهم احتياجات العميل وتحويل رؤيته إلى تصميم عملي وجذاب. نحرص على تنفيذ كل مشروع بدقة عالية مع الاهتمام بأدق التفاصيل لضمان أفضل النتائج.",
            en: "We focus on understanding the client’s needs and transforming their vision into a practical and attractive design, while executing every project with precision and attention to detail.",
          },
          cards: serviceCards,
        },

        strategy: {
          heading: {
            ar: "التقنيات والأنظمة المستخدمة",
            en: "Technologies and Systems Used",
          },
          description: {
            ar: "نعتمد على أحدث التقنيات والأنظمة المتطورة في تصميم وتنفيذ حمامات السباحة، بما يضمن أعلى مستويات الكفاءة والاستدامة. نحرص على اختيار أفضل المعدات والخامات التي تواكب المعايير العالمية، لتقديم تجربة تشغيل موثوقة وأداء طويل الأمد.",
            en: "We rely on modern technologies and advanced systems in swimming pool design and construction to ensure high efficiency, sustainability, reliable operation, and long-term performance.",
          },
          cta: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          goals: [
            {
              title: {
                ar: "أنظمة تنقية المياه",
                en: "Water Filtration Systems",
              },
              text: {
                ar: "نعتمد على أنظمة فلترة متطورة تضمن نقاء المياه والحفاظ على توازنها بشكل مستمر.",
                en: "We use advanced filtration systems to maintain water clarity and balance continuously.",
              },
              icon: "/icons/tech-1.svg",
            },
            {
              title: {
                ar: "معدات تشغيل عالية الجودة",
                en: "High-Quality Operating Equipment",
              },
              text: {
                ar: "نوفر معدات موثوقة ذات كفاءة عالية لضمان أفضل أداء وتقليل استهلاك الطاقة.",
                en: "We provide reliable, high-efficiency equipment to ensure excellent performance and reduce energy consumption.",
              },
              icon: "/icons/tech-2.svg",
            },
            {
              title: {
                ar: "أنظمة إضاءة حديثة",
                en: "Modern Lighting Systems",
              },
              text: {
                ar: "نستخدم حلول إضاءة متقدمة تضيف لمسة جمالية فاخرة وتعزز من تجربة الاستخدام.",
                en: "We use advanced lighting solutions that add a luxurious look and improve the user experience.",
              },
              icon: "/icons/tech-3.svg",
            },
            {
              title: {
                ar: "أنظمة معالجة كيميائية ذكية",
                en: "Smart Chemical Treatment Systems",
              },
              text: {
                ar: "أنظمة دقيقة للتحكم في جودة المياه والحفاظ على التوازن الكيميائي بشكل آمن وفعال.",
                en: "Precise systems for controlling water quality and maintaining chemical balance safely and effectively.",
              },
              icon: "/icons/tech-4.svg",
            },
            {
              title: {
                ar: "أنظمة التحكم الذكية",
                en: "Smart Control Systems",
              },
              text: {
                ar: "نوفر أنظمة تحكم ذكية تتيح إدارة وتشغيل المسبح بسهولة مثل التحكم في الإضاءة والفلترة ودرجة الحرارة.",
                en: "We provide smart control systems for managing lighting, filtration, temperature, and pool operation easily.",
              },
              icon: "/icons/tech-5.svg",
            },
            {
              title: {
                ar: "خامات وتشطيبات متطورة",
                en: "Advanced Materials and Finishes",
              },
              text: {
                ar: "نستخدم مواد عالية الجودة مقاومة للعوامل المختلفة لضمان المتانة والمظهر الجمالي طويل الأمد.",
                en: "We use high-quality materials resistant to different conditions to ensure durability and long-lasting aesthetics.",
              },
              icon: "/icons/tech-6.svg",
            },
          ],
        },

        ctaSection: {
          heading: {
            ar: "هل لديك مشروع مسبح جديد؟",
            en: "Do You Have a New Pool Project?",
          },
          description: {
            ar: "تواصل معنا الآن ودعنا نحول فكرتك إلى تصميم وتنفيذ احترافي.",
            en: "Contact us now and let us turn your idea into a professional design and execution plan.",
          },
          buttonText: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
        },
      },
    },

    {
      icon: "/icons/service-2.svg",
      slug: "pool-maintenance",
      order: 2,
      header: serviceCards[1].header,
      description: serviceCards[1].description,

      page: {
        header: {
          heading: {
            ar: "صيانة وتنظيف وتشغيل المسابح",
            en: "Pool Maintenance, Cleaning and Operation",
          },
          description: {
            ar: "نقدم خدمات صيانة وتنظيف وتشغيل شاملة للمسابح لضمان نقاء المياه وكفاءة المعدات واستمرارية التشغيل بأفضل أداء.",
            en: "We provide complete pool maintenance, cleaning, and operation services to ensure clean water, efficient equipment, and reliable performance.",
          },
        },

        about: {
          photo: "/about.png",
          heading: {
            ar: "رؤيتنا في الصيانة والتشغيل",
            en: "Our Vision in Maintenance and Operation",
          },
          description: {
            ar: "نؤمن أن الصيانة الدورية هي الأساس للحفاظ على جودة المسبح وسلامة المستخدمين. لذلك نقدم برامج صيانة متكاملة تناسب احتياجات كل مسبح وتضمن استمرارية التشغيل بكفاءة عالية.",
            en: "We believe regular maintenance is essential for preserving pool quality and user safety. That is why we provide complete maintenance programs tailored to every pool’s needs.",
          },
          cta: {
            primary: {
              ar: "احجز خدمة الصيانة",
              en: "Book Maintenance",
            },
          },
        },

        servicesSection: {
          heading: {
            ar: "خدمات صيانة وتشغيل المسابح",
            en: "Pool Maintenance and Operation Services",
          },
          description: {
            ar: "نوفر حلول صيانة دورية وتنظيف شامل وتشغيل احترافي للحفاظ على كفاءة المسبح ونقاء المياه.",
            en: "We provide regular maintenance, complete cleaning, and professional operation solutions to keep pools efficient and clean.",
          },
          cards: [
            {
              icon: "/icons/service-2.svg",
              slug: "pool-cleaning",
              header: {
                ar: "تنظيف شامل للمسابح",
                en: "Complete Pool Cleaning",
              },
              description: {
                ar: "تنظيف أرضيات وجدران المسبح وإزالة الشوائب والرواسب للحفاظ على مظهر نظيف وآمن.",
                en: "Cleaning pool floors and walls while removing debris and deposits to maintain a clean and safe appearance.",
              },
            },
            {
              icon: "/icons/service-3.svg",
              slug: "water-treatment",
              header: {
                ar: "معالجة المياه",
                en: "Water Treatment",
              },
              description: {
                ar: "فحص جودة المياه وضبط مستويات الكلور والحموضة للحفاظ على توازن آمن وفعال.",
                en: "Testing water quality and adjusting chlorine and pH levels to maintain safe and effective balance.",
              },
            },
            {
              icon: "/icons/service-4.svg",
              slug: "equipment-check",
              header: {
                ar: "فحص المعدات",
                en: "Equipment Inspection",
              },
              description: {
                ar: "فحص المضخات والفلاتر وأنظمة التشغيل للتأكد من كفاءتها واكتشاف الأعطال مبكرًا.",
                en: "Inspecting pumps, filters, and operating systems to ensure efficiency and detect issues early.",
              },
            },
          ],
        },

        strategy: {
          heading: {
            ar: "معايير الصيانة لدينا",
            en: "Our Maintenance Standards",
          },
          description: {
            ar: "نعتمد على خطط صيانة منظمة وفريق فني متخصص لضمان أفضل أداء للمسبح وتقليل الأعطال والتكاليف المستقبلية.",
            en: "We rely on organized maintenance plans and a specialized technical team to ensure excellent performance and reduce future issues and costs.",
          },
          cta: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          goals: [
            {
              icon: "/icons/tech-1.svg",
              title: {
                ar: "نقاء المياه",
                en: "Water Clarity",
              },
              text: {
                ar: "الحفاظ على مياه نظيفة ومتوازنة وآمنة للاستخدام المستمر.",
                en: "Maintaining clean, balanced, and safe water for continuous use.",
              },
            },
            {
              icon: "/icons/tech-2.svg",
              title: {
                ar: "كفاءة التشغيل",
                en: "Operating Efficiency",
              },
              text: {
                ar: "ضمان عمل المعدات والأنظمة بكفاءة عالية وتقليل استهلاك الطاقة.",
                en: "Ensuring equipment and systems operate efficiently while reducing energy consumption.",
              },
            },
            {
              icon: "/icons/tech-3.svg",
              title: {
                ar: "الوقاية من الأعطال",
                en: "Fault Prevention",
              },
              text: {
                ar: "اكتشاف المشكلات مبكرًا قبل تحولها إلى أعطال كبيرة.",
                en: "Detecting problems early before they become major failures.",
              },
            },
          ],
        },

        ctaSection: {
          heading: {
            ar: "هل يحتاج مسبحك إلى صيانة؟",
            en: "Does Your Pool Need Maintenance?",
          },
          description: {
            ar: "تواصل معنا للحصول على برنامج صيانة يناسب احتياجات مسبحك.",
            en: "Contact us to get a maintenance program tailored to your pool’s needs.",
          },
          buttonText: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
        },
      },
    },

    {
      icon: "/icons/service-3.svg",
      slug: "pool-equipment",
      order: 3,
      header: serviceCards[2].header,
      description: serviceCards[2].description,

      page: {
        header: {
          heading: {
            ar: "توريد وتركيب معدات وأنظمة المسابح",
            en: "Pool Equipment and Systems Supply",
          },
          description: {
            ar: "نوفر حلولًا متكاملة لتوريد وتركيب معدات وأنظمة المسابح الحديثة لضمان تشغيل آمن وفعال وطويل الأمد.",
            en: "We provide complete solutions for supplying and installing modern pool equipment and systems for safe, efficient, and long-term operation.",
          },
        },

        about: {
          photo: "/about.png",
          heading: {
            ar: "اختيار المعدات المناسبة",
            en: "Choosing the Right Equipment",
          },
          description: {
            ar: "نساعد عملاءنا في اختيار المعدات والأنظمة المناسبة حسب حجم المسبح وطبيعة الاستخدام، مع التركيب الاحترافي لضمان أفضل أداء.",
            en: "We help clients choose the right equipment and systems based on pool size and usage, with professional installation for optimal performance.",
          },
          cta: {
            primary: {
              ar: "اطلب استشارة",
              en: "Request Consultation",
            },
          },
        },

        servicesSection: {
          heading: {
            ar: "معدات وأنظمة المسابح",
            en: "Pool Equipment and Systems",
          },
          description: {
            ar: "نوفر مجموعة متكاملة من المعدات والأنظمة التي تضمن كفاءة التشغيل وسهولة التحكم وجودة المياه.",
            en: "We provide a complete range of equipment and systems that ensure operating efficiency, easy control, and water quality.",
          },
          cards: [
            {
              icon: "/icons/service-3.svg",
              slug: "pool-pumps",
              header: {
                ar: "مضخات المسابح",
                en: "Pool Pumps",
              },
              description: {
                ar: "مضخات عالية الكفاءة تضمن تدوير المياه بشكل مستمر وفعال.",
                en: "High-efficiency pumps that ensure continuous and effective water circulation.",
              },
            },
            {
              icon: "/icons/tech-1.svg",
              slug: "pool-filters",
              header: {
                ar: "أنظمة الفلترة",
                en: "Filtration Systems",
              },
              description: {
                ar: "أنظمة فلترة متطورة للحفاظ على نقاء المياه وتقليل الشوائب.",
                en: "Advanced filtration systems to maintain water clarity and reduce impurities.",
              },
            },
            {
              icon: "/icons/tech-5.svg",
              slug: "pool-control-systems",
              header: {
                ar: "أنظمة التحكم",
                en: "Control Systems",
              },
              description: {
                ar: "أنظمة تحكم ذكية لإدارة الإضاءة والفلترة والتشغيل بسهولة.",
                en: "Smart control systems to manage lighting, filtration, and operation easily.",
              },
            },
          ],
        },

        strategy: {
          heading: {
            ar: "أنظمة موثوقة لأداء مستمر",
            en: "Reliable Systems for Continuous Performance",
          },
          description: {
            ar: "نحرص على توفير معدات موثوقة ومعتمدة تساهم في رفع كفاءة المسبح وتقليل الأعطال وتكاليف التشغيل.",
            en: "We provide reliable and approved equipment that improves pool efficiency and reduces failures and operating costs.",
          },
          cta: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          goals: [
            {
              icon: "/icons/tech-1.svg",
              title: {
                ar: "كفاءة عالية",
                en: "High Efficiency",
              },
              text: {
                ar: "معدات مصممة لتقديم أداء قوي مع استهلاك أقل للطاقة.",
                en: "Equipment designed to deliver strong performance with lower energy consumption.",
              },
            },
            {
              icon: "/icons/tech-2.svg",
              title: {
                ar: "تركيب احترافي",
                en: "Professional Installation",
              },
              text: {
                ar: "تركيب دقيق يضمن سلامة النظام وكفاءة تشغيله.",
                en: "Precise installation that ensures system safety and operating efficiency.",
              },
            },
            {
              icon: "/icons/tech-5.svg",
              title: {
                ar: "سهولة التحكم",
                en: "Easy Control",
              },
              text: {
                ar: "حلول تحكم حديثة تجعل إدارة المسبح أكثر سهولة وراحة.",
                en: "Modern control solutions that make pool management easier and more convenient.",
              },
            },
          ],
        },

        ctaSection: {
          heading: {
            ar: "هل تحتاج معدات أو أنظمة لمسبحك؟",
            en: "Need Equipment or Systems for Your Pool?",
          },
          description: {
            ar: "تواصل معنا لاختيار الحل المناسب لمشروعك.",
            en: "Contact us to choose the right solution for your project.",
          },
          buttonText: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
        },
      },
    },

    {
      icon: "/icons/service-4.svg",
      slug: "pool-renovation",
      order: 4,
      header: serviceCards[3].header,
      description: serviceCards[3].description,

      page: {
        header: {
          heading: {
            ar: "إصلاح وتجديد وتحديث المسابح",
            en: "Pool Repair, Renovation and Upgrade",
          },
          description: {
            ar: "نقدم حلول إصلاح وتجديد متكاملة للمسابح القديمة أو المتضررة لتحسين الأداء والمظهر وزيادة العمر الافتراضي.",
            en: "We provide complete repair and renovation solutions for old or damaged pools to improve performance, appearance, and lifespan.",
          },
        },

        about: {
          photo: "/about.png",
          heading: {
            ar: "إعادة إحياء المسابح",
            en: "Reviving Existing Pools",
          },
          description: {
            ar: "نقوم بدراسة حالة المسبح وتحديد احتياجاته من إصلاحات أو تحديثات، ثم نضع خطة تنفيذ مناسبة تعيد للمسبح كفاءته وجماله.",
            en: "We assess the pool condition, identify repair or upgrade needs, and create a suitable execution plan to restore its efficiency and beauty.",
          },
          cta: {
            primary: {
              ar: "اطلب معاينة",
              en: "Request Inspection",
            },
          },
        },

        servicesSection: {
          heading: {
            ar: "خدمات إصلاح وتجديد المسابح",
            en: "Pool Repair and Renovation Services",
          },
          description: {
            ar: "نوفر حلول إصلاح وتجديد تشمل معالجة التسربات، تحديث الأنظمة، وتغيير التشطيبات بما يناسب احتياجات المشروع.",
            en: "We provide repair and renovation solutions including leak treatment, system upgrades, and finishing replacement according to project needs.",
          },
          cards: [
            {
              icon: "/icons/service-4.svg",
              slug: "leak-repair",
              header: {
                ar: "إصلاح التسربات",
                en: "Leak Repair",
              },
              description: {
                ar: "تحديد مصادر التسرب ومعالجتها باستخدام طرق دقيقة وفعالة.",
                en: "Identifying and treating leak sources using accurate and effective methods.",
              },
            },
            {
              icon: "/icons/tech-2.svg",
              slug: "system-upgrade",
              header: {
                ar: "تحديث الأنظمة",
                en: "System Upgrade",
              },
              description: {
                ar: "تطوير أنظمة التشغيل والفلترة والإضاءة لتحسين الأداء.",
                en: "Upgrading operation, filtration, and lighting systems to improve performance.",
              },
            },
            {
              icon: "/icons/tech-6.svg",
              slug: "finishing-replacement",
              header: {
                ar: "تجديد التشطيبات",
                en: "Finishing Renewal",
              },
              description: {
                ar: "استبدال التشطيبات القديمة بمواد حديثة أكثر جمالًا ومتانة.",
                en: "Replacing old finishes with modern, more beautiful, and durable materials.",
              },
            },
          ],
        },

        strategy: {
          heading: {
            ar: "منهجيتنا في التجديد",
            en: "Our Renovation Methodology",
          },
          description: {
            ar: "نعتمد على تقييم دقيق، وخطة تنفيذ واضحة، واستخدام مواد عالية الجودة لضمان نتائج عملية وجمالية طويلة الأمد.",
            en: "We rely on accurate assessment, clear execution planning, and high-quality materials to ensure practical and aesthetic long-term results.",
          },
          cta: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          goals: [
            {
              icon: "/icons/target-1.svg",
              title: {
                ar: "تحسين الأداء",
                en: "Performance Improvement",
              },
              text: {
                ar: "رفع كفاءة التشغيل وتقليل الأعطال من خلال تحديث الأنظمة.",
                en: "Improving operation efficiency and reducing failures through system upgrades.",
              },
            },
            {
              icon: "/icons/target-2.svg",
              title: {
                ar: "تجديد المظهر",
                en: "Appearance Renewal",
              },
              text: {
                ar: "إضافة مظهر عصري وجذاب للمسبح باستخدام تشطيبات حديثة.",
                en: "Adding a modern and attractive look to the pool using updated finishes.",
              },
            },
            {
              icon: "/icons/target-6.svg",
              title: {
                ar: "إطالة العمر الافتراضي",
                en: "Longer Lifespan",
              },
              text: {
                ar: "تنفيذ أعمال إصلاح وتجديد تساعد على إطالة عمر المسبح.",
                en: "Carrying out repair and renovation works that help extend the pool’s lifespan.",
              },
            },
          ],
        },

        ctaSection: {
          heading: {
            ar: "هل يحتاج مسبحك إلى تجديد؟",
            en: "Does Your Pool Need Renovation?",
          },
          description: {
            ar: "دعنا نساعدك في تحويل مسبحك القديم إلى مساحة عصرية وعملية.",
            en: "Let us help you transform your old pool into a modern and practical space.",
          },
          buttonText: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
        },
      },
    },

    {
      icon: "/icons/service-5.svg",
      slug: "pool-finishing",
      order: 5,
      header: serviceCards[4].header,
      description: serviceCards[4].description,

      page: {
        header: {
          heading: {
            ar: "تشطيبات وتجهيزات المسابح",
            en: "Pool Finishing and Preparation",
          },
          description: {
            ar: "نقدم تشطيبات وتجهيزات احترافية للمسابح تجمع بين الجودة العالية والمظهر الجمالي الفاخر.",
            en: "We provide professional pool finishing and preparation services that combine high quality with a luxurious aesthetic appearance.",
          },
        },

        about: {
          photo: "/about.png",
          heading: {
            ar: "لمسة جمالية متكاملة",
            en: "A Complete Aesthetic Touch",
          },
          description: {
            ar: "نهتم بأدق تفاصيل التشطيبات والتجهيزات لنضمن مظهرًا راقيًا وتجربة استخدام مريحة، مع اختيار خامات عالية الجودة تناسب طبيعة المسابح.",
            en: "We focus on every finishing and preparation detail to ensure an elegant appearance and comfortable user experience, using high-quality materials suitable for pools.",
          },
          cta: {
            primary: {
              ar: "تواصل معنا",
              en: "Contact Us",
            },
          },
        },

        servicesSection: {
          heading: {
            ar: "خدمات تشطيبات وتجهيزات المسابح",
            en: "Pool Finishing and Preparation Services",
          },
          description: {
            ar: "نوفر حلول تشطيب متكاملة تشمل الأرضيات، الجدران، الإضاءة، والحواف بما يتناسب مع التصميم العام للمشروع.",
            en: "We provide complete finishing solutions including flooring, walls, lighting, and edges according to the overall project design.",
          },
          cards: [
            {
              icon: "/icons/tech-6.svg",
              slug: "pool-tiles",
              header: {
                ar: "بلاط وتشطيبات داخلية",
                en: "Tiles and Interior Finishes",
              },
              description: {
                ar: "استخدام خامات مقاومة للمياه والعوامل المختلفة لضمان المتانة والجمال.",
                en: "Using water-resistant and durable materials to ensure strength and beauty.",
              },
            },
            {
              icon: "/icons/tech-3.svg",
              slug: "pool-lighting",
              header: {
                ar: "إضاءة المسابح",
                en: "Pool Lighting",
              },
              description: {
                ar: "حلول إضاءة حديثة تضيف طابعًا فاخرًا وتزيد من جمالية المسبح.",
                en: "Modern lighting solutions that add luxury and enhance the pool’s appearance.",
              },
            },
            {
              icon: "/icons/service-5.svg",
              slug: "pool-edges",
              header: {
                ar: "الحواف والتجهيزات النهائية",
                en: "Edges and Final Preparations",
              },
              description: {
                ar: "تنفيذ حواف وتجهيزات نهائية آمنة وعملية بتصميم أنيق.",
                en: "Implementing safe and practical final edges and preparations with an elegant design.",
              },
            },
          ],
        },

        strategy: {
          heading: {
            ar: "معايير التشطيب لدينا",
            en: "Our Finishing Standards",
          },
          description: {
            ar: "نعتمد على خامات عالية الجودة وتنفيذ دقيق لضمان تشطيبات متينة وآمنة وذات مظهر فاخر يدوم طويلًا.",
            en: "We rely on high-quality materials and precise execution to ensure durable, safe, and luxurious finishes that last.",
          },
          cta: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
          goals: [
            {
              icon: "/icons/target-6.svg",
              title: {
                ar: "جودة الخامات",
                en: "Material Quality",
              },
              text: {
                ar: "اختيار مواد مقاومة للمياه والحرارة والعوامل الخارجية.",
                en: "Choosing materials resistant to water, heat, and outdoor conditions.",
              },
            },
            {
              icon: "/icons/target-5.svg",
              title: {
                ar: "المظهر الجمالي",
                en: "Aesthetic Appearance",
              },
              text: {
                ar: "تنفيذ تشطيبات تعزز جمال المسبح وتناسب التصميم العام.",
                en: "Delivering finishes that enhance pool beauty and match the overall design.",
              },
            },
            {
              icon: "/icons/target-1.svg",
              title: {
                ar: "السلامة والاستخدام",
                en: "Safety and Usability",
              },
              text: {
                ar: "الاهتمام بعناصر السلامة وسهولة الاستخدام في جميع التفاصيل.",
                en: "Focusing on safety and ease of use in every detail.",
              },
            },
          ],
        },

        ctaSection: {
          heading: {
            ar: "هل تبحث عن تشطيبات فاخرة لمسبحك؟",
            en: "Looking for Luxury Pool Finishing?",
          },
          description: {
            ar: "تواصل معنا لاختيار التشطيبات المناسبة لمشروعك.",
            en: "Contact us to choose the right finishes for your project.",
          },
          buttonText: {
            ar: "تواصل معنا",
            en: "Contact Us",
          },
        },
      },
    },
  ]);

  return services;
};

module.exports = seedServices;
