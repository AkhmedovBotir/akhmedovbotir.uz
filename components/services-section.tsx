"use client"

import { motion } from "framer-motion"
import { services } from "../data/portfolio"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Mr. Robot Style Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Matrix-style Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Terminal-style Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50" />
      
      {/* Glitch Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Terminal Cursor Effect */}
      <div className="absolute top-20 right-20 w-2 h-6 bg-green-400 animate-pulse" />
      
      {/* Code Rain Effect */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      )}

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono relative">
              <span className="relative z-10">XIZMATLARIM</span>
              <div className="absolute inset-0 text-green-400/20 blur-sm">
                XIZMATLARIM
              </div>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full shadow-lg shadow-green-400/50" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative bg-black/80 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8 hover:border-green-400/70 transition-all duration-500 h-full group-hover:shadow-lg group-hover:shadow-green-400/20">
                {/* Terminal-style Header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-400/30">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-green-400 text-sm font-mono">terminal.exe</div>
                </div>

                {/* Service Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl flex items-center justify-center text-3xl border border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2 font-mono">{service.title}</h3>
                    <div className="text-green-400/60 text-sm font-mono">[ACTIVE]</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-green-300 leading-relaxed mb-6 font-mono text-sm">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-green-300 font-mono text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 animate-pulse" />
                      <span className="before:content-['>'] before:text-green-400 before:mr-2">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className="w-full bg-black border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-500 font-mono group-hover:shadow-lg group-hover:shadow-green-400/30"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="mr-2">$</span>
                  start_project
                </Button>

                {/* Terminal Cursor */}
                <div className="absolute bottom-4 right-4 w-2 h-4 bg-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
