"use client"

import { useState, useEffect } from "react"
import { navLinks } from "../data/portfolio"

export default function CyberNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.id)
      let current = null
      
      // Find the section that is most visible in the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is considered active if it's in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = sections[i]
            break
          }
        }
      }

      if (current) {
        setActiveSection(current)
      }
    }

    // Initial call to set active section on page load
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

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
      
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50"
          : "bg-slate-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white font-space-grotesk">{"<BotirCode />"}</div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 font-dm-sans transition-all duration-300 hover:text-emerald-400 ${
                  activeSection === link.id ? "text-emerald-400 text-glow" : "text-white"
                }`}
              >
                {link.title}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 animate-pulse-glow" />
                )}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-emerald-400 transition-colors p-2"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-4 py-3 font-dm-sans transition-all duration-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg ${
                      activeSection === link.id ? "text-emerald-400 bg-slate-800/30" : "text-white"
                    }`}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
