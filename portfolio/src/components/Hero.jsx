import React from 'react'
import resumePdf from '../assets/Punith_Gowda_S_P.pdf'
import profilePicture from '../assets/profile_picture.jpeg'

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Punith_Gowda_S_P_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-bg dark:to-dark-bg min-h-screen flex items-start  md:pt-20 pb-8 md:pb-20 transition-colors overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Mobile: Image first, Desktop: Image second */}
          <div className="order-1 md:order-2">
                        {/* Image */}
                        <div className="flex justify-center md:justify-end">
                          <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden">
                            <img 
                              src={profilePicture} 
                              alt="Punith Gowda S P" 
                              className="w-full h-full object-cover scale-110"
                            />
                          </div>
                        </div>
          </div>

          {/* Mobile: Details second, Desktop: Details first */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="text-lg md:text-xl text-gray-900 dark:text-white mb-4">Software Engineer</div>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hello I'm<br />
              <span className="text-[#00FF99]">Punith Gowda S P</span>
          </h1>
            
            <p className="text-base md:text-xl text-gray-900 dark:text-white mb-6 md:mb-10 leading-relaxed">
              Full Stack Web Developer passionate about creating innovative solutions and beautiful user experiences with modern technologies
            </p>

            {/* Button and Social Links Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              {/* Download CV Button */}
              <button onClick={handleDownloadCV} className="flex items-center gap-2 border-2 border-[#00FF99] text-[#00FF99] px-6 py-3 rounded-full font-semibold hover:bg-[#00FF99] hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-[#00FF99] text-[#00FF99] rounded-full hover:bg-[#00FF99] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-[#00FF99] text-[#00FF99] rounded-full hover:bg-[#00FF99] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-[#00FF99] text-[#00FF99] rounded-full hover:bg-[#00FF99] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 border-2 border-[#00FF99] text-[#00FF99] rounded-full hover:bg-[#00FF99] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Row - Second Row */}
        <div className="mt-8 md:mt-24">
          <div className="grid grid-cols-1 md:flex md:justify-between md:items-center gap-6 md:gap-0">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                21 <span className="text-base md:text-xl font-normal">Age</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                2.3 <span className="text-base md:text-xl font-normal">Years of Experience</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                5 <span className="text-base md:text-xl font-normal">Projects Worked On</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                5 <span className="text-base md:text-xl font-normal">Projects Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
