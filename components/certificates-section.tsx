"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { useState } from "react"

const certificates = [
  {
    id: "digital-intern",
    title: "Digital Intern Sertifikati",
    organization: "Digital Intern Program",
    date: "2022",
    description: "Digital Intern dasturini muvaffaqiyatli yakunlaganligim uchun berilgan sertifikat",
    status: "available",
    image: "/placeholder.png",
    imageUrls: null
  },
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik: Pentesting",
    organization: "Mohirdev Platform",
    date: "2025",
    description: "Kiberxavfsizlik va Pentesting sohasidagi professional kursni tugatganim uchun berilgan sertifikat",
    status: "available",
    image: "/pentest.jpg",
    imageUrls: ["/pentest.jpg"]
  },
  {
    id: "telegram-bot",
    title: "Mukammal Telegram Bot",
    organization: "Mohirdev Platform",
    date: "2025",
    description: "Telegram Bot yaratish va rivojlantirish bo'yicha to'liq kursni tugatganim uchun berilgan sertifikat",
    status: "available",
    image: "/Telegram bot_page-0001.jpg",
    imageUrls: ["/Telegram bot_page-0001.jpg", "/Telegram bot_page-0002.jpg"]
  },
  {
    id: "Frontend Developer (React)",
    title: "Frontend Developer (React)",
    organization: "HackerRank",
    date: "2025",
    description: "React asosida HackerRank imtihonini tugatganim uchun berilgan sertifikat",
    status: "available",
    image: "/front.jpg",
    imageUrls: ["/front.jpg"]
  },
  {
    id: "JavaScript (Basic)",
    title: "JavaScript (Basic)",
    organization: "HackerRank",
    date: "2025",
    description: "JavaScript asosida HackerRank imtihonini tugatganim uchun berilgan sertifikat",
    status: "available",
    image: "/javascriptbasic.jpg",
    imageUrls: ["/javascriptbasic.jpg"]
  },
  {
    id: "JavaScript (Intermediate)",
    title: "JavaScript (Intermediate)",
    organization: "HackerRank",
    date: "2025",
    description: "JavaScript asosida HackerRank imtihonini tugatganim uchun berilgan sertifikat",
    status: "available",
    image: "/javascriptinter.jpg",
    imageUrls: ["/javascriptinter.jpg"]
  }
]

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string
    imageUrls: string[]
  } | null>(null)

  const handleViewCertificate = (title: string, imageUrls: string[]) => {
    setSelectedCertificate({ title, imageUrls })
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow animate-hologram font-space-grotesk">
              Sertifikatlar
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full shadow-lg shadow-accent/50" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-dm-sans glassmorphism-strong p-6 rounded-2xl mt-8">
            Professional kurslar va dasturlarni tugatganim uchun olgan sertifikatlarim
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <Card className="relative cyber-card hover:glassmorphism-strong transition-all duration-500 p-6 h-full group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/20">
                {/* Certificate Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                    {cert.status === "available" ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-center">
                        <i className="fas fa-clock text-6xl text-muted-foreground mb-4"></i>
                        <p className="text-muted-foreground font-mono text-sm">Tez orada</p>
                      </div>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {cert.status === "available" ? (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-mono">
                        Mavjud
                      </span>
                    ) : (
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-mono">
                        Kutilmoqda
                      </span>
                    )}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2 font-space-grotesk group-hover:text-glow transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-accent font-mono text-sm mb-1">{cert.organization}</p>
                    <p className="text-muted-foreground text-sm">{cert.date}</p>
                  </div>

                  <p className="text-card-foreground/80 leading-relaxed text-sm">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {cert.status === "available" && cert.imageUrls ? (
                      <Button
                        onClick={() => handleViewCertificate(cert.title, cert.imageUrls!)}
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-mono"
                      >
                        <i className="fas fa-eye mr-2"></i>
                        Ko'rish
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 bg-muted text-muted-foreground cursor-not-allowed font-mono"
                      >
                        <i className="fas fa-clock mr-2"></i>
                        Tez orada
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="glassmorphism-strong p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <i className="fas fa-award text-3xl text-accent"></i>
              <h3 className="text-2xl font-bold text-foreground font-space-grotesk">
                Professional Rivojlanish
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Men doimiy ravishda o'z bilimlarimni yangilab, yangi texnologiyalar va
              professional kurslarni o'rganib boraman. Har bir sertifikat mening
              professional rivojlanishim va o'z sohamda mutaxassis bo'lishga
              intilishimning dalilidir.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={closeModal}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="bg-gray-900 border-b border-accent/30 p-4">
            <DialogTitle className="text-accent font-mono flex items-center gap-3">
              <i className="fas fa-certificate text-xl"></i>
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 bg-gray-100 overflow-y-auto">
            {selectedCertificate && (
              <div className="p-4 space-y-4">
                {selectedCertificate.imageUrls.map((imageUrl, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={imageUrl}
                      alt={`${selectedCertificate.title} - ${index + 1}`}
                      className="max-w-full h-auto rounded-lg shadow-lg"
                      style={{ maxHeight: '80vh' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-gray-900 border-t border-accent/30 p-4 flex justify-between items-center">
            <div className="text-accent font-mono text-sm">
              <i className="fas fa-image mr-2"></i>
              Sertifikat Ko'ruvchi
            </div>
            <Button
              onClick={closeModal}
              className="bg-red-600 hover:bg-red-700 text-white font-mono text-sm px-4 py-2"
            >
              <i className="fas fa-times mr-2"></i>
              Yopish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
