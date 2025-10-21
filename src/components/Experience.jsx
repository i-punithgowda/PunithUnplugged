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
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-bg dark:to-dark-bg min-h-screen flex items-start pt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            Here's a timeline of my professional journey and the impactful projects I've worked on.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-[#00FF99]"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00FF99] border-4 border-white dark:border-dark-bg shadow-lg z-10">
                  <div className="absolute inset-0 rounded-full bg-[#00FF99] opacity-20"></div>
                </div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-white dark:bg-dark-bg rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-3xl p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                        {experience.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight font-sans">
                          {experience.title}
                        </h3>
                        <p className="text-lg font-semibold text-[#00FF99] mb-1 font-sans">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium font-sans">
                          {experience.duration}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide font-sans">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="border-2 border-[#00FF99] text-[#00FF99] px-3 py-1 rounded-full text-sm font-medium font-sans hover:bg-[#00FF99] hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide font-sans">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start font-sans">
                            <span className="text-[#00FF99] mr-3 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
