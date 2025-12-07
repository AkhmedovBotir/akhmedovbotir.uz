"use client"

import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { socialLinks } from "../data/portfolio"

export default function HeroSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.3 + 0.1})`
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const matrixInterval = setInterval(drawMatrix, 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      clearInterval(matrixInterval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-100" />

      <div className="cyber-scan-line" />
      <div className="absolute inset-0 cyber-grid opacity-100" />

      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <div className="cyber-3d">
          <h1 className="text-4xl md:text-8xl font-bold font-space-grotesk mb-8 text-glow">
            <span className="text-cyan-400">{"<"}</span>
            <span className="text-green-400 animate-pulse">BotirCode</span>
            <span className="text-cyan-400">{" />"}</span>
          </h1>
          <div className="text-2xl md:text-3xl font-dm-sans mb-10 text-accent glassmorphism-strong px-8 py-4 rounded-xl inline-block shadow-[0_0_50px_rgba(0,255,127,0.4),inset_0_0_30px_rgba(0,255,127,0.1)] border border-green-400/50">
            Full Stack Developer
          </div>
          <p className="text-lg md:text-xl text-foreground mb-16 max-w-3xl mx-auto leading-relaxed glassmorphism-strong p-6 rounded-xl cyber-border">
            Zamonaviy veb-saytlar, mobil ilovalar va Telegram botlar yaratuvchi. React, Node.js va zamonaviy
            texnologiyalar bilan ishlayman. Kiberxavfsizlik va AI sohasida ham faolman.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="glassmorphism-strong neon-glow hover:shadow-[0_0_40px_rgba(0,255,127,0.6)] font-dm-sans px-10 py-4 text-lg cyber-3d-card bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="mr-3">🚀</span>
            Loyihalarimni Ko'rish
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glassmorphism-strong border-cyan-900 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 font-dm-sans px-10 py-4 text-lg bg-transparent cyber-3d-card"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="mr-3">📡</span>
            Bog'lanish
          </Button>
        </div>

        <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism-strong p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] backdrop-blur-md"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideInLeft 0.6s ease-out forwards",
              }}
            >
              <i
                className={`${social.icon} text-xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
