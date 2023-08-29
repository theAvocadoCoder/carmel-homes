import Button from "global/Button";
import { Link } from "react-router-dom";
import logo from "assets/full-logo-blue.svg";

function _404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 relative text-blue-primary">
      <Link to="/" className="absolute top-5 left-auto">
        <img src={logo} alt="Carmel Homes Logo" className="h-10" />
      </Link>
      <div>
        <h1 className="text-[3rem] font-bold text-center">404</h1>
        <p>Page not found</p>
      </div>

      <p className="max-w-[20rem] text-center">
        {"That's odd. We couldn't find the page you're looking for. Would you like to "}
        <Link to="/" className="text-brown-primary font-bold whitespace-nowrap">head back home?</Link>
      </p>
      <Link to="/">
        <Button theme="primary" isNavbarButton={true} className="">Home</Button>
      </Link>
    </div>
  )
}

export default _404