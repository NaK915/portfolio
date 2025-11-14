"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechSolutions India",
    content:
      "Rahul consistently delivered high-quality code and was always willing to go the extra mile. His attention to detail and problem-solving skills made him an invaluable team member. He transformed our user interface and significantly improved our application's performance.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer",
    company: "InnovateX",
    content:
      "Working with Rahul was a pleasure. He quickly adapted to our development workflow and contributed meaningful improvements to our codebase. His fresh perspective and eagerness to learn made him stand out among interns.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Business Owner",
    company: "Local E-commerce Store",
    content:
      "Rahul developed our e-commerce website from scratch and exceeded all our expectations. The site is fast, user-friendly, and has helped increase our online sales by 60%. His communication throughout the project was excellent.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Startup Founder",
    company: "TaskFlow Solutions",
    content:
      "Rahul's work on our task management application was outstanding. He delivered a robust, scalable solution that our team uses daily. His understanding of both frontend and backend development saved us significant time and resources.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          Client Testimonials
        </h2>

        <p
          className={cn(
            "section-subtitle transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          What clients and colleagues say about working with me
        </p>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-12">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "bg-card rounded-lg p-6 border shadow-sm min-w-[280px] snap-start",
                  "transform transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  {
                    "delay-200": index === 0,
                    "delay-300": index === 1,
                    "delay-400": index === 2,
                    "delay-500": index === 3,
                  },
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all",
                "transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                {
                  "delay-200": index === 0,
                  "delay-300": index === 1,
                  "delay-400": index === 2,
                  "delay-500": index === 3,
                },
              )}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
              </div>

              <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>

              <div className="border-t pt-4">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
