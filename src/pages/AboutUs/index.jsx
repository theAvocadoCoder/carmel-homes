import Hero from "./sections/Hero";
import Founder from "./sections/Founder";
import StackedOdds from "./sections/StackedOdds";
import BeginJourney from "global/BeginJourney";

function About() {
  return (
    <div className="[line-height:1]">
      <Hero />
      <Founder />
      <StackedOdds />
      <BeginJourney />
    </div>
  )
}

export default About
