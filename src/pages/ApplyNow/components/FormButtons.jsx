import PropTypes from "prop-types";
import Button from "global/Button";

function FormButtons(props) {
  return (
    <div className="w-full flex flex-col justify-between sm:flex-row gap-3 z-[2]">
      <div className={`w-fit h-fit`} onClick={() => props.setCurrentStep(curr => curr - 1)}>
        <Button className={`bg-brown-primary text-white ${props.currentStep == 1 && "opacity-0"} text-[1.5rem]`} isDisabled={props.currentStep == 1} isNavbarButton={true}>Previous</Button>
      </div>
      {props.currentStep < 4 &&
        <div className="w-fit h-fit" onClick={() => props.setCurrentStep(curr => curr + 1)}>
          <Button className="bg-brown-primary text-white text-[1.5rem]" isNavbarButton={true}>Next</Button>
        </div>
      }
      {props.currentStep == 4 &&
        <div className="w-fit h-fit" onClick={() => props.toggleIsFormSubmitted(state => !state)}>
          <Button className="bg-brown-primary text-white text-[1.5rem]" isNavbarButton={true}>Submit</Button>
        </div>
      }
    </div>
  )
}

FormButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  toggleIsFormSubmitted: PropTypes.func.isRequired
}

export default FormButtons