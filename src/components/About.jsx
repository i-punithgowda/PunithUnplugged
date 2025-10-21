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
      title: "LLM-Powered Git Diff Summarizer",
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
    <section id="about" className="py-20 bg-white dark:bg-dark-bg min-h-screen flex items-start pt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">About</h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-sans">Education</h3>
              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div key={edu.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 font-sans">
                          {edu.degree}
                        </h4>
                        <p className="text-[#00FF99] font-semibold mb-1 font-sans">
                          {edu.institution}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-sans">
                          {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 font-sans">
                          {edu.duration}
                        </p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 font-sans">
                          CGPA: {edu.cgpa}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-sans">Recent Projects</h3>
              <div className="space-y-6">
                {projectsData.map((project) => (
                  <div key={project.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white font-sans">
                        {project.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 font-sans">
                      {project.description}
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm mb-3 space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-start font-sans">
                          <span className="text-[#00FF99] mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-sans">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
        </div>

        {/* Technical Skills Section - Third Row */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center font-sans">Technical Skills</h3>
          <div className="space-y-8">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-sans">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="border-2 border-[#00FF99] text-[#00FF99] px-4 py-2 rounded-full text-sm font-medium font-sans hover:bg-[#00FF99] hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
