import { Helmet } from "react-helmet";

import Hero from "./sections/Hero";
import Founder from "./sections/Founder";
import StackedOdds from "./sections/StackedOdds";
import BeginJourney from "global/BeginJourney";

function About() {
  return (
    <div className="[line-height:1]">
      <Helmet>
        <title>Carmel Homes Ltd - About Us</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="h-0 opacity-0">About Us</h1>
      <Hero />
      <Founder />
      <StackedOdds />
      <BeginJourney />
    </div>
  )
}

export default About
