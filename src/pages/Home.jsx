import Hero from '../components/Hero'
import Wave from '../components/Wave'
import Intro from '../components/Intro'
import Method from '../components/Method'
import Work from '../components/Work'
import Ribbon from '../components/Ribbon'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Recognition from '../components/Recognition'
import About from '../components/About'
// import Places from '../components/Places'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="sheet">
        <Wave fill="var(--color-cream)" className="absolute inset-x-0 bottom-full" />
        <Intro />
        <Wave fill="var(--color-night)" />
        <Method />
        <div className="bg-night">
          <Wave fill="var(--color-cream)" />
        </div>
        <Wave fill="#1e201b" />
        <Work />
        <div className="bg-night">
          <Wave fill="var(--color-cream)" />
        </div>
        <Ribbon />
        <Skills />
        <Wave fill="var(--color-night)" />
        <Experience />
        <div className="bg-night">
          <Wave fill="var(--color-cream)" />
        </div>
        <Recognition />
        <About />
        <Wave fill="var(--color-night)" />
        {/* <Places /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
