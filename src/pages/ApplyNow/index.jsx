import Benefits from "./sections/Benefits";
import FormSteps from "./sections/FormSteps";

function ApplyNow() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-5 md:p-10 2xl:py-56 bg-[url('applynow/hero.webp')] bg-center bg-cover bg-no-repeat">
      <Benefits />
      <FormSteps />
    </div>
  )
}

export default ApplyNow
