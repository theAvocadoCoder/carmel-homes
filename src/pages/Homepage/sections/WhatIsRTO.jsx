import { HashLink } from "react-router-hash-link";
import Button from "global/Button";

function WhatIsRTO() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 2xl:gap-44 px-8 lg:px-24 py-12 lg:py-32 [background-image:linear-gradient(to_bottom,black,transparent),url('homepage/what-is-rto.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col text-white text-[1rem] gap-8 lg:max-w-[40%]">
        <h2 className="text-[2rem] font-bold">What is Rent to Own?</h2>
        <p>
          {"Owning a house is perhaps the main financial choice you'll make in your life. This process allows to choose a home that fits you with a realtor, then rent the home for an agreed amount of time, with the option to buy at the end."}
        </p>
        <p>
          Attain your goal of home ownership. We work with you to repair what has been holding you back from qualifying for a traditional mortgage. This is done while you are living in your future home.
        </p>
        <HashLink to="/what-is-rent-to-own#how-it-works" scroll={el => scrollWithOffset(el)}>
          <Button theme="secondary" className="px-4 py-3 text-[1.25rem] font-semibold">
            Learn How It Works
          </Button>
        </HashLink>
      </div>
      <div className="w-full h-44 lg:w-[50rem] lg:h-[18rem] flex items-center justify-center bg-zinc-400 text-white">
        Video Placeholder
      </div>
    </section>
  )
}

export default WhatIsRTO