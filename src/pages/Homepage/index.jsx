//eslint-disable-next-line no-unused-vars
import React from "react";

import Hero from "./sections/Hero";
import HowWeWork from "./sections/HowWeWork";
import WhatIsRTO from "./sections/WhatIsRTO";
import WhatYouGet from "./sections/WhatYouGet";
import Investment from "./sections/Investment";

function Homepage() {
  return (
    <div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <HowWeWork />
      </div>
      <div className="">
        <WhatIsRTO />
      </div>
      <div className="">
        <WhatYouGet />
      </div>
      <div className="">
        <Investment />
      </div>
      <div className="bg-blue-950 h-[450px] flex justify-center items-center text-white">
        Home Dummy Section 6
      </div>
    </div>
  )
}

export default Homepage
