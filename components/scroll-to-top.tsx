"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glassmorphism hover:neon-glow transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Tepaga chiqish"
    >
      <i className="fas fa-arrow-up text-white text-2xl"></i>
    </Button>
  )
}
