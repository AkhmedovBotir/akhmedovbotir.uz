"use client"

import { testimonials } from "../data/portfolio"
import { Card } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-glow">Mijozlar Fikri</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
            Mening ishim haqida mijozlarning fikr-mulohazalari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glassmorphism hover:neon-glow transition-all duration-500 p-8 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <Avatar className="w-16 h-16 mr-4 border-2 border-accent">
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback className="bg-accent text-accent-foreground font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold font-space-grotesk text-glow">{testimonial.name}</h4>
                  <p className="text-sm text-accent font-dm-sans">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${i < testimonial.rating ? "text-accent" : "text-muted-foreground"}`}
                  ></i>
                ))}
              </div>

              <p className="text-muted-foreground font-dm-sans leading-relaxed italic">"{testimonial.testimonial}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
