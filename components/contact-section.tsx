"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import SuccessModal from "./success-modal"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format phone number
    const formattedPhone = `+998${formData.phone.replace(/\s/g, '')}`
    
    // Prepare message for bot
    const botMessage = `
🆕 Yangi xabar:
👤 Ism: ${formData.name}
📞 Telefon: ${formattedPhone}
💬 Xabar: ${formData.message}
    `.trim()

    try {
      // Send to Telegram bot
      const botToken = '5905594514:AAGCz6Lt_p3QX5gpd-M4qlsQiZOijVlaof0'
      const chatId = '1543822491'
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: botMessage,
          parse_mode: 'HTML'
        })
      })

      if (response.ok) {
        setModalMessage('Xabaringiz muvaffaqiyatli yuborildi!')
        setIsSuccess(true)
        setIsModalOpen(true)
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setModalMessage('Xatolik yuz berdi. Qaytadan urinib ko\'ring.')
        setIsSuccess(false)
        setIsModalOpen(true)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setModalMessage('Xatolik yuz berdi. Qaytadan urinib ko\'ring.')
      setIsSuccess(false)
      setIsModalOpen(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // Remove non-digits
    if (value.length > 9) {
      value = value.slice(0, 9) // Limit to 9 digits
    }
    
    // Format as 90 123 45 67
    if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
    } else if (value.length > 5) {
      value = value.replace(/(\d{2})(\d{3})(\d{2})/, '$1 $2 $3')
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{3})/, '$1 $3')
    }
    
    setFormData({
      ...formData,
      phone: value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">Bog'lanish</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
            Talab va takliflaringizni yuborishingiz mumkin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glassmorphism p-8">
            <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-glow">Xabar Yuborish</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-dm-sans font-semibold mb-2">Ismingiz</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glassmorphism border-accent/30 focus:border-accent"
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-dm-sans font-semibold mb-2">Telefon raqam</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-muted-foreground text-sm font-dm-sans">+998</span>
                  </div>
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="glassmorphism border-accent/30 focus:border-accent pl-12"
                    placeholder="90 123 45 67"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-dm-sans font-semibold mb-2">Xabar</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glassmorphism border-accent/30 focus:border-accent min-h-32"
                  placeholder="Talab va takliflaringizni yozing..."
                  required  
                />
              </div>

              <Button type="submit" className="w-full glassmorphism hover:neon-glow font-dm-sans py-3">
                <i className="fas fa-paper-plane mr-2"></i>
                Xabar Yuborish
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glassmorphism p-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-glow">Bog'lanish Ma'lumotlari</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold font-dm-sans">Email</h4>
                    <p className="text-muted-foreground">botircoders@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold font-dm-sans">Telefon</h4>
                    <p className="text-muted-foreground">+998 93 228 18 84</p>
                    <p className="text-muted-foreground">+998 88 273 17 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold font-dm-sans">Manzil</h4>
                    <p className="text-muted-foreground">Andijon viloyati</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <SuccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isSuccess ? "Muvaffaqiyat!" : "Xatolik!"}
        message={modalMessage}
      />
    </section>
  )
}
