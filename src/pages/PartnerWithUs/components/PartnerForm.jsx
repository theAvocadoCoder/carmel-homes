import { useForm } from "react-hook-form"

function PartnerForm() {
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      occupation: "",
      otherOccupation: "",
      message: "",
    }
  });
  const formValues = watch();

  //eslint-disable-next-line no-unused-vars
  function onSubmit(data) {
    console.log("onSubmit was triggered");
    console.log("data:", data);
  }

  //eslint-disable-next-line no-unused-vars
  function onError(errors) {
    console.log("onError was triggered");
    console.log("errors:", errors)
  }

  return (
    <div className="relative bg-white p-5 pb-12 lg:p-10 w-full md:w-[clamp(30rem,99%,50rem)] rounded-2xl shadow-lg lg:shadow-xl shadow-brown-gray/50 flex flex-col justify-between h-fit">
      <div className="z-[1] w-full h-full rounded-xl bg-brown-accent/20 absolute left-0 top-0 pointer-events-none" />
      <form className="z-[2] py-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col xl:flex-row">
          <label htmlFor="name" className="flex flex-col p-2 mb-5 justify-start w-full">
            <span className="font-semibold">Name*:</span>
            <input {...register("name", {required:true,minLength: {
                  value:2,
                  message:"Please enter a name of at least 2 characters",
                },})} type="text" id="name" className={`bg-white rounded-md p-2 w-full`} />
          </label>
          <label htmlFor="email" className="flex flex-col p-2 mb-5 justify-start w-full">
            <span className="font-semibold">Email*:</span>
            <input {...register("email", {required:true,pattern: {
                  value:(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                  message:"Please enter a valid email address",
                }})} type="email" id="email" className={`bg-white rounded-md p-2 w-full`} />
          </label>
        </div>
        <label htmlFor="occupation" className="flex flex-col p-2 mb-5 justify-start relative">
          <span className="font-semibold">Tell us what you do*:</span><div className="bg-[url('assets/chevron-bottom.svg')] bg-no-repeat bg-center bg-contain w-4 h-4 right-[1.2rem] bottom-[1.125rem] absolute z-[2] pointer-events-none" role="img" aria-roledescription="icon" />
          <select {...register("occupation", {required:true})} name="occupation" id="occupation" className={`bg-white
                rounded-md
                p-2
                appearance-none relative
                ${formValues["occupation"] == "" && "text-gray-400"}
                w-full`}>
            <option value="" className="text-gray-400">--Select an occupation--</option>
            <option value="Real Estate Agent">Real Estate Agent</option>
            <option value="Mortgage Broker">Mortgage Broker</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label htmlFor="otherOccupation" className={`${formValues["occupation"] == "other" ? "flex" : "hidden"} flex-col p-2 mb-5 justify-start`}>
          <span className="font-semibold">Other:</span>
          <input {...register("otherOccupation")} type="text" id="otherOccupation" className={`bg-white rounded-md p-2 w-full`} />
        </label>
        <label htmlFor="message" className="flex flex-col p-2 mb-5 justify-start">
          <span className="font-semibold">Leave a message:</span>
          <textarea {...register("message")} name="message" id="message" rows="5" className="w-full bg-white rounded-lg p-4"></textarea>
        </label>
        <input className="bg-brown-primary text-white text-[1.5rem] py-[0.5rem] [font-variant:small-caps] px-6 text-sm lg:text-lg font-bold rounded-[10px] cursor-pointer" type="submit" value="Submit" />
      </form>
      <span className="z-[2] absolute bottom-3 pointer-events-none text-xs font-semibold">*Required fields</span>
    </div>
  )
}

export default PartnerForm