import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  const navItems = [
    { path: '#home', label: 'Home', id: 'home' },
    { path: '#about', label: 'About', id: 'about' },
    { path: '#experience', label: 'Experience', id: 'experience' },
    { path: '#contact', label: 'Contact', id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-2xl dark:bg-dark-bg/70 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-semibold tracking-tight text-ink dark:text-white">
            Punith <span className="text-brand">Gowda</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-brand'
                    : 'text-slate-500 dark:text-slate-300 hover:text-ink dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-ink shadow-sm transition hover:border-brand hover:text-brand dark:bg-surface-card-dark/60 dark:text-white"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-brand text-white text-sm font-semibold tracking-wide px-5 py-2.5 shadow-card transition hover:bg-brand-deep"
            >
              Let’s talk
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full border border-white/60 text-slate-600 hover:border-brand hover:text-brand dark:text-white"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-white/60 bg-white/90 shadow-card dark:bg-surface-card-dark/80 dark:border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`block px-5 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-brand'
                      : 'text-slate-600 dark:text-slate-200 hover:text-brand'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
