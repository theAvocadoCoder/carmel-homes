import { useState } from "react";
import Button from "global/Button";

function ApplyNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);
  const benefits = [
    {
      icon: "bg-[url('applynow/apply-1.svg')]",
      title: "Response in 24 hours",
      details: "We aim to get back to you and start the process as soon as poosible",
    },
    {
      icon: "bg-[url('applynow/apply-2.svg')]",
      title: "No commitment",
      details: "You’re not committing to anything by completing this application",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "No effect on your credit card rating",
      details: "Won’t affect your ability to apply for loans or credit elsewhere - even if we’re unable to give you a property",
    },
  ]
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-5 md:p-10 2xl:py-56 bg-[url('applynow/hero.webp')] bg-center bg-cover bg-no-repeat">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-[clamp(25rem,30%,35rem)] gap-6 py-5">
        <h2 className="text-[2rem] font-bold">Apply Now</h2>
        <div className="hidden lg:flex flex-col gap-5">
          {
            benefits.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <div className={`${item.icon} bg-center bg-cover bg-no-repeat w-12 h-12`} />
                <div className="w-[clamp(16rem,70%,27rem)]">
                  <p className="font-bold">{item.title}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Right Column */}
      <div className="relative bg-white p-5 lg:p-10 w-full lg:w-[clamp(20rem,60%,50rem)] rounded-xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between">
        <div className={`z-[1] w-full h-full rounded-xl ${isFormSubmitted ? "bg-brown-accent/25" : "bg-brown-accent/20"} absolute left-0 top-0`} />
        {/* Form Page */}
        {!isFormSubmitted && <>
          {/* Slider */}
          <ul className="flex gap-6 justify-between relative">
            {[...Array(3)].map((_, index) => (
              <div key={index} className={`absolute w-[calc(35%-2rem)] ${index == 0 ? "left-3" : index == 1 ? "left-[35%]" : "left-[65%]"} top-[50%] border-t-[0.3125rem] ${currentStep > index + 1 ? "border-brown-accent" : "border-brown-gray"} border-dashed z-[2]`} />
            ))}
            {[...Array(4)].map((_, index) => (
              <li key={index} className={`font-semibold md:font-bold md:text-[1.5rem] [line-height:1] px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 rounded-[100%] ${currentStep >= index + 1 ? "bg-brown-accent" : "bg-brown-gray"} text-white z-[2]`} onClick={() => { setCurrentStep(index + 1) }}>{index + 1}</li>
            ))}
          </ul>
          {/* Step Form */}

          {/* Buttons */}
          <div className="w-full flex flex-col justify-between sm:flex-row gap-3 z-[2]">
            <div className={`w-fit h-fit`} onClick={() => setCurrentStep(curr => curr - 1)}>
              <Button className={`bg-brown-primary text-white ${currentStep == 1 && "opacity-0"} text-[1.5rem]`} isDisabled={currentStep == 1} isNavbarButton={true}>Previous</Button>
            </div>
            {currentStep < 4 &&
              <div className="w-fit h-fit" onClick={() => setCurrentStep(curr => curr + 1)}>
                <Button className="bg-brown-primary text-white text-[1.5rem]" isNavbarButton={true}>Next</Button>
              </div>
            }
            {currentStep == 4 &&
              <div className="w-fit h-fit" onClick={() => toggleIsFormSubmitted(state => !state)}>
                <Button className="bg-brown-primary text-white text-[1.5rem]" isNavbarButton={true}>Submit</Button>
              </div>
            }
          </div>
        </>}
        {/* Submitted Page */}
        {isFormSubmitted && <>
          <p className="z-[2] font-bold mb-5">
            <span className="text-[1.5rem]">Application Submitted!</span>
            <br />
            We look forward to getting you home owner ready
          </p>
          <div className="bg-[url('applynow/complete.webp')] bg-center bg-contain bg-no-repeat w-full h-72 z-[2]" />
        </>}
      </div>
    </div>
  )
}

export default ApplyNow
