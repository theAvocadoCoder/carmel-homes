import { Helmet } from "react-helmet";

import Benefits from "./sections/Benefits";
// import FormSteps from "./sections/FormSteps";
import FUGFormSteps from "./sections/FUGFormSteps";

function ApplyNow() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-0 sm:p-5 md:p-10 2xl:py-56 bg-[url('applynow/hero.webp')] bg-center bg-cover bg-no-repeat">
      <Helmet>
        <title>Carmel Homes Ltd - Apply Now</title>
        <meta name="description" content="Apply Now · Response in 24 hours · No commitment · No effect on your credit card rating." />
      </Helmet>
      <h1 className="h-0 opacity-0">Apply Now</h1>
      <Benefits />
      <FUGFormSteps />
    </div>
  )
}

export default ApplyNow
