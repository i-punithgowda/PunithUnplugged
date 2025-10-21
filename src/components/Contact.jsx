import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-bg dark:to-dark-bg min-h-screen flex items-start pt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent font-sans"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent font-sans"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#00FF99] focus:border-transparent font-sans"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full border-2 border-[#00FF99] text-[#00FF99] py-3 px-6 rounded-lg font-semibold hover:bg-[#00FF99] hover:text-white transition-all duration-300 font-sans"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-sans">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:punithgsp.partha@gmail.com" className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-bg rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-[#00FF99] hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full group-hover:bg-[#00FF99]/10 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#00FF99] group-hover:text-[#00FF99] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white font-sans group-hover:text-[#00FF99] transition-colors duration-300">Email</p>
                  <p className="text-gray-600 dark:text-gray-300 font-sans">punithgsp.partha@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/i-punithgowda" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-bg rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-[#00FF99] hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full group-hover:bg-[#00FF99]/10 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#00FF99] group-hover:text-[#00FF99] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white font-sans group-hover:text-[#00FF99] transition-colors duration-300">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-300 font-sans">github.com/i-punithgowda</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/punith-gowda-s-p-7452391b8" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-bg rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-[#00FF99] hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full group-hover:bg-[#00FF99]/10 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#00FF99] group-hover:text-[#00FF99] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white font-sans group-hover:text-[#00FF99] transition-colors duration-300">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-300 font-sans">linkedin.com/in/punith-gowda-s-p-7452391b8</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
