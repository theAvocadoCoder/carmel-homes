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
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
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
