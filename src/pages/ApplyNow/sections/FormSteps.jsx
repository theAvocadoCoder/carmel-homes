import { useState, useEffect } from "react";
import FormSlider from "../components/FormSlider";
import FormButtons from "../components/FormButtons";
import FormSubmitted from "../components/FormSubmitted";
import { formStepDetails as details } from "../formStepDetails";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-simple-phone-input";
import "react-simple-phone-input/dist/style.css";

function FormSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitted, toggleIsFormSubmitted] = useState(false);

  const { handleSubmit, register, control, formState: {errors}, watch, setValue } = useForm({
    defaultValues: {
      "firstName": "",
      "lastName": "",
      "emailAddress": "",
      "phoneNumber": "",
      "status": "",
      "sourceOfIncome": "",
      "debtStatus": {
        bankruptcy: "",
        consumer_proposal: "",
        foreclosure: "",
        none: ""
      },
      "preTaxIncome": "",
      "downpayment": "",
      "creditScore": "",
      "maritalStatus": "",
      "howDidYouHearAboutUs": "",
      "otherHowDidYouHearAboutUs": "",
      "methodOfContact": "",
      "moveInDate": "",
      "preferredProvince": "",
      "preferredCities": "",
    }
  });
  const formValues = watch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, isFormSubmitted]);

  function onSubmit(data, e) {
    console.log("data", data);
    console.log("e", e);
    toggleIsFormSubmitted(state => !state);
  }

  function onError(errors) {
    if (errors["methodOfContact"]) {
      setCurrentStep(state => {if (state) return 4});
    } else {
      setCurrentStep(state => {if (state) return 1})
    }
  }

  function renderInput(input,checkboxIndex) {
    switch (input.type) {      
      case "select":
        return (
          <>
            <div className="bg-[url('assets/chevron-bottom.svg')] bg-no-repeat bg-center bg-contain w-4 h-4 right-[1.2rem] bottom-[1.3rem] absolute z-[2] pointer-events-none" role="img" aria-roledescription="icon" />
            <select
              {...register(input.name, {required: input.required ? input.required() : false})}
              className={`
                bg-white
                rounded-md
                p-2
                appearance-none relative
                ${formValues[input.name] == "" && "text-gray-400"}
                w-full
                md:w-[clamp(18rem,${input.name == "preferredProvince" || input.name == "methodOfContact" ? "99%" : "45%"},40rem)]
              `}
              name={input.name}
              id={input.name}
            >
              <option value="" className="text-gray-400">--Please select an option--</option>
              {
                input.options.map((option, index) => (
                  <option value={option.value} className="text-blue-primary"  key={index}>{option.text}</option>
                ))
              }
            </select>
          </>
        );
      
      case "checkbox":
        return (
          <>
            <input
              {...register(`debtStatus.${input.options[checkboxIndex].value}`)}
              onChange={(e) => {setValue(`debtStatus.${input.options[checkboxIndex].value}`, e.target.checked)}}
              id={input.name}
              name={input.options[checkboxIndex].value}
              type={input.type}
              placeholder={input.placeholder}
              className="border-2 border-brown-gray rounded-md form-checkbox text-brown-primary focus:outline-brown-accent cursor-pointer"
            />
          </>
        );
      
      case "tel":
        return (
          <>
            <Controller 
              name={input.name}
              control={control}
              rules={{  required: input.required ? input.required() : false }}
              render={({field: { onChange, value }}) => (
                <PhoneInput 
                  country="CA"
                  placeholder={input.placeholder}
                  value={value}
                  inputProps={{ id: input.name }}
                  onChange={onChange}
                  showDropdownIcon={false}
                  inputClass="p-2 w-full rounded-r-md focus-visible:[outline:-[-webkit-focus-ring-color_auto_1px]"
                  containerClass="[&>div]:border-none bg-white rounded-md [&>div>div]:bg-transparent [&>div>div]:border-none"
                  buttonClass="[&>span]:text-right"
                />
              )}
            />
          </>
        );
      
      default:
        return (
          <>
            <input 
              {...register(input.name, {
                required: input.required ? input.required() : false,
                valueAsNumber: input.type == "number" || false,
                minLength: {
                  value: input.type == "text" && 2,
                  message: input.type == "text" && "Please enter a name of at least 2 characters",
                },
                pattern: {
                  value: input.type == "email" && (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                  message: input.type == "email" && "Please enter a valid email address",
                }
              })}
              id={input.name} 
              name={input.name} 
              type={input.type} 
              placeholder={input.placeholder} 
              onChange={e=>{if(input.type=="date")setValue("moveInDate", e.target.value)}}
              className={`bg-white rounded-md p-2 w-full ${formValues["moveInDate"] == "" && input.type == "date" ? "text-gray-400" : "text-blue-primary"}`}
            />
          </>
        );
    }
  }

  function renderStep(step) {

    return (
      <div key={step.step} className={`w-full p-2 gap-2 ${step.step == currentStep ? "flex flex-col" : "opacity-0 pointer-events-none absolute"}`}>
        {step.inputs.map((input, index) => {
          let lgLayout = ""; 
          if (input instanceof Array) {return (
            <div key={index} className="flex flex-col md:flex-row w-full md:justify-between">
              {input.map((field, fieldIndex) => {
                lgLayout = (step.step == 3 || (step.step == 2 && !field.noLayoutChange)) ? "md:flex-row md:w-full md:justify-between" : "";
                return (
                  <label className={`relative flex flex-col ${lgLayout} p-2 ${field.required && errors[field.name] ? "mb-10" : ""} relative w-full md:w-[clamp(18rem,45%,40rem)] justify-start`} key={fieldIndex} htmlFor={field.name}>
                    <span className={`${lgLayout != "" && "w-full md:w-[clamp(10rem,50%,18rem)]"}`}>{`${field.label}`}<span className="text-2xl font-bold">{field.required ? "*": ""}</span>: </span>
                    {renderInput(field)}
                    {errors[field.name] && (<span className={`absolute top-[100%] text-red-600 text-sm w-full md:w-[clamp(10rem,90%,18rem)]`} role="alert">*{errors[field.name].message}</span>)}
                  </label>
                );
              })}
            </div>
          )} else {
            lgLayout = (step.step == 3 || (step.step == 2 && !input.noLayoutChange)) ? "md:flex-row md:justify-between md:gap-2" : "";
            return (
              input.type != "checkbox" ? (
                <label className={`flex flex-col ${lgLayout} p-2 relative justify-between w-full ${input.other && formValues["howDidYouHearAboutUs"] == "other" ? "block" : input.other ? "hidden" : ""}`} key={index} htmlFor={input.name}>
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
        })}
      </div>
    )

    
  }
  
  return (
    <div className="relative bg-white p-5 pb-10 lg:p-10 w-full lg:w-[clamp(20rem,60%,50rem)] rounded-xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between">
      <div className={`z-[1] w-full h-full rounded-xl ${isFormSubmitted ? "bg-brown-accent/[.26]" : "bg-brown-accent/20"} absolute left-0 top-0 pointer-events-none`} />
      {
        !isFormSubmitted
          ? (
            <>
              {/* Form Page */}
              <FormSlider currentStep={currentStep} setCurrentStep={setCurrentStep} />

              {/* Step Form */}
              <form className="z-[2]" onSubmit={handleSubmit(onSubmit, onError)}>
                {
                  details.map(renderStep)
                }
                <FormButtons currentStep={currentStep} setCurrentStep={setCurrentStep} />
              </form>

              {/* Required Fields Info Text */}
              <span className="z-[1] absolute bottom-2 pointer-events-none text-xs font-semibold"><span className="text-xl font-bold">*</span> Required fields</span>
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