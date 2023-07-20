import PropTypes from "prop-types";
import Button from "global/Button";

function FormButtons(props) {
  return (
    <div className="w-full flex flex-col justify-between sm:flex-row gap-3 z-[3]">
      <div onClick={() => props.setCurrentStep(curr => curr - 1)}>
        <Button className={`bg-brown-primary text-white ${props.currentStep === 1 && "opacity-0"} text-[1.5rem]`} isDisabled={props.currentStep == 1} isNavbarButton={true} attributes={{ type: "button" }}>Previous</Button>
      </div>
      {props.currentStep < 4 &&
        <div onClick={() => props.setCurrentStep(curr => curr + 1)}>
          <Button className="bg-brown-primary text-white text-[1.5rem]" isNavbarButton={true} attributes={{ type: "button" }}>Next</Button>
        </div>
      }
      {props.currentStep == 4 &&
        <input className="bg-brown-primary text-white text-[1.5rem] py-[0.5rem] [font-variant:small-caps] px-6 text-sm lg:text-lg font-bold rounded-[10px] cursor-pointer" type="submit" value="Submit" />
      }
    </div>
  )
}

FormButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
}

export default FormButtons