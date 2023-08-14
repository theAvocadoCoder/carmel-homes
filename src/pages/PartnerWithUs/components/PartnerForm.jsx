import { useRef } from "react";
import { useForm } from "react-hook-form";

function PartnerForm() {
  const formRef = useRef();
  const { handleSubmit, register, formState: {errors}, watch, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      occupation: "",
      otherOccupation: "",
      message: "",
    }
  });
  const formValues = watch();

  function onSubmit(data) {
    console.log("data:", data);
    reset();
  }

  function onError(errors) {
    console.log("errors:", errors)
  }

  return (
    <div className="relative bg-white p-5 pb-12 lg:p-10 w-full md:w-[clamp(30rem,99%,50rem)] rounded-2xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between h-fit">
      <div className="z-[1] w-full h-full rounded-xl bg-brown-accent/20 absolute left-0 top-0 pointer-events-none" />
      <form ref={formRef} className="z-[2] py-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col xl:flex-row">
          <label htmlFor="name" className={`flex flex-col p-2 justify-start w-full relative ${errors["name"] ? "mb-10" : ""}`}>
            <span className="font-semibold">Name<span className="text-2xl font-bold">*</span>:</span>
            <input {...register("name", {required:"Please input your name",minLength: {
                  value:2,
                  message:"Please enter a name of at least 2 characters",
                },})} name="name" type="text" placeholder="First and Last Name" id="name" className={`bg-white rounded-md p-2 w-full`} />
            {errors["name"] && (<span className={`absolute top-[100%] text-red-600 text-sm w-full md:w-[clamp(10rem,90%,18rem)]`} role="alert">*{errors["name"].message}</span>)}
          </label>
          <label htmlFor="email" className={`flex flex-col p-2 justify-start w-full relative ${errors["email"] ? "mb-10" : ""}`}>
            <span className="font-semibold">Email<span className="text-2xl font-bold">*</span>:</span>
            <input {...register("email", {required:"Please input your email address",pattern: {
                  value:(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                  message:"Please enter a valid email address",
                }})} name="email" type="email" placeholder="youremail@address.com" id="email" className={`bg-white rounded-md p-2 w-full`} />
            {errors["email"] && (<span className={`absolute top-[100%] text-red-600 text-sm w-full md:w-[clamp(10rem,90%,18rem)]`} role="alert">*{errors["email"].message}</span>)}
          </label>
        </div>
        <label htmlFor="occupation" className={`flex flex-col p-2 justify-start relative ${errors["occupation"] ? "mb-10" : ""}`}>
          <span className="font-semibold">Tell us what you do<span className="text-2xl font-bold">*</span>:</span><div className="bg-[url('assets/chevron-bottom.svg')] bg-no-repeat bg-center bg-contain w-4 h-4 right-[1.2rem] bottom-[1.125rem] absolute z-[2] pointer-events-none" role="img" aria-roledescription="icon" />
          <select {...register("occupation", {required:"Please select an occupation"})} name="occupation" id="occupation" className={`bg-white
                rounded-md
                p-2
                appearance-none relative
                ${formValues["occupation"] == "" ? "text-gray-400" : "text-blue-primary"}
                w-full`}>
            <option value="" className="text-gray-400">--Select an occupation--</option>
            <option value="Investor" className="text-blue-primary">Investor</option>
            <option value="Real Estate Agent" className="text-blue-primary">Real Estate Agent</option>
            <option value="Mortgage Broker" className="text-blue-primary">Mortgage Broker</option>
            <option value="Accountant" className="text-blue-primary">Accountant</option>
            <option value="Conveyancer" className="text-blue-primary">Conveyancer</option>
            <option value="other" className="text-blue-primary">Other</option>
          </select>
          {errors["occupation"] && (<span className={`absolute top-[100%] text-red-600 text-sm w-full md:w-[clamp(10rem,90%,18rem)]`} role="alert">*{errors["occupation"].message}</span>)}
        </label>
        <label htmlFor="otherOccupation" className={`${formValues["occupation"] == "other" ? "flex" : "hidden"} ${formValues["occupation"] == "other" && !formValues["otherOccupation"] ? "mb-10" : ""} flex-col p-2 mb-5 justify-start relative`}>
          <span className="font-semibold">Other<span className="text-2xl font-bold">*</span>:</span>
          <input {...register("otherOccupation", {required: formValues["occupation"] == "other" ? "*Please provide an occupation" : false})} type="text" placeholder="Your Occupation" id="otherOccupation" className={`bg-white rounded-md p-2 w-full`} />
          {formValues["occupation"] == "other" && !formValues["otherOccupation"] && (<span className={`absolute top-[100%] text-red-600 text-sm w-full md:w-[clamp(10rem,90%,18rem)]`} role="alert">{errors["otherOccupation"]?.message}</span>)}
        </label>
        <label htmlFor="message" className={`flex flex-col p-2 justify-start ${errors["message"] ? "mb-10" : "mb-5"}`}>
          <span className="font-semibold">Leave a message:</span>
          <textarea {...register("message")} name="message" placeholder="...start typing to leave a message" id="message" rows="5" className="w-full bg-white rounded-lg p-4 placeholder:italic placeholder:text-sm"></textarea>
        </label>
        <input className="bg-brown-primary text-white text-[1.5rem] py-[0.5rem] [font-variant:small-caps] px-6 text-sm lg:text-lg font-bold rounded-[10px] cursor-pointer" type="submit" value="Submit" />
      </form>
      <span className="z-[2] absolute bottom-3 pointer-events-none text-xs font-semibold"><span className="text-xl font-bold">*</span> Required fields</span>
    </div>
  )
}

export default PartnerForm