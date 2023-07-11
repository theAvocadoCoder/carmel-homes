import { useState } from "react";
import FormSlider from "../components/FormSlider";
import FormButtons from "../components/FormButtons";
import FormSubmitted from "../components/FormSubmitted";

function FormSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);
  
  return (
    <div className="relative bg-white p-5 lg:p-10 w-full lg:w-[clamp(20rem,60%,50rem)] rounded-xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between">
      <div className={`z-[1] w-full h-full rounded-xl ${isFormSubmitted ? "bg-brown-accent/[.26]" : "bg-brown-accent/20"} absolute left-0 top-0`} />
      {
        !isFormSubmitted
          ? (
            <>
            {/* Form Page */}
            <FormSlider currentStep={currentStep} setCurrentStep={setCurrentStep} />

            {/* Step Form */}

            <FormButtons currentStep={currentStep} setCurrentStep={setCurrentStep} toggleIsFormSubmitted={toggleIsFormSubmitted} />
            </>
          )
          : (
            <FormSubmitted />
          )
      }
    </div>
  )
}

export default FormSteps