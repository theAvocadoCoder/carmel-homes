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
        <meta name="description" content="Our mission is to make home ownership a reality again. Buying a home shouldn’t be hard. Rent-to-own can make home ownership in Canada a reality for you." />
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
