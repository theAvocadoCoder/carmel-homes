import PropTypes from "prop-types";

Button.propTypes = {
  theme: PropTypes.string,
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
    disabled: "disabled:bg-blue-gray disabled:text-brown-gray",
  }

  return (
    <button className={`${buttonStates[props.theme]} ${buttonStates.hover} ${buttonStates.disabled} py-4 px-6 text-sm lg:text-lg font-bold rounded-[10px] ${props.isNavbarButton && "py-[0.5rem] [font-variant:small-caps]"} ${props.className}`} disabled={props.isDisabled}>
      {props.children}
    </button>
  )
  
}

export default Button;