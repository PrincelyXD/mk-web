import HeroSection from "./HeroSection"
import Projects from "./Projects"
import ResultsSection from "./ResultsSection"
import ServicesSection from "./ServicesSection"
import TestimonialSection from "./TestimonialSection"

const Home = () => {
  return (
    <div className="flex flex-col bg-mk-background font-kanit items-center justify-center">
      <HeroSection/>
      <ServicesSection/>
      <ResultsSection/>
      <Projects/>
      <TestimonialSection/>
    </div>
  )
}

export default Home
