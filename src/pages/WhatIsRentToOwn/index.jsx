import BeginJourney from "global/BeginJourney";
import WhoCanUseRTO from "./sections/WhoCanUseRTO";
import HowDoesItWork from "./sections/HowDoesItWork";
import FindOutMore from "./sections/FindOutMore";

function WhatIsRentToOwn() {
  return (
    <div>
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
