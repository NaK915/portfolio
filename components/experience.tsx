"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Calendar, CheckCircle2, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "Darwinbox",
    company_logo: "dbox.png",
    duration: "June 2024 - April 2026",
    description:
      "Working as a Backend Developer focusing on building scalable and robust web applications using PHP and Nodejs",
    achievements: [
      "Decoupled long-running backend tasks from synchronous processing to an asynchronous AWS SQS architectural system with fault tolerance, preventing API failure and decreasing response times from minutes to under 500ms.",
      "Engineered a semantic recommendation engine for 5,000+ courses, utilizing OpenAI embeddings to align user skill gaps, career trajectories, and interests with personalized learning paths.",
      "Collaborated on a Neo4j-based Career Architecture system to map cross-role mobility, leveraging OpenAI embeddings to quantify skill overlaps and establish relations among 10000+ designations, reducing assessment time from days to minutes.",
      "Designed end-to-end an event-driven notifications framework to automate 20+ unique task triggers and alerts, integrating with the core enterprise notification system via a scalable, decoupled architecture.",
      "Orchestrated a large-scale settings migration for 1000+ enterprise clients, introducing a flexible configuration schema to support bespoke requirements and scalable multi-language aliasing.",
      "Architected an LMS tracking framework to capture 20+ granular user behavioral events across development plans and learning paths & activities, enabling real-time progress mapping and data-driven insights for personalized learning journeys.",
      "Leveraged Agentic AI for audit and refactoring of 25+ legacy database queries, reducing peak CPU utilization by 35%.",
      "Expanded automated test suites for a multi-language (TypeScript/PHP) module, achieving a 15% gain in code coverage and decreasing production bug density through systematic regression testing.",
    ],
    technologies: ["Express", "TypeScript", "PHP", "Yii", "Playwright", "SQS", "MongoDB"],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Darwinbox",
    company_logo: "dbox.png",
    duration: "January 2024 - May 2024",
    description:
      "Worked as a Software Engineering Intern, assisting in the development of web applications and learning industry best practices.",
    achievements: [
      "Devised a standardized, framework-agnostic Document Viewer web component with Vanilla JS and Stencil.js to replace expensive third-party libraries, cutting operational costs by 60% and streamlining frontend development workflows.",
      "Developed an internal file sharing system (React, Node.js, Express, AWS S3) featuring group/individual sharing capabilities; onboarded 50+ users while maintaining 99% uptime and sub-second file retrieval speeds.",
      "Aced training tasks using 10+ technologies such as JavaScript, TypeScript, React, Express, MongoDB, PHP, Yii, Redis and AWS tools (EC2, ECS, SQS, S3, RDS, etc.) in collaboration with fellow team members.",
    ],
    technologies: ["JavaScript", "TypeScript", "PHP", "Redis", "Node.js", "Express", "MongoDB", "ReactJS", "Web APIs", "SQS", "EC2", "S3", "StencilJS"],
  },
  {
    id: 3,
    role: "Frontend Engineer Intern",
    company: "Siksti (now Slikk)",
    company_logo: "slikk.png",
    duration: "January 2023 - April 2023",
    description:
      "Worked as a Frontend Developer, single-handedly managing the admin portal and collaborating on the customer application.",
    achievements: [
      "Engaged as leading frontend engineer, introducing 50+ new features for the application and admin dashboard over a span of 3 months using JavaScript, TypeScript, React, Material UI, React Native and Google Map API.",
      "Integrated CI/CD with AWS Beanstalk for continuous deployment of dashboard in development environment using GitHub Actions.",
      "Created website with SEO optimization with 92 score on Lighthouse and 96 score on PageSpeed Insights.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Shopify"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
          My professional journey and the valuable experience I've gained along
          the way
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
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
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
                <div
                  className={cn(
                    "w-full md:w-[calc(50%-2rem)] md:px-8",
                    index % 2 === 0 ? "md:text-right" : "",
                  )}
                >
                  <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all text-left">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold">{experience.role}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <img src={experience.company_logo} className="h-6 w-6 text-primary"></img>
                      <span className="font-bold text-foreground">
                        {experience.company}
                      </span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-muted-foreground">
                      {experience.description}
                    </p>

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
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary rounded-full"
                        >
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
  );
}
