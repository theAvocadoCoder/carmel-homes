import { Link } from "react-router-dom";
import Button from "global/Button";
import beginJourney1Img from "assets/begin-journey-1.webp";
import beginJourney2Img from "assets/begin-journey-2.webp";

function BeginJourney() {
  return (
    <section className="flex flex-col px-8 py-20 items-center justify-center">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-center md:bg-brown-accent/40 gap-20 lg:gap-0 rounded-[3rem] md:py-16 md:px-8 lg:py-20 lg:px-12 max-w-[80rem]">
        <div className="flex flex-col gap-16 lg:shrink max-w-[60%]">
          <p className="text-[2.5rem] [line-height:1] lg:text-5xl font-extrabold max-w-[28rem]">Begin Your <span className="text-brown-primary">Homeowner</span> Journey With Us</p>
          <Link to="/apply-now" className="w-fit">
            <Button theme="primary" className="px-4 py-3 text-[1.5rem] font-bold">
              Apply Now
            </Button>
          </Link>
        </div>
        <div className="w-full lg:w-[50%] max-w-[35rem] h-[50%] lg:h-full flex flex-col items-center justify-center lg:grow-[2]">
          <img src={beginJourney1Img} className="w-[clamp(18.5rem,70%,50rem)]" />
          <img src={beginJourney2Img} className="w-[clamp(13.7rem,50%,26.5rem)] -mt-12 lg:-mt-16" />
        </div>
      </div>
    </section>
  )
}

export default BeginJourney