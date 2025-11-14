"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, CheckCircle2, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "Darwinbox",
    duration: "June 2024 - Present",
    description:
      "Working as a backend developer focusing on building scalable and robust web applications using React and Next.js.",
    achievements: [
      "Developed and maintained client-facing web applications using React and Next.js",
      "Improved page load time by 40% through code optimization and lazy loading",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Participated in code reviews and provided constructive feedback to team members",
    ],
    technologies: ["Express", "TypeScript", "PHP", "Yii", "Playwright"],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "InnovateX",
    duration: "January 2024 - May 2024",
    description:
      "Worked as a software engineering intern, assisting in the development of web applications and learning industry best practices.",
    achievements: [
      "Developed an internal tool used by 50+ engineers for project management",
      "Implemented RESTful APIs using Node.js and Express",
      "Fixed 20+ bugs in the existing codebase, improving application stability",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Git"],
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "September 2023 - December 2023",
    description:
      "Worked as a freelance web developer, creating websites and web applications for small businesses and startups.",
    achievements: [
      "Designed and developed 5+ websites for small businesses",
      "Implemented e-commerce functionality using Stripe for payment processing",
      "Optimized websites for search engines, improving client visibility",
      "Provided ongoing maintenance and support for client websites",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Shopify"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          Work Experience
        </h2>

        <p
          className={cn(
            "section-subtitle transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          My professional journey and the valuable experience I've gained along the way
        </p>

        <div className="mt-12 relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={cn(
                "relative mb-8 md:mb-0",
                "transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                {
                  "delay-200": index === 0,
                  "delay-300": index === 1,
                  "delay-400": index === 2,
                },
              )}
            >
              <div
                className={cn(
                  "flex flex-col md:flex-row items-start md:items-center gap-4",
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                {/* Content */}
                <div className={cn("w-full md:w-[calc(50%-2rem)] md:px-8", index % 2 === 0 ? "md:text-right" : "")}>
                  <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all text-left">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold">{experience.role}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="font-bold text-foreground">{experience.company}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-muted-foreground">{experience.description}</p>

                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
