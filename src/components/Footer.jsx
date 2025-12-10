import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 text-center">
        <p className="text-sm tracking-[0.4em] uppercase text-white/60">Punith Gowda</p>
        <p className="text-white/70">Built with React & coffee.</p>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
