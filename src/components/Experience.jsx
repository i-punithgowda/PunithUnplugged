import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "EdTech Platform – Performance Optimization",
      company: "Performance Optimization Specialist",
      duration: "Dec 2023 – May 2024",
      technologies: ["JavaScript", "PHP", "MySQL"],
      achievements: [
        "Profiled a large-scale ed-tech application with complex SQL queries and JavaScript logic to identify bottlenecks causing slow responses",
        "Rewrote critical admin-side code and optimized queries, reducing response times from 3 minutes to under 1 second",
        "Implemented stored procedures for high-volume client-side queries, improving initial query execution from 40s to 1s",
        "Enhanced overall system performance, enabling smooth data fetching and filtering for thousands of students"
      ],
      icon: "⚡"
    },
    {
      id: 2,
      title: "University Mentoring Platform",
      company: "Full-Stack Developer",
      duration: "June 2024 – Jan 2025",
      technologies: ["React", "Node.js", "MySQL", "Sequelize", "WebSockets"],
      achievements: [
        "Built a multi-university system to track student records, conduct online examinations, and store scores, logbooks, EPA and assessments",
        "Developed a mentoring module with appointment timeslots, live chat via WebSockets, and detailed student performance visualization (GPA, GPAX, semester marks)",
        "Designed a singleton-based backend DB connection to support multiple university databases through a master DB",
        "Implemented admin-side mentoring configuration including phases, academic years, and mentor-to-student assignments",
        "Built an admin dashboard to display student progress across multiple aspects such as Logbook, EPA Progress, Longitudinal Pool, and Excellence metrics"
      ],
      icon: "🎓"
    },
    {
      id: 3,
      title: "FaithTech Wellness Platform",
      company: "Backend Developer",
      duration: "Feb 2025 – Present",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS S3", "Google Cloud"],
      achievements: [
        "Developed backend for a multi-role wellness platform supporting users, pandits, and content creators",
        "Built voice and text Q&A functionality for users and pandits, storing all media securely in Google Cloud",
        "Implemented ritual recommendations and habit tracking, alongside horoscope display for users",
        "Built secure content upload and delivery for creators using Google Cloud CDN and signed URLs"
      ],
      icon: "🧘"
    }
  ]

  return (
    <section id="experience" className="py-24 bg-surface-light dark:bg-surface-dark transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white">
            A systems-first view on shipping software
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Full-stack partnerships with product owners to stabilise platforms, unblock teams, and launch confidently.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-12">
          {experiences.map((experience) => (
            <article key={experience.id} className="card-shell p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-brand/20 bg-white/90 px-4 py-2 text-sm font-medium text-brand shadow-sm dark:bg-white/10 dark:text-white">
                    <span>{experience.icon}</span>
                    <span>{experience.duration}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-ink dark:text-white">{experience.title}</h3>
                  <p className="text-lg font-medium text-slate-500 dark:text-slate-300">{experience.company}</p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-300 max-w-sm">
                  I partnered end-to-end with product, engineering, and ops teams to close feedback loops and release stable capabilities without the typical fire drills.
                </div>
              </div>

              <div className="mt-8 border-t border-white/40 dark:border-white/10 pt-8 grid gap-6 md:grid-cols-[1fr_1.3fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="pill-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 mb-3">Highlights</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
