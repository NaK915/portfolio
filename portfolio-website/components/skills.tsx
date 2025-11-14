"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code2, Database, Server, GitBranch, Terminal, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "Authentication", "Authorization"],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "Vercel", "Netlify", "Docker"],
  },
  {
    title: "Tools & Practices",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Agile", "Scrum", "CI/CD", "Testing"],
  },
  {
    title: "DevOps",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      "Linux",
      "Bash",
      "GitHub Actions",
      "Continuous Integration",
      "Deployment",
      "Monitoring",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    title: "Other Technologies",
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      "WebSockets",
      "Progressive Web Apps",
      "SEO",
      "Analytics",
      "Third-party APIs",
      "Payment Integration",
      "Authentication",
      "Caching",
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <h2
          className={cn(
            "section-title transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          Skills & Technologies
        </h2>

        <p
          className={cn(
            "section-subtitle transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          A comprehensive overview of my technical expertise and professional capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border",
                "transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                { "delay-200": index < 4, "delay-300": index >= 4 },
              )}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md text-primary">{category.icon}</div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 bg-secondary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
