import Benefits from "./sections/Benefits";
// import FormSteps from "./sections/FormSteps";
import FUGFormSteps from "./sections/FUGFormSteps";

function ApplyNow() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-0 sm:p-5 md:p-10 2xl:py-56 bg-[url('applynow/hero.webp')] bg-center bg-cover bg-no-repeat">
      <Benefits />
      <FUGFormSteps />
    </div>
  )
}

export default ApplyNow
