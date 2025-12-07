// Services data
export const services = [
  {
    title: "Veb-sayt xizmatlari",
    description:
      "Zamonaviy va foydalanuvchilar uchun qulay veb-saytlar va har qanday murakkablikdagi veb-ilovalarni ishlab chiqish",
    icon: "🌐",
    features: [
      "Mobil moslashuvchan dizayn",
      "Frontend va backend yechimlar",
      "API integratsiyasi",
      "SEO optimallashtirish",
    ],
  },
  {
    title: "Mobil ilovalar",
    description: "iOS va Android platformalari uchun mobil ilovalar ishlab chiqish",
    icon: "📱",
    features: ["iOS va Android ilovalar", "Cross-platform yechimlar", "Push-xabarnomalar", "Ofllin ishlash imkoniyati"],
  },
  {
    title: "Telegram Bot",
    icon: "🤖",
    description: "Har qanday biznes uchun maxsus Telegram botlar yaratish va ularni boshqarish.",
    features: [
      "Avtomatik xabar yuborish",
      "Buyurtmalarni boshqarish",
      "Ma'lumotlar bazasi integratsiyasi",
      "Admin panel bilan boshqarish",
    ],
  },
  {
    title: "Grafik Dizayn",
    icon: "🎨",
    description: "Zamonaviy va jozibali grafik dizaynlar yaratish, brend identifikatsiyasi.",
    features: ["Logo dizayn", "Brend identifikatsiyasi", "Marketing materiallari", "UI/UX dizayn"],
  },
]

// Testimonials data
export const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial:
      "Botir is a talented developer who delivered our project on time and exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Product Manager, Digital Innovations",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial:
      "Working with Botir was a great experience. His attention to detail and problem-solving skills are remarkable.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    position: "CTO, Secure Systems",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial: "Professional, skilled, and always delivers quality work. Would definitely work with Botir again.",
    rating: 4,
  },
  {
    name: "Sarah Williams",
    position: "UI/UX Designer, Creative Agency",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    testimonial:
      "Botir implemented our designs perfectly and provided valuable technical insights that improved the final product.",
    rating: 5,
  },
]

// Navigation links
export const navLinks = [
  {
    id: "home",
    title: "Bosh Sahifa",
  },
  {
    id: "about",
    title: "Men haqimda",
  },
  {
    id: "certificates",
    title: "Sertifikatlar",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },

  {
    id: "services",
    title: "Xizmatlar",
  },
  {
    id: "contact",
    title: "Bog'lanish",
  },
]

// Work experience data
export const education = [
  {
    degree: "Bakalavr",
    institution: "University of Business and Science",
    icon: "🏛️",
    iconBg: "#E6F7FF",
    date: "2025 - 2029 (Kutilmoqda)",
    description: "Axborot tizimlari va texnologiyalari yo'nalishida masofaviy ta'lim",
    location: "Masofaviy ta'lim",
  },
  {
    degree: "O'rta maxsus ta'lim",
    institution: "Andijon shahar Kasb-Hunar Maktabi №2",
    icon: "🎓",
    iconBg: "#E6F7FF",
    date: "2020 Oktyabr - 2022 Iyun",
    description: "Kompyuter injineringi va dasturiy ta'minotni loyihalash",
    location: "Andijon, O'zbekstan",
  },
]

export const experiences = [
  {
    title: "Mentor & Full Stack Dasturchi",
    company_name: "Sarget Academy",
    icon: "👨‍🏫",
    iconBg: "#E6F7FF",
    date: "2025 May - Hozirgacha",
    points: [
      "50+ o'quvchiga IT sohasidagi turli kurslarda dars bermoqdaman",
      "Kompyuter savodxonligi va dasturlash asoslaridan tortib ilg'or darajadagi kurslargacha o'qityapman",
      "O'quv markazi uchun yagona boshqaruv tizimini yaratmoqdaman",
      "Hodimlar, o'quvchilar va moliyaviy hisobotlarni boshqarish modullarini ishlab chiqmoqman",
      "O'quvchilar va o'qituvchilar uchun maxsus foydalanuvchi interfeyslari yaratmoqman",
      "Keng qamrovli CRM va ERP tizimlari bilan ishlash va ularni rivojlantirmoqdaman",
    ],
  },
  {
    title: "Full Stack va Mobil Dasturchi",
    company_name: "Winstrike",
    icon: "💻",
    iconBg: "#E6DEDD",
    date: "2024 Noyabr - 2025 Mart",
    points: [
      "Mixmall onlayn do'konining websayti va mobil ilovalarini ishlab chiqishda ishtirok etdim",
      "Mixmall Couriers va Mixmall mijozlar ilovalarining front-end qismlarini ishlab chiqdim",
      "Admin panel va sotuvchilar interfeysini yaratdim",
      "OrzuCRM Factory tizimida agentlar va adminlar uchun interfeys tayyorladim",
      "OrzuCRM orqali buyurtma jarayonlari, agentlar faoliyati va administratorlarni boshqarish tizimini yaratdim",
      "Back-end qismlarini Node.js yordamida yaratdim va to'liq server arxitekturasi bilan ishladim",
    ],
  },
  {
    title: "IT Mutaxassis",
    company_name: "Andijon Teri-Tanosil Dispanseri",
    icon: "🏥",
    iconBg: "#E6DEDD",
    date: "2024 Fevral - 2025 Oktabr",
    points: [
      "Tibbiy elektron tizimlar (Technomed va SMAT) ni joriy etishda ishtirok etdim, shifokorlarni o'qitdim",
      "Next.js, TypeScript va Node.js asosida kichik loyihalar ishlab chiqdim",
      "Davlat tomonidan berilgan CRM tizimini o'rnatdim, ishchilarga o'rgatdim va hisobot tizimlarini ishlab chiqdim",
    ],
  },
  {
    title: "IT Mentor",
    company_name: "Barkamol Avlod bolalar maktabi",
    icon: "👨‍🏫",
    iconBg: "#E6DEDD",
    date: "2022 Sentyabr - 2023 Fevral",
    points: [
      "O'quvchilarga kompyuter savodxonligi va dasturlash asoslarini o'rgatdim",
      "Muassasa uchun veb loyiha ishlab chiqdim (frontend va backend jamoaviy ishlangan)",
      "Loyihaning frontend qismini ishlab chiqdim va backend bilan integratsiyaga tayyorladim",
    ],
  },
  {
    title: "Frontend Dasturchi (Stajyor)",
    company_name: "Digital City",
    icon: "🚀",
    iconBg: "#E6DEDD",
    date: "2022 May - 2022 Sentyabr",
    points: [
      "Vue.js bilan boshlangan loyihani ReactJS asosida davom ettirdim",
      "Sport portalini ishlab chiqdim: yangiliklar, aksessuarlar savdosi, turnir jadvali, chiptalar va boshqa funksiyalar",
      "Jamoaviy ish tajribasi, kod yozish madaniyati va loyiha boshqaruvi bo'yicha bilim oldim",
      "Stajirovani muvaffaqiyatli yakunladim va sertifikat oldim",
    ],
  },
]

// Projects data
export const projects = [
  {
    name: "CRM Tizimi",
    category: "Web Development",
    description:
      "Do'kon egasi, yordamchi admin va umumiy admin uchun ko'p darajali boshqaruv tizimi. Mahsulotlar, kategoriyalar, brendlar, ombor, muddatli to'lov va shartnoma avtomatlashtirish funksiyalari.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/",
    demo_link: "https://crm-demo.com",
    features: [
      "Ko'p darajali boshqaruv tizimi",
      "Mahsulotlar va kategoriyalar boshqaruvi",
      "Ombor tizimi",
      "Muddatli to'lov avtomatlashtirish",
      "Shartnoma boshqaruvi",
    ],
  },
  {
    name: "Marketplace va Muddatli To'lov Xizmati",
    category: "Web Development",
    description:
      "Mahsulotlarni sotib olish va muddatli to'lov asosida to'lash imkoniyati. SMS orqali eslatmalar va to'lov jarayonini kuzatish tizimi.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    source_code_link: "https://github.com/",
    demo_link: "https://marketplace-demo.com",
    features: [
      "Mahsulotlarni sotib olish",
      "Muddatli to'lov tizimi",
      "SMS eslatmalar",
      "To'lov jarayonini kuzatish",
      "Foydalanuvchi paneli",
    ],
  },
  {
    name: "Taxi Xizmati Ilovasi",
    category: "Mobile App",
    description:
      "Yandex Go va MyTaxi ga o'xshash mobil ilova. Manzilni xarita yoki matn orqali tanlash, xizmat hududlarini belgilash, operator paneli, drayver reytingi va promo kodlar.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Expo", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/",
    demo_link: "https://taxi-app-demo.com",
    features: [
      "Xarita orqali manzil tanlash",
      "Xizmat hududlarini belgilash",
      "Operator paneli",
      "Drayver reytingi",
      "Promo kodlar tizimi",
    ],
  },
  {
    name: "Mushuk Savdo va Xizmat Ilovasi",
    category: "Mobile App",
    description: "O'zbekistonda mushuk sotib olish, sotish, sovg'a qilish va vyazka xizmatlari uchun platforma.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Expo", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
    source_code_link: "https://github.com/",
    demo_link: "https://cat-app-demo.com",
    features: [
      "Mushuk sotib olish/sotish",
      "Sovg'a qilish tizimi",
      "Vyazka xizmatlari",
      "Foydalanuvchi profillari",
      "Xabar almashish",
    ],
  },
  {
    name: "Do'kon Avtomatizatsiyasi",
    category: "Web Development",
    description:
      "Mahsulotlarni boshqarish, ombor tizimi, hisobotlar (PDF, Excel), muddatli to'lov va klientlarni kuzatish imkoniyatlari bilan to'liq avtomatlashtirilgan tizim.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/",
    demo_link: "https://shop-automation-demo.com",
    features: [
      "Mahsulotlar boshqaruvi",
      "Ombor tizimi",
      "PDF/Excel hisobotlar",
      "Muddatli to'lov",
      "Klientlar kuzatuvi",
    ],
  },
  {
    name: "Ramazon Taqvimi Ilovasi",
    category: "Mobile App",
    description:
      "Foydalanuvchilar uchun namoz vaqtlarini, iftorlik va saharlik vaqtlarini ko'rsatadigan taqvim dasturi.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Expo", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: "https://blog.jobxdubai.com/wp-content/uploads/2025/02/ramadan-2025-1.webp?w=1024",
    source_code_link: "https://github.com/",
    demo_link: "https://ramadan-calendar-demo.com",
    features: [
      "Namoz vaqtlari",
      "Iftorlik va saharlik vaqtlari",
      "Taqvim ko'rinishi",
      "Push-xabarnomalar",
      "Lokatsiya asosida vaqtlar",
    ],
  },
]

// Social media links
export const socialLinks = [
  {
    name: "GitHub",
    icon: "fa-brands fa-github-alt",
    url: "https://github.com/AkhmedovBotir",
    color: "#333",
    hoverColor: "#6e5494",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in/ahmedov-botir-uz/",
    color: "#0077b5",
    hoverColor: "#0a66c2",
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    url: "https://t.me/botircode",
    color: "#0088cc",
    hoverColor: "#25a2e0",
  },
]
