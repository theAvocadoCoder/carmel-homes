import PropTypes from "prop-types";

function FormSlider(props) {
  return (
    <ul className="flex gap-6 justify-between relative">
      {[...Array(3)].map((_, index) => (
        <div key={index} className={`absolute w-[calc(35%-2rem)] ${index == 0 ? "left-3" : index == 1 ? "left-[35%]" : "left-[65%]"} top-[50%] border-t-[0.3125rem] ${props.currentStep > index + 1 ? "border-brown-accent" : "border-brown-gray"} border-dashed z-[2]`} />
      ))}
      {[...Array(4)].map((_, index) => (
        <li key={index} className={`font-semibold md:font-bold md:text-[1.5rem] [line-height:1] px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 rounded-[100%] ${props.currentStep >= index + 1 ? "bg-brown-accent" : "bg-brown-gray"} text-white z-[2] cursor-pointer`} onClick={() => { props.setCurrentStep(index + 1) }}>{index + 1}</li>
      ))}
    </ul>
  )
}

FormSlider.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired
}

export default FormSlider