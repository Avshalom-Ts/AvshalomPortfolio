import FeatureCards from "./sections/FeatureCards"
import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero />
    <ShowcaseSection />
    <FeatureCards/>
    <ExperienceSection/>
    {/* <Testimonials/> */}
    <TechStack/>
    <LogoSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App