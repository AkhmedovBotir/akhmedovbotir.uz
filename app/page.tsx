import ClientWrapper from "../components/client-wrapper"
import CyberNavigation from "../components/cyber-navigation"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "../components/skills-section"
import ExperienceSection from "../components/experience-section"
import EducationSection from "../components/education-section"
import ProjectsSection from "../components/projects-section"
import ServicesSection from "../components/services-section"
import CertificatesSection from "../components/certificates-section"
import ContactSection from "../components/contact-section"
import ScrollToTop from "../components/scroll-to-top"
import SocialSidebar from "../components/social-sidebar"

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen bg-background text-foreground">
        <CyberNavigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground font-dm-sans">© 2025 Botir. Barcha huquqlar himoyalangan.</p>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <ScrollToTop />
        
        {/* Social Media Sidebar */}
        <SocialSidebar />
      </main>
    </ClientWrapper>
  )
}
