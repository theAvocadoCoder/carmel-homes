import BeginJourney from "global/BeginJourney";
import WhoCanUseRTO from "./sections/WhoCanUseRTO";
import HowDoesItWork from "./sections/HowDoesItWork";

function WhatIsRentToOwn() {
  return (
    <div>
      <WhoCanUseRTO />
      <div id="how-it-works">
        <HowDoesItWork />
      </div>
      <BeginJourney />
    </div>
  )
}

export default WhatIsRentToOwn
