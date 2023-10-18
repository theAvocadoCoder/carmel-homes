import { Helmet } from "react-helmet";

import BeginJourney from "global/BeginJourney";
import WhoCanUseRTO from "./sections/WhoCanUseRTO";
import HowDoesItWork from "./sections/HowDoesItWork";
import FindOutMore from "./sections/FindOutMore";

function WhatIsRentToOwn() {
  return (
    <div>
      <Helmet>
        <title>Carmel Homes Ltd - What is Rent to Own?</title>
        <meta name="description" content="Rent-to-own is a home ownership program designed to make your dream of home ownership a reality. To get more details on how it works, visit this page." />
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
      <h1 className="h-0 opacity-0">What is Rent to Own?</h1>
      <WhoCanUseRTO />
      <div id="how-it-works">
        <HowDoesItWork />
      </div>
      <FindOutMore />
      <BeginJourney />
    </div>
  )
}

export default WhatIsRentToOwn
