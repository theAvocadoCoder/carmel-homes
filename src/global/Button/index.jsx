import PropTypes from "prop-types";

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  isNavbarButton: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

function Button(props) {

  const buttonStates = {
    primary: "bg-blue-primary text-white",
    secondary: "bg-white text-blue-primary shadow-md",
    hover: "hover:bg-brown-primary hover:text-white",
    disabled: "disabled:bg-blue-gray disabled:text-brown-gray disabled:cursor-not-allowed",
  }

  return (
    <button className={`${buttonStates[props.theme]} ${buttonStates.hover} ${buttonStates.disabled} py-4 px-6 text-xs lg:text-sm font-bold rounded-[10px] ${props.isNavbarButton && "py-3 [font-variant:small-caps]"} ${props.className}`} disabled={props.isDisabled}>
      {props.children}
    </button>
  )
  
}

export default Button;