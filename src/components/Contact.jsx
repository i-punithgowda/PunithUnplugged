import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('0OyYMAQF3lppjXnUf')
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        'service_gwifucw',
        'template_ql7nkin',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface-light dark:bg-surface-dark transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white">Let’s build something thoughtful</h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Share where you are stuck—strategy, performance, DX—and I’ll help map a calm path forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="card-shell p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:bg-white/5 dark:text-white"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:bg-white/5 dark:text-white"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Project context
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:bg-white/5 dark:text-white"
                  placeholder="What are we solving together?"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-brand text-white py-3 text-sm font-semibold tracking-wide shadow-card transition hover:bg-brand-deep disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send the note'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                  ✗ Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="card-shell p-8">
              <h3 className="text-xl font-semibold text-ink dark:text-white">Collaboration fit</h3>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Available for fractional product engineering, platform hardening, and design-led prototyping sprints.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: 'Email',
                  value: 'punithgsp.partha@gmail.com',
                  href: 'mailto:punithgsp.partha@gmail.com',
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  label: 'GitHub',
                  value: 'github.com/i-punithgowda',
                  href: 'https://github.com/i-punithgowda',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.48 0 12.25c0 5.42 3.44 10.01 8.21 11.63.6.11.82-.27.82-.59v-2.26c-3.34.75-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.78-1.33-1.78-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.26 1.84 1.26 1.07 1.85 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.35-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.11-3.19 0 0 1.01-.33 3.3 1.24.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.57 3.3-1.24 3.3-1.24.65 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.63-2.81 5.64-5.48 5.95.43.38.83 1.13.83 2.28v3.28c0 .33.21.71.83.59C20.56 22.25 24 17.67 24 12.25 24 5.48 18.63 0 12 0z" />
                    </svg>
                  )
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/punith-gowda-s-p-7452391b8',
                  href: 'https://www.linkedin.com/in/punith-gowda-s-p-7452391b8',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.855 0-2.138 1.45-2.138 2.949v5.657H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.264 2.37 4.264 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.927-2.068-2.068C3.269 4.223 4.193 3.3 5.337 3.3c1.142 0 2.064.923 2.064 2.065 0 1.14-.922 2.068-2.064 2.068zm-1.78 13.019h3.56V9h-3.56v11.452z" />
                    </svg>
                  )
                }
              ].map((contactInfo) => (
                <a
                  key={contactInfo.label}
                  href={contactInfo.href}
                  target={contactInfo.href.startsWith('http') ? '_blank' : undefined}
                  rel={contactInfo.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 transition hover:border-brand hover:text-brand dark:bg-surface-card-dark/80 dark:text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-brand dark:bg-white/10">
                    {contactInfo.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{contactInfo.label}</p>
                    <p className="text-base font-medium text-ink dark:text-white">{contactInfo.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
