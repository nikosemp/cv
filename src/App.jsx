import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-container relative overflow-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        
        {/* Global Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle particle1"></div>
          <div className="particle particle2"></div>
          <div className="particle particle3"></div>
          <div className="particle particle4"></div>
          <div className="particle particle5"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
{/*         <Footer /> */}
      </div>
    </div>
  )
}

export default App
