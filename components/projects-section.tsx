"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

const projects = [
  {
    id: 1,
    title: "Sarget ERP",
    description: "Sarget o'quv markazi uchun ERP tizimi. Rahbariyat, HR, O'quv bo'limi, Qabulxona, Buxgalteriya, Marketing, O'qituvchilar, O'quvchilar, Dars jarayonlari, Coin, Davomat tizimlari modullari.",
    features: ["Web dastur", "Mobile APK", "Web sayt", "Taplink sayt"],
    technologies: ["Next.js", "Node.js", "Express.js", "TailwindCSS", "React Native", "Expo", "MongoDB", "TypeScript"],
    icon: "fas fa-building",
    githubUrl: "https://github.com/AkhmedovBotir/sarget-erp"
  },
  {
    id: 2,
    title: "AMC",
    description: "Do'kon savdo jarayonlarini boshqarish tizimi. Do'kon egasi va sotuvchilar o'rtasidagi savdolar va foydalarni kuzatish imkoniyati.",
    features: ["Do'kon egasi APK", "Sotuvchilar APK", "Savdo boshqaruvi"],
    technologies: ["React Native", "Expo", "Node.js", "TypeScript", "Express.js", "MongoDB"],
    icon: "fas fa-shopping-cart",
    githubUrl: "https://github.com/AkhmedovBotir/AMC"
  },
  {
    id: 3,
    title: "Andijon Davlat Texnika Instituti",
    description: "Arizalar, xodimlar va hisobotlar bilan ishlash jarayonini onlayn tizimlashtirish. Raqamli Texnologiyalar bo'limi uchun.",
    features: ["Frontend qismi", "Onlayn tizimlashtirish"],
    technologies: ["React.js", "TailwindCSS"],
    icon: "fas fa-graduation-cap",
    githubUrl: "https://github.com/AkhmedovBotir/rttm.astiedu.uz"
  },
  {
    id: 4,
    title: "Bir Oila Shajara",
    description: "Foydalanuvchilar o'z shajarasini kiritishi va vizual ko'rinishda ko'rish mumkin bo'lgan dastur.",
    features: ["Admin APK", "Foydalanuvchi APK", "Shajara vizualizatsiyasi"],
    technologies: ["PHP", "React Native", "Expo", "TypeScript", "SQLite"],
    icon: "fas fa-sitemap",
    githubUrl: "https://github.com/AkhmedovBotir/Bir-oila-shajara"
  },
  {
    id: 5,
    title: "TTSA ERP",
    description: "Do'konlar bilan ishlash va mahsulotlarni TTSA online marketplace'da sotish tizimi. Do'kon egasi va sotuvchilar boshqaruvi, tovar aylanmasi.",
    features: ["Admin web sayti", "Do'kon egasi APK", "Sotuvchi APK", "Marketplace APK", "Telegram bot"],
    technologies: ["React.js", "React Native", "Expo", "TailwindCSS", "TypeScript", "MongoDB", "Node.js", "Express.js"],
    icon: "fas fa-store",
    githubUrl: "https://github.com/AkhmedovBotir/TTSA"
  },
  {
    id: 6,
    title: "Truck Code",
    description: "Yaponiyadan olib kelingan zakazlarni tarqatuvchilar uchun telegram bot. Admin va foydalanuvchi qismi mavjud.",
    features: ["Admin qismi", "Foydalanuvchi qismi", "Zakaz boshqaruvi"],
    technologies: ["Python", "PostgreSQL"],
    icon: "fas fa-truck",
    githubUrl: "https://github.com/AkhmedovBotir/truckbot"
  },
  {
    id: 7,
    title: "Sms Bomber",
    description: "Qiziqish sifatida yaratilgan loyiha. SMS verify zaifliklarini tekshirish, sms bomber va call bomber bot.",
    features: ["SMS tekshirish", "SMS Bomber", "Call Bomber"],
    technologies: ["Python"],
    icon: "fas fa-bomb",
    githubUrl: "https://github.com/AkhmedovBotir/SMSBOMBER"
  },
  {
    id: 8,
    title: "Winstrike Bar System",
    description: "Winstrike game club bar qismi uchun boshqaruv tizimi. Do'kon egasi va sotuvchilar moduli mavjud.",
    features: ["Do'kon egasi moduli", "Sotuvchilar moduli", "Bar boshqaruvi"],
    technologies: ["React.js", "TailwindCSS", "Material UI", "Node.js", "Express.js", "MongoDB"],
    icon: "fas fa-gamepad",
    githubUrl: "https://github.com/AkhmedovBotir/Bar-Full-stack-project"
  },
  {
    id: 9,
    title: "Mixmall Online Shop",
    description: "Onlayn do'kon boshqaruv tizimi. Admin, Operatorlar, Foydalanuvchilar, Kuryer qismlari.",
    features: ["Online shop APK", "Web dastur", "Admin web", "Operator web", "Kuryer APK"],
    technologies: ["React.js", "Material UI", "Node.js", "Express.js", "MongoDB", "React Native", "Expo"],
    icon: "fas fa-shopping-bag",
    githubUrl: "https://github.com/AkhmedovBotir/MixMall"
  },
  {
    id: 10,
    title: "Toshkent-Andijon Taxi",
    description: "Toshkent–Andijon yo'nalishidagi taksistlar uchun telegram bot. Zakaz yig'ish, haydovchilarni ro'yxatga olish, pullik guruhga o'tkazish.",
    features: ["Zakaz yig'ish", "Haydovchilar ro'yxati", "Pullik guruh", "Oylik to'lovlar"],
    technologies: ["Node.js"],
    icon: "fas fa-taxi",
    githubUrl: "https://github.com/AkhmedovBotir/taxibot"
  },
  {
    id: 11,
    title: "Olx Parser",
    description: "Olx'dan e'lonlarni qidirish va ko'rsatish uchun telegram bot.",
    features: ["E'lon qidirish", "E'lon ko'rsatish", "Telegram bot"],
    technologies: ["Python"],
    icon: "fas fa-search"
  },
  {
    id: 12,
    title: "Octobank Hisobot",
    description: "Xar xil tizimlardan kelayotgan to'lovlarni yagona tizimda birlashtirish. Export funksiyalari mavjud.",
    features: ["To'lovlar birlashtirish", "Export funksiyalari", "Hisobot tizimi"],
    technologies: ["Node.js", "Express.js", "React.js", "OracleDB", "SQLite"],
    icon: "fas fa-university",
    githubUrl: "https://github.com/AkhmedovBotir/octobank-xisobot"
  },
  {
    id: 13,
    title: "Uzcats App",
    description: "Mushuklar savdosi, aksessuarlar va xizmatlar uchun android ilova. Mushuk joylash, tarif rejalar, qoidalar, online chat.",
    features: ["Mushuk joylash", "Tarif rejalar", "Online chat", "Aksessuarlar"],
    technologies: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
    icon: "fas fa-cat",
    githubUrl: "https://github.com/AkhmedovBotir/UzCatsApp"
  },
  {
    id: 14,
    title: "Anonim Bot",
    description: "Kanal orqali anonim suhbatlarni tashkil qilish uchun telegram bot.",
    features: ["Anonim suhbat", "Kanal integratsiyasi", "Telegram bot"],
    technologies: ["PHP", "SQLite"],
    icon: "fas fa-user-secret"
  },
  {
    id: 2,
    title: "Telegram Buyurtma Bot",
    description: "Bitta mahsulot reklama qilinadigan va unga buyurtma berish imkoni bo‘lgan Telegram bot. Har bir buyurtma avtomatik tarzda yopiq Telegram kanalda saqlanadi.",
    features: ["Telegram bot", "Buyurtma boshqaruvi"],
    technologies: ["Node.js", "Telegraf.js", "Express.js", "MongoDB"],
    icon: "fas fa-robot",
    githubUrl: "https://github.com/AkhmedovBotir/sellerbot"
  }  
]

export default function ProjectsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow"
          >
            Loyihalarim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans"
          >
            Muvaffaqiyatli amalga oshirilgan loyihalar va ularning natijalari
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <Card className="relative cyber-card hover:glassmorphism-strong transition-all duration-500 p-4 h-full group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/20">
                {/* Project Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <i className={`${project.icon} text-accent text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-glow group-hover:text-glow transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-3 text-md line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-accent mb-1">Funksiyalar:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-emerald-400 mb-1">Texnologiyalar:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 text-emerald-300 text-xs rounded-full border border-emerald-400/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                {project.githubUrl && (
                  <div className="mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full bg-[#252525] border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <i className="fab fa-github text-sm"></i>
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    </Button>
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="glassmorphism-strong p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <i className="fas fa-handshake text-3xl text-accent"></i>
              <h3 className="text-2xl font-bold text-foreground font-space-grotesk">
                Loyihangizni Boshqaraylik
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Sizning loyihangiz uchun professional yechim kerakmi? 
              Men sizga eng yaxshi texnologiyalar va tajriba bilan yordam bera olaman.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-accent-foreground font-dm-sans px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <i className="fas fa-envelope mr-3"></i>
              Bog'lanish
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
