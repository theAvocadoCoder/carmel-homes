//eslint-disable-next-line no-unused-vars
import React from "react";

import Hero from "./sections/Hero";
import HowWeWork from "./sections/HowWeWork";
import WhatIsRTO from "./sections/WhatIsRTO";

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
      <div className="bg-slate-950 h-[450px] flex justify-center items-center text-white">
        Home Dummy Section 4
      </div>
      <div className="bg-white h-[450px] flex justify-center items-center">
        Home Dummy Section 5
      </div>
    </div>
  )
}

export default Homepage
