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
        <meta name="description" content="" />
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
