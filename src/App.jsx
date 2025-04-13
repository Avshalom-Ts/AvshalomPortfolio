import FeatureCards from "./sections/FeatureCards"
import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero />
    <ShowcaseSection />
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default App