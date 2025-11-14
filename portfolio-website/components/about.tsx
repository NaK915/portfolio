"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, Briefcase, Code, Target, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700 delay-100 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer from India skilled in Full-Stack Development and DevOps tools
              possessing a deep understanding of architectural and system design principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div
              className={cn(
                "bg-card rounded-lg p-6 border shadow-sm transition-all duration-700 delay-200 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Education</h3>
              <p className="text-muted-foreground">B.Tech CSE from Jaypee University of Engineering and Technology, Guna</p>
            </div>

            <div
              className={cn(
                "bg-card rounded-lg p-6 border shadow-sm transition-all duration-700 delay-300 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Experience</h3>
              <p className="text-muted-foreground">1 Year of Professional Development Experience</p>
            </div>

            <div
              className={cn(
                "bg-card rounded-lg p-6 border shadow-sm transition-all duration-700 delay-400 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Specialization</h3>
              <p className="text-muted-foreground">Full-Stack Web Development</p>
              <p className="text-muted-foreground">DevOps tools</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={cn(
                "transition-all duration-700 delay-500 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-2 rounded-lg mr-3">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-xl">My Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To design and implement Robust Software Solutions that meet client needs and exceed expectations
              </p>
            </div>

            <div
              className={cn(
                "transition-all duration-700 delay-600 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-2 rounded-lg mr-3">
                  <Lightbulb className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-xl">What Drives Me</h3>
              </div>
              <p className="text-muted-foreground">
                I'm passionate about problem-solving and creating user-friendly applications. Every project is an
                opportunity to learn something new and push the boundaries of what's possible with code.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "text-center mt-12 transition-all duration-700 delay-700 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-lg font-medium text-primary mb-2">"Code is like a puzzle, and I love solving them."</p>
              <p className="text-muted-foreground">
                This philosophy drives my approach to development - breaking down complex problems into manageable
                pieces and crafting elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
