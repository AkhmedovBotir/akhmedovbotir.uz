"use client"

import { useState, useEffect, useRef } from "react"
import { skills } from "../data/skills"
import { Card } from "./ui/card"

const categories = [
  { id: "frontend", name: "Frontend", icon: "fas fa-laptop-code" },
  { id: "backend", name: "Backend", icon: "fas fa-server" },
  { id: "database", name: "Database", icon: "fas fa-database" },
  { id: "mobile", name: "Mobile", icon: "fas fa-mobile-alt" },
  { id: "devops", name: "DevOps", icon: "fas fa-cloud" },
  { id: "tools", name: "Tools", icon: "fas fa-tools" },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillCards = sectionRef.current?.querySelectorAll(".skill-card")
    skillCards?.forEach((card: Element) => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredSkills])

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-8 text-glow animate-hologram">
            Texnik Ko'nikmalar
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-dm-sans glassmorphism-strong p-6 rounded-2xl">
            Zamonaviy texnologiyalar va dasturlash tillari bilan ishlash tajribam
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-xl font-dm-sans transition-all duration-500 cyber-border relative overflow-hidden group ${
                activeCategory === category.id
                  ? "glassmorphism-strong neon-glow animate-pulse-glow text-accent"
                  : "glassmorphism text-muted-foreground hover:text-accent hover:neon-glow"
              }`}
            >
              <span className="relative z-10">
                <i className={`${category.icon} mr-3 text-lg`}></i>
                {category.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {filteredSkills.map((skill, index) => (
            <Card
              key={skill.name}
              className="skill-card cyber-card hover:glassmorphism-strong transition-all duration-500 p-4 text-center group cursor-pointer cyber-3d-card relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: hoveredSkill === skill.name ? "translateZ(30px) rotateX(10deg)" : "",
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: skill.color }}
              />

              <div className="relative z-10">
                <div className="mb-3 relative">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                  {skill.icon.startsWith('/') ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 transition-all duration-500 group-hover:scale-125 group-hover:animate-pulse relative z-10 mx-auto"
                      style={{
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 20px ${skill.color})` : "",
                      }}
                    />
                  ) : (
                    <i
                      className={`${skill.icon} text-3xl transition-all duration-500 group-hover:scale-125 group-hover:animate-pulse relative z-10`}
                      style={{
                        color: skill.color,
                        filter: hoveredSkill === skill.name ? `drop-shadow(0 0 20px ${skill.color})` : "",
                      }}
                    />
                  )}
                </div>
                <h3 className="font-dm-sans font-semibold text-sm text-card-foreground group-hover:text-glow transition-all duration-500 group-hover:scale-110">
                  {skill.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {isMounted && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
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
        )}
      </div>
    </section>
  )
}
