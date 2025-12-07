"use client"

import { motion } from "framer-motion"
import { education } from "../data/portfolio"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-emerald-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ta'lim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/50 via-cyan-400/50 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 ml-20"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[3.25rem] top-6 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-emerald-400/25" />

              {/* Education Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-500">
                  {/* Institution Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center text-2xl border border-emerald-400/30">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-emerald-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Date and Location */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full text-cyan-400 border border-slate-600/50">
                      📅 {edu.date}
                    </span>
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full text-emerald-400 border border-slate-600/50">
                      📍 {edu.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
