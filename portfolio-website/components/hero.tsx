"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-6 transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">Software Engineer</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Naman Khattar</span>
            </h1>

            <p className="text-xl text-muted-foreground">Full Stack Software Engineer</p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-sm">Python</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/Resume_Naman.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/NaK915"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nak915"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:khattarnaman915@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <Image
                  src="/passsphoto.jpg"
                  alt="Naman Khattar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-6 bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-3">Quick Summary</h3>
                <p className="space-y-2 text-sm text-muted-foreground">
                  Passionate and Versatile Full Stack Software Developer with 1+ year experience in Software Development and DevOps tools.
                  {/* <li>• 1 Year of Professional Experience</li>
                  <li>• Full-Stack Web Developer</li>
                  <li>• Specialized in React & Node.js</li>
                  <li>• Based in New Delhi, India</li>
                  <li>• Open to Remote Opportunities</li> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  )
}
