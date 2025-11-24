import React from 'react'
import resumePdf from '../assets/Punith_Gowda_S_P.pdf'
import profilePicture from '../assets/profile_picture.jpeg'
import Typist from './Typist'

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Punith_Gowda_S_P_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/i-punithgowda',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.48 0 12.25c0 5.42 3.44 10.01 8.21 11.63.6.11.82-.27.82-.59v-2.26c-3.34.75-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.78-1.33-1.78-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.26 1.84 1.26 1.07 1.85 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.35-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.11-3.19 0 0 1.01-.33 3.3 1.24.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.57 3.3-1.24 3.3-1.24.65 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.63-2.81 5.64-5.48 5.95.43.38.83 1.13.83 2.28v3.28c0 .33.21.71.83.59C20.56 22.25 24 17.67 24 12.25 24 5.48 18.63 0 12 0z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/punith-gowda-s-p-7452391b8',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.855 0-2.138 1.45-2.138 2.949v5.657H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.264 2.37 4.264 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.927-2.068-2.068C3.269 4.223 4.193 3.3 5.337 3.3c1.142 0 2.064.923 2.064 2.065 0 1.14-.922 2.068-2.064 2.068zm-1.78 13.019h3.56V9h-3.56v11.452z" />
        </svg>
      )
    },
    {
      label: 'Email',
      href: 'mailto:punithgsp.partha@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-2 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  const stats = [
    { label: 'Years of experience', value: '2.3', suffix: '+', caption: 'Building full-stack products' },
    { label: 'Products launched', value: '5', suffix: '', caption: 'From MVPs to scale-ups' },
    { label: 'Age', value: '25', suffix: '', caption: 'Rooted in Bengaluru' },
    { label: 'Coffee cups avoided', value: '∞', suffix: '', caption: 'Automation > caffeine' }
  ]

  return (
    <section id="home" className="relative overflow-hidden bg-surface-light dark:bg-surface-dark">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-10 h-80 w-80 rounded-full bg-brand opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -left-16 h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lifted backdrop-blur-xl dark:bg-surface-card-dark/80 dark:border-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300 mb-6">Software Engineer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-ink dark:text-white min-h-[1.2em]">
              <Typist 
                text="Building calm, resilient products that feel hand-crafted." 
                speed={30}
                delay={500}
                showCursor={true}
                className="inline-block"
              />
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-200 max-w-2xl">
              I translate complex business goals into thoughtful front-end and platform architecture—mixing deep JavaScript expertise with systems thinking.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={handleDownloadCV} className="ghost-button gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download résumé
              </button>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-brand dark:text-slate-200">
                Book a call →
              </a>
            </div>

            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/70 text-ink transition hover:border-brand hover:text-brand dark:bg-surface-card-dark/70 dark:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[32px] bg-gradient-to-br from-brand to-accent opacity-60 blur-2xl" />
            <div className="rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-lifted backdrop-blur-2xl dark:bg-surface-card-dark/90 dark:border-white/10">
              <div className="overflow-hidden rounded-[28px] border border-white/40 dark:border-white/5">
                <img src={profilePicture} alt="Punith Gowda S P" className="w-full object-cover" />
              </div>
              <div className="mt-6 rounded-2xl bg-brand-muted/70 p-5 text-sm text-slate-600 dark:text-slate-200 dark:bg-white/5">
                Currently collaborating with startups to scale bespoke learning platforms, ritual commerce, and AI-assisted developer tools.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/90 p-6 text-center shadow-card backdrop-blur-xl dark:bg-surface-card-dark/80 dark:border-white/10">
              <div className="text-4xl font-semibold text-ink dark:text-white">
                {stat.value}
                <span className="text-brand">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-wide text-slate-500 dark:text-slate-300">{stat.label}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
