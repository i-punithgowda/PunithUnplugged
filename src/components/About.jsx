import React from 'react'

const About = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "R V College of Engineering",
      location: "Bengaluru, Karnataka",
      cgpa: "8.58",
      duration: "Feb. 2022 – Aug 2023"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Global Institute of Management Sciences",
      location: "Bengaluru, Karnataka",
      cgpa: "8.05",
      duration: "Jun. 2018 – Sep 2021"
    }
  ]

  const projectsData = [
    {
      id: 1,
      title: "summarAIze",
      description: "Built a local-first developer tool to compare Git branches and summarize per-file code changes using the Phi-3 Mini LLM",
      tech: ["FastAPI", "React", "Git", "Python", "Ollama", "Phi-3 Mini", "Docker"],
      duration: "July 2025 – Present",
      details: [
        "Created a FastAPI backend that accepts repo path, base branch, and compare branch to compute diffs with GitPython",
        "Extracted file names and content changes for each file and generated LLM-powered summaries with improvement suggestions",
        "Implemented rule-based code checks: the system evaluates code against customizable coding standards and explains which parts violate the rules and why"
      ]
    }
  ]

  const skillsData = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS3"]
    },
    {
      category: "Frameworks & Platforms",
      skills: ["React.js", "React Native", "Node.js", "Express.js", "FastAPI", "Flask"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "Nginx", "Postman"]
    },
    {
      category: "Cloud & Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Google Cloud"]
    },
    {
      category: "Libraries & UI",
      skills: ["Tailwind CSS", "Redux", "Zustand", "WebSockets", "Telegram Bot API"]
    }
  ]

  return (
    <section id="about" className="py-24 bg-surface-light dark:bg-surface-dark transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white">
            Strategy, craft, and systems thinking
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I’ve helped early-stage founders and enterprise teams ship reliable, human UI across education, wellness and developer tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-shell p-8 space-y-6">
            <h3 className="text-xl font-semibold text-ink dark:text-white">Education</h3>
            <div className="space-y-5">
              {educationData.map((edu) => (
                <div key={edu.id} className="rounded-2xl border border-brand/10 p-5 bg-white/70 dark:bg-white/5">
                  <p className="text-sm uppercase tracking-wide text-brand">{edu.duration}</p>
                  <h4 className="mt-2 text-lg font-semibold text-ink dark:text-white">{edu.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                  <div className="mt-3 flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{edu.location}</span>
                    <span>CGPA {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-shell p-8 space-y-6">
            <h3 className="text-xl font-semibold text-ink dark:text-white">Recent spotlight</h3>
            {projectsData.map((project) => (
              <div key={project.id} className="rounded-2xl border border-white/40 bg-white/70 p-6 dark:bg-white/5">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-lg font-semibold text-ink dark:text-white">
                    {project.title === "summarAIze" ? (
                      <>
                        summar<span className="font-bold bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent">AI</span>ze
                      </>
                    ) : (
                      project.title
                    )}
                  </h4>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{project.duration}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="pill-chip">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="card-shell p-10">
            <h3 className="text-center text-xl font-semibold text-ink dark:text-white mb-8">Technical stack I reach for</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.map((skillGroup, index) => (
                <div key={index} className="rounded-2xl border border-white/50 bg-white/70 p-5 dark:bg-white/5">
                  <p className="text-sm uppercase tracking-wide text-brand">{skillGroup.category}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="pill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
