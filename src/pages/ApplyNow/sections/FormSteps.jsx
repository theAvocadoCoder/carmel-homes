import { useState } from "react";
import FormSlider from "../components/FormSlider";
import FormButtons from "../components/FormButtons";
import FormSubmitted from "../components/FormSubmitted";
import { formStepDetails as details } from "../formStepDetails";

function FormSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    "first-name": "",
    "last-name": "",
    "email-address": "",
    "phone-number": "",
    "status": "",
    "source-of-income": "",
    "debt-status": [],
    "pre-tax-income": "",
    "downpayment": "",
    "credit-score": "",
    "marital-status": "",
    "how-did-you-hear-about-us": "",
    "method-of-contact": "",
    "move-in-date": "",
    "preferred-province": "",
    "preferred-cities": "",
  })

  function renderInput(input,checkboxIndex) {
    switch (input.type) {      
      case "select":
        return (
          <>
            <div className="bg-[url('assets/chevron-bottom.svg')] bg-no-repeat bg-center bg-contain w-4 h-4 right-[1.2rem] bottom-[1.3rem] absolute z-[2]" role="img" aria-roledescription="icon" />
            <select
              required
              className={`
                bg-white
                rounded-md
                p-2
                appearance-none relative
                ${formValues[input.name] == "" && "text-gray-400"}
                w-full
                md:w-[clamp(18rem,${input.name == "preferred-province" || input.name == "method-of-contact" ? "99%" : "45%"},40rem)]
              `}
              name={input.name}
              id={input.name}
              value={formValues[input.name]} 
              onChange={
                (e) => (setFormValues(current => (
                  {
                    ...current,
                    [input.name]: e.target.value
                  }
                )))
              }
            >
              <option value="" className="text-gray-400">--Please pick an option--</option>
              {
                input.options.map((option, index) => (
                  <option value={option.value} key={index}>{option.text}</option>
                ))
              }
            </select>
          </>
        );
      
      case "checkbox":
        return (
          <>
            <input
              required
              id={input.options[checkboxIndex].value}
              name={input.options[checkboxIndex].value}
              type={input.type}
              placeholder={input.placeholder}
              className="border-2 border-brown-gray rounded-md form-checkbox text-brown-primary focus:outline-brown-accent"
              value={formValues[input.name][checkboxIndex]}
              onChange={
                (e) => (setFormValues(current => {
                  let valuesArray = [...current[input.name]];
                  if (valuesArray.includes(e.target.value)) {
                    let valueIndex = valuesArray.indexOf(e.target.value);
                    valuesArray.splice(valueIndex, 1);
                  } else {
                    valuesArray.push(e.target.value)
                  }
                  return {
                    ...current,
                    [input.name]: valuesArray
                  }
              }))
              }
            />
          </>
        );
      
      case "tel":
        return (
          <>
            <input 
              required
              id={input.name} 
              name={input.name} 
              type={input.type} 
              placeholder={input.placeholder} 
              className="bg-white rounded-md p-2 w-full" 
              value={formValues[input.name]} 
              onChange={
                (e) => (setFormValues(current => (
                  {
                    ...current,
                    [input.name]: e.target.value
                  }
                )))
              }
            />
          </>
        );
      
      default:
        return (
          <>
            <input 
              required
              id={input.name} 
              name={input.name} 
              type={input.type} 
              placeholder={input.placeholder} 
              className={`bg-white rounded-md p-2 w-full`} 
              value={formValues[input.name]} 
              min={new Date().toString()}
              onChange={
                (e) => (setFormValues(current => (
                  {
                    ...current,
                    [input.name]: e.target.value
                  }
                )))
              }
            />
          </>
        );
    }
  }

  //eslint-disable-next-line no-unused-vars
  function renderStep(step) {

    return (
      <div key={step.step} className={`${step.step == currentStep ? "flex flex-col" : "hidden"} w-full p-2 gap-2`}>
        {
          step.inputs.map((input, index) => {
            let lgLayout = ""; 
            if (input instanceof Array) {
              return (
                <div key={index} className="flex flex-col md:flex-row w-full md:justify-between">
                  {
                    input.map((field, fieldIndex) => {
                      lgLayout = (step.step == 3 || (step.step == 2 && !field.noLayoutChange)) ? "md:flex-row md:w-full md:justify-between" : "";
                      return (
                        <label className={`flex flex-col ${lgLayout} p-2 relative w-full md:w-[clamp(18rem,45%,40rem)] justify-between`} key={fieldIndex} htmlFor={input.name}>
                          <span className={`${lgLayout != "" && "w-full md:w-[clamp(10rem,50%,18rem)]"}`}>{field.label}: </span>
                          {renderInput(field)}
                        </label>
                      );
                    })
                  }
                </div>
              )
            } else {
              lgLayout = (step.step == 3 || (step.step == 2 && !input.noLayoutChange)) ? "md:flex-row md:justify-between md:gap-2" : "";
              return (
                input.type != "checkbox" ? (
                  <label className={`flex flex-col ${lgLayout} p-2 relative justify-between w-full ${input.other && formValues["how-did-you-hear-about-us"] == "other" ? "block" : input.other ? "hidden" : ""}`} key={index} htmlFor={input.name}>
                    <span className={`${lgLayout != "" && "w-full md:w-[clamp(10rem,50%,18rem)]"}`}>{input.label}: </span>
                    {renderInput(input)}
                  </label>
                ) :
                  (
                    <div className={`flex flex-col sm:flex-row p-2 md:justify-between md:gap-2`} key={index} htmlFor={input.name}>
                      <legend className={`${lgLayout != "" && "flex w-full md:w-[clamp(10rem,40%,18rem)]"}`}>{input.label}: </legend>
                      <div className="flex flex-col self-end md:self-auto w-[clamp(10rem,70%,18rem)] p-1">
                        {
                          input.options.map((option, index) => (
                            <div key={index} className="flex gap-2 items-center">
                              {renderInput(input, index)}
                              <label htmlFor={option.value}>{ option.label }</label>
                            </div>
                          ))
                        }
                      </div>
                  </div>
                  )
              )
            }
          })
        }
      </div>
    )

    
  }
  
  return (
    <div className="relative bg-white p-5 lg:p-10 w-full lg:w-[clamp(20rem,60%,50rem)] rounded-xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between">
      <div className={`z-[1] w-full h-full rounded-xl ${isFormSubmitted ? "bg-brown-accent/[.26]" : "bg-brown-accent/20"} absolute left-0 top-0 pointer-events-none`} />
      {
        !isFormSubmitted
          ? (
            <>
              {/* Form Page */}
              <FormSlider currentStep={currentStep} setCurrentStep={setCurrentStep} />

              {/* Step Form */}
              <form className="z-[2]">
                {
                  details.map(renderStep)
                }
              </form>

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