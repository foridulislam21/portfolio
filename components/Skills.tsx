"use client";

import { useState } from "react";
import {
  Braces,
  Database,
  Server,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Layers3,
  Boxes,
  Terminal,
  Zap,
  CheckCircle2,
} from "lucide-react";

type Category = "Backend" | "Frontend" | "Data" | "DevOps";

type Skill = {
  name: string;
  description: string;
  level: "Expert" | "Strong" | "Working Knowledge";
  icon: React.ElementType;
  featured?: boolean;
};

const categories: {
  name: Category;
  icon: React.ElementType;
}[] = [
  { name: "Backend", icon: Server },
  { name: "Frontend", icon: Code2 },
  { name: "Data", icon: Database },
  { name: "DevOps", icon: Cloud },
];

const skills: Record<Category, Skill[]> = {
  Backend: [
    {
      name: "C# / .NET",
      description: "Modern, scalable backend development",
      level: "Expert",
      icon: Braces,
      featured: true,
    },
    {
      name: "ASP.NET Core",
      description: "Production-ready APIs and services",
      level: "Expert",
      icon: Server,
      featured: true,
    },
    {
      name: "REST APIs",
      description: "Clean and maintainable API design",
      level: "Expert",
      icon: Layers3,
    },
    {
      name: "Entity Framework Core",
      description: "Data access and persistence",
      level: "Strong",
      icon: Database,
    },
    {
      name: "Custom Mediator",
      description: "Pipeline and message-driven architecture",
      level: "Strong",
      icon: Boxes,
    },
  ],

  Frontend: [
    {
      name: "Next.js",
      description: "Modern React applications",
      level: "Strong",
      icon: Code2,
      featured: true,
    },
    {
      name: "TypeScript",
      description: "Type-safe application development",
      level: "Strong",
      icon: Braces,
    },
    {
      name: "React",
      description: "Component-driven interfaces",
      level: "Strong",
      icon: Code2,
    },
    {
      name: "Angular",
      description: "Enterprise web applications",
      level: "Working Knowledge",
      icon: Layers3,
    },
    {
      name: "Tailwind CSS",
      description: "Responsive modern UI systems",
      level: "Strong",
      icon: Zap,
    },
  ],

  Data: [
    {
      name: "PostgreSQL",
      description: "Relational data and complex queries",
      level: "Strong",
      icon: Database,
      featured: true,
    },
    {
      name: "Redis",
      description: "Caching, queues and fast data access",
      level: "Strong",
      icon: Zap,
      featured: true,
    },
    {
      name: "SQL Server",
      description: "Enterprise relational databases",
      level: "Strong",
      icon: Database,
    },
    {
      name: "MongoDB",
      description: "Document-oriented data storage",
      level: "Working Knowledge",
      icon: Database,
    },
  ],

  DevOps: [
    {
      name: "Docker",
      description: "Containerized development and deployment",
      level: "Strong",
      icon: Container,
      featured: true,
    },
    {
      name: "Git",
      description: "Version control and collaboration",
      level: "Expert",
      icon: GitBranch,
    },
    {
      name: "IIS",
      description: "Windows-based application hosting",
      level: "Strong",
      icon: Server,
    },
    {
      name: "CI / CD",
      description: "Automated build and deployment workflows",
      level: "Strong",
      icon: Terminal,
    },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Backend");

  const currentSkills = skills[activeCategory];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Header */}
        <div className="skills-header">
          <div>
            <p className="skills-eyebrow">
              <span>02</span>
              Technology
            </p>

            <h2 className="skills-title">
              Tools I use
              <br />
              <span>to build.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A practical technology stack focused on building scalable
            backend systems, reliable infrastructure and modern web
            experiences.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="skills-tabs-wrapper">
          <div className="skills-tabs">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`skills-tab ${
                    isActive ? "skills-tab-active" : ""
                  }`}
                >
                  <Icon size={17} />
                  <span>{category.name}</span>

                  {isActive && (
                    <span className="skills-tab-indicator" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" key={activeCategory}>
          {currentSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.name}
                className={`skill-card ${
                  skill.featured ? "skill-card-featured" : ""
                }`}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  {skill.featured && (
                    <span className="skill-featured">
                      Featured
                    </span>
                  )}
                </div>

                <div className="skill-card-content">
                  <h3>{skill.name}</h3>

                  <p>{skill.description}</p>
                </div>

                <div className="skill-card-footer">
                  <div className="skill-level">
                    <CheckCircle2 size={14} />
                    <span>{skill.level}</span>
                  </div>

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="skill-card-glow" />
              </article>
            );
          })}
        </div>

        {/* Bottom Stack */}
        <div className="skills-stack">
          <div className="skills-stack-header">
            <div>
              <p className="skills-stack-label">Core stack</p>
              <p className="skills-stack-description">
                Technologies I frequently work with
              </p>
            </div>

            <div className="skills-stack-status">
              <span />
              Always learning
            </div>
          </div>

          <div className="skills-stack-list">
            {[
              ".NET 10",
              "C#",
              "ASP.NET Core",
              "PostgreSQL",
              "Redis",
              "Docker",
              "Next.js",
              "TypeScript",
              "React",
              "Git",
            ].map((technology) => (
              <span key={technology} className="stack-pill">
                {technology}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
