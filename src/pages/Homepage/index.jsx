//eslint-disable-next-line no-unused-vars
import React from "react";

import { Helmet } from "react-helmet";

import Hero from "./sections/Hero";
import HowWeWork from "./sections/HowWeWork";
import WhatIsRTO from "./sections/WhatIsRTO";
import WhatYouGet from "./sections/WhatYouGet";
import Investment from "./sections/Investment";
import BeginJourney from "global/BeginJourney";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Carmel Homes Ltd</title>
        <meta name="description" content="Home ownership in a few clicks. Get in touch tell us your story, so that we can get an overview of your challenges and support you." />
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
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
