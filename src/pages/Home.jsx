import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home