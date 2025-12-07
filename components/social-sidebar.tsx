"use client"

import { useState, useEffect } from "react"
import TerminalModal from "./terminal-modal"

export default function SocialSidebar() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
        {/* Terminal Button */}
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="glassmorphism-strong p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] backdrop-blur-md"
          style={{ animationDelay: "0s", animation: "slideInLeft 0.6s ease-out forwards" }}
          title="Terminalga Kirish"
        >
          <i className="fas fa-terminal text-xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300"></i>
        </button>

        {/* Social Media Links */}
        <a
          href="https://github.com/AkhmedovBotir"
          target="_blank"
          rel="noopener noreferrer"
          className="glassmorphism-strong p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] backdrop-blur-md"
          style={{ animationDelay: "0.1s", animation: "slideInLeft 0.6s ease-out forwards" }}
          title="GitHub - AkhmedovBotir"
        >
          <i className="fa-brands fa-github-alt text-xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/ahmedov-botir-uz/"
          target="_blank"
          rel="noopener noreferrer"
          className="glassmorphism-strong p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] backdrop-blur-md"
          style={{ animationDelay: "0.2s", animation: "slideInLeft 0.6s ease-out forwards" }}
          title="LinkedIn - Ahmedov Botir"
        >
          <i className="fa-brands fa-linkedin-in text-xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300"></i>
        </a>

        <a
          href="https://t.me/botircode"
          target="_blank"
          rel="noopener noreferrer"
          className="glassmorphism-strong p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] backdrop-blur-md"
          style={{ animationDelay: "0.3s", animation: "slideInLeft 0.6s ease-out forwards" }}
          title="Telegram - @botircode"
        >
          <i className="fa-brands fa-telegram text-xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300"></i>
        </a>
      </div>

      <TerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  )
}
