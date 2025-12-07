"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "./ui/card"

const roadmapData = [
  {
    year: "2021",
    title: "Dasturlashga Kirish",
    description: "HTML, CSS va JavaScript asoslarini o'rgandim. Birinchi veb-saytlarimni yaratdim.",
    icon: "fas fa-code",
    color: "#00ff7f",
  },
  {
    year: "2022",
    title: "Frontend Mutaxassisligi",
    description: "React.js, Vue.js va zamonaviy frontend texnologiyalarini chuqur o'rgandim.",
    icon: "fab fa-react",
    color: "#00ffff",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    description: "Node.js, Express.js va ma'lumotlar bazalari bilan ishlashni o'rgandim. To'liq loyihalar yaratdim.",
    icon: "fas fa-server",
    color: "#ff6b6b",
  },
  {
    year: "2024",
    title: "Kiberxavfsizlik va AI",
    description: "Kiberxavfsizlik sohasida bilimlarimni oshirdim va AI texnologiyalari bilan tanishdim.",
    icon: "fas fa-shield-alt",
    color: "#ffd93d",
  },
  {
    year: "2025",
    title: "Hozirgi Vaqt",
    description: "Zamonaviy texnologiyalar bilan murakkab loyihalar ustida ishlayman va o'z bilimlarimni ulashaman.",
    icon: "fas fa-rocket",
    color: "#ff9ff3",
  },
]

export default function AboutRoadmapSection() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = sectionRef.current?.querySelectorAll(".roadmap-item")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-8 text-glow animate-hologram">
            Men Haqimda
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-dm-sans glassmorphism-strong p-6 rounded-2xl">
            Mening professional rivojlanish yo'lim va erishgan yutuqlarim
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-green-400 to-purple-400 opacity-60"></div>

          {roadmapData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`roadmap-item flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="glassmorphism-strong cyber-border p-6 hover:neon-glow transition-all duration-500 group">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse"
                      style={{
                        backgroundColor: `${item.color}20`,
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 20px ${item.color}40`,
                      }}
                    >
                      <i className={`${item.icon} text-xl`} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-space-grotesk" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground font-dm-sans">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-dm-sans leading-relaxed">{item.description}</p>
                </Card>
              </div>

              {/* Timeline Node */}
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                    visibleItems.includes(index) ? "scale-125 animate-pulse" : "scale-100"
                  }`}
                  style={{
                    backgroundColor: item.color,
                    borderColor: item.color,
                    boxShadow: `0 0 30px ${item.color}`,
                  }}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
