"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Expense Splitting Application",
    description:
      "Built a FastAPI/NextJS expense tracker with a custom debt reduction algorithm, integrating a local HuggingFace and LangChain vector search pipeline to achieve 95% categorization accuracy, while using MongoDB compound indexing for ledger retrieval",
    image: "/portfolio/expenses.png?height=600&width=800",
    technologies: ["NextJS", "Python", "FastAPI", "MongoDB", "HuggingFace"],
    githubUrl: "https://github.com/NaK915/Expenses-Backend-",
  },
  {
    id: 2,
    title: "Access Restricted Group Vaults",
    description:
      "Deployed a secure, full-stack file management system that leveraged Node.js and AWS S3 pre-signed URLs to guarantee safe, sub-second file retrieval for targeted group and individual sharing among 50+ users.",
    image: "/portfolio/argv1.png?height=600&width=800",
    technologies: ["React", "Express", "MongoDB", "AWS S3"],
    githubUrl: "https://gitlab.com/NaK915/argv-application",
  },
  {
    id: 3,
    title: "Training and Placement Portal",
    description:
      "Accelerate and Simplify Training and Placement processes by eliminating over 80% of labor-intensive manual work and implementing an automated system with role-based access control and information cross validation.",
    image: "/portfolio/placeholder.svg?height=600&width=800",
    technologies: ["ReactJS", "ExpressJS", "NodeJS", "TypeScript", "JavaScript", "DynamoDB"],
    githubUrl: "https://github.com/2ybaryl/TnP_Portal",
  },
  {
    id: 4,
    title: "JUET University Website",
    description:
      "Built a website using React, Express, JavaScript and MongoDB for the University with a custom CMS for managing and updating content with over 50+ custom actions.",
    image: "/portfolio/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    githubUrl: "https://github.com/2ybaryl/JUET-frontend",
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
                    src={project.image || "/portfolio/placeholder.svg"}
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
                  src={project.image || "/portfolio/placeholder.svg"}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}