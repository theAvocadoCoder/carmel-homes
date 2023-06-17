import PropTypes from "prop-types";

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  isNavbarButton: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

function Button(props) {

  const buttonStates = {
    primary: "bg-[#16293A] text-white",
    secondary: "bg-white text-[#16293A] shadow-md",
    hover: "hover:bg-[#BF9455] hover:text-white",
    disabled: "",
  }

  return (
    <button className={`${buttonStates[props.theme]} ${buttonStates.hover} ${buttonStates.disabled} px-4 py-3 font-semibold rounded-[10px] ${props.isNavbarButton && "[font-variant:small-caps]"}`}>
      {props.children}
    </button>
  )
  
}

export default Button;