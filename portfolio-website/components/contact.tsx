"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Mail, Phone, Github, Linkedin, FileText, Link } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          Get In Touch
        </h2>

        <p
          className={cn(
            "section-subtitle transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>

        <div className="max-w-2xl mx-auto mt-12">
          <div
            className={cn(
              "bg-card rounded-lg p-8 border shadow-sm transition-all duration-700 delay-200 transform text-center max-w-xl mx-auto",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <h3 className="text-xl font-bold mb-8">Contact Information</h3>

            <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-6 sm:space-y-0 mb-10">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:rahul.sharma@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  rahul.sharma@example.com
                </a>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-secondary p-4 rounded-full border transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-secondary p-4 rounded-full border transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-secondary p-4 rounded-full border transition-colors"
                >
                  <FileText className="h-6 w-6" />
                  <span className="sr-only">Resume</span>
                </a>
                <a
                  href="https://linktr.ee/rahulsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-secondary p-4 rounded-full border transition-colors"
                >
                  <Link className="h-6 w-6" />
                  <span className="sr-only">Linktree</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
