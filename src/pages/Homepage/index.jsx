//eslint-disable-next-line no-unused-vars
import React from "react";

import Hero from "./sections/Hero";
import HowWeWork from "./sections/HowWeWork";
import WhatIsRTO from "./sections/WhatIsRTO";
import WhatYouGet from "./sections/WhatYouGet";
import Investment from "./sections/Investment";
import BeginJourney from "global/BeginJourney";

function Homepage() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <WhatIsRTO />
      <WhatYouGet />
      <Investment />
      <BeginJourney />
    </>
  )
}

export default Homepage
