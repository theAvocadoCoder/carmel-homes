import { Link } from "react-router-dom";
import Button from "global/Button";

function HowWeWork() {
  return (
    <div className="flex flex-col gap-28 items-center py-24 bg-gradient-to-br from-[#D3EAFF] via-white to-[#FFEED4]">
      <h2 className="[font-size:2rem] font-bold">How we work</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-24 align-center">
        <div className="flex flex-col items-center text-lg [line-height:1] font-semibold gap-6 w-60">
          <div
            className="w-32 h-32 bg-[url('homepage/how-we-work-1.webp')] bg-contain bg-no-repeat"
            role="img"
          />
          <p className="text-center">We find out what you want</p>
        </div>
        <div className="flex flex-col items-center text-lg [line-height:1] font-semibold gap-6 w-60">
          <div
            className="w-32 h-32 bg-[url('homepage/how-we-work-2.webp')] bg-contain bg-no-repeat"
            role="img"
          />
          <p className="text-center">We find properties for you for you</p>
        </div>
        <div className="flex flex-col items-center text-lg [line-height:1] font-semibold gap-6 w-60">
          <div
            className="w-32 h-32 bg-[url('homepage/how-we-work-3.webp')] bg-contain bg-no-repeat"
            role="img"
          />
          <p className="text-center">Select a property that fits your criteria</p>
        </div>
      </div>
      <Link to="/about-us">
        <Button theme="primary" className="text-[1.25rem] font-semibold">
          About us
        </Button>
      </Link>
    </div>
  )
}

export default HowWeWork