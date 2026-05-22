import Navbar     from './components/ui/Navbar'
import Footer     from './components/ui/Footer'
import Hero       from './components/sections/Hero'
import About      from './components/sections/About'
import Skills     from './components/sections/Skills'
import Internship from './components/sections/Internship'
import Projects   from './components/sections/Projects'
import Education  from './components/sections/Education'
import Contact    from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
