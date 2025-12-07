"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">Men Haqimda</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
            Full Stack dasturchi va IT mentor sifatida ishlayotgan tajribam haqida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Profile Image and Basic Info */}
          <div className="space-y-8">
            <Card className="glassmorphism p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/30">
                <img 
                  src="/anon.jpg" 
                  alt="Botir" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-glow">Botir</h3>
              <p className="text-accent font-dm-sans font-semibold mb-4">Full Stack Dasturchi & IT Mentor</p>
              <p className="text-muted-foreground font-dm-sans">
                Andijon shahrida yashayotgan, IT sohasida 3+ yillik tajribaga ega dasturchi
              </p>
            </Card>

            <Card className="glassmorphism p-6">
              <h4 className="text-xl font-bold font-space-grotesk mb-4 text-glow">Qisqacha Ma'lumot</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                  <span className="font-dm-sans">Andijon, O'zbekiston</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-accent mr-3"></i>
                  <span className="font-dm-sans">Kompyuter injineringi</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-briefcase text-accent mr-3"></i>
                  <span className="font-dm-sans">3+ yillik tajriba</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-accent mr-3"></i>
                  <span className="font-dm-sans">50+ o'quvchi mentor qildim</span>
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <Card className="glassmorphism p-6">
              <h4 className="text-xl font-bold font-space-grotesk mb-6 text-glow text-center">Batafsil Ma'lumot</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('experience')}
                  className="flex-1 glassmorphism hover:neon-glow font-dm-sans transition-all duration-300 hover:scale-105"
                >
                  <i className="fas fa-briefcase mr-3"></i>
                  Ish Tajribam
                </Button>
                <Button 
                  onClick={() => scrollToSection('education')}
                  variant="outline"
                  className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground font-dm-sans transition-all duration-300 hover:scale-105"
                >
                  <i className="fas fa-graduation-cap mr-3"></i>
                  Ta'lim
                </Button>
              </div>
            </Card>
          </div>

          {/* About Text and Skills Preview */}
          <div className="space-y-8">
            <Card className="glassmorphism p-8">
              <h4 className="text-2xl font-bold font-space-grotesk mb-6 text-glow">Mening Yo'lim</h4>
              <div className="space-y-4 text-muted-foreground font-dm-sans leading-relaxed">
                <p>
                  2020-yilda kompyuter injineringi sohasida o'qishni boshladim va shundan buyon 
                  dasturlash dunyosiga qiziqib qoldim. Dastlabki tajribamni Digital City kompaniyasida 
                  stajyor sifatida boshladim.
                </p>
                <p>
                  Hozirda Sarget Academy da mentor sifatida ishlayotganman va 50+ o'quvchiga 
                  IT sohasidagi turli kurslarda dars beraman. Kompyuter savodxonligidan tortib 
                  ilg'or darajadagi dasturlash kurslarigacha o'qityapman.
                </p>
                <p>
                  Full Stack dasturchi sifatida React, Node.js, React Native va boshqa 
                  zamonaviy texnologiyalar bilan ishlayman. Loyihalarim orasida CRM tizimlari, 
                  mobil ilovalar va veb-saytlar bor.
                </p>
              </div>
            </Card>

            <Card className="glassmorphism p-8">
              <h4 className="text-xl font-bold font-space-grotesk mb-6 text-glow">Asosiy Qobiliyatlar</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <i className="fas fa-code text-accent mr-3"></i>
                  <span className="font-dm-sans">Full Stack Development</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-mobile-alt text-accent mr-3"></i>
                  <span className="font-dm-sans">Mobil Ilovalar</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chalkboard-teacher text-accent mr-3"></i>
                  <span className="font-dm-sans">IT Mentoring</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-database text-accent mr-3"></i>
                  <span className="font-dm-sans">Ma'lumotlar Bazasi</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-robot text-accent mr-3"></i>
                  <span className="font-dm-sans">Telegram Botlar</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-palette text-accent mr-3"></i>
                  <span className="font-dm-sans">UI/UX Dizayn</span>
                </div>
              </div>
            </Card>

            <Card className="glassmorphism p-6">
              <h4 className="text-lg font-bold font-space-grotesk mb-4 text-glow">Maqsadim</h4>
              <p className="text-muted-foreground font-dm-sans leading-relaxed">
                O'zbekistonda IT sohasini rivojlantirish va yosh avlodni dasturlash sohasiga 
                jalb qilish. Har bir loyihamda eng yaxshi sifat va innovatsion yechimlarni 
                taqdim etishga harakat qilaman.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
