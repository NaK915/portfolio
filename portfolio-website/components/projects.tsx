"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout. Implemented responsive design and optimized for performance with user authentication, product filtering, cart management, and Stripe payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking features. Built with Firebase for real-time synchronization, drag-and-drop functionality, and email notifications for seamless team collaboration.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive visualizations. Features include location saving, unit conversion, and responsive charts using Chart.js and OpenWeather API integration.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "HTML/CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description:
      "A finance tracking application that helps users monitor expenses, set budgets, and visualize spending patterns. Includes expense categorization, budget setting, CSV import functionality, and custom data visualizations using D3.js for clear financial insights.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          My Projects
        </h2>

        <p
          className={cn(
            "section-subtitle transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          A showcase of my recent work and the technologies I've been working with
        </p>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-12">
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all min-w-[300px] snap-start",
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
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full mr-2"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all",
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
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-2 rounded-full mr-2"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-2 rounded-full"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
