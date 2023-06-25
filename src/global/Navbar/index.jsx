//eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "global/Button";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const contactUsRef = useRef(null);

  function openContactUsModal() {
    contactUsRef.current.showModal();
  }

  function closeContactUsModal() {
    contactUsRef.current.close();
  }

  return (
    <div className={`flex justify-between items-center lg:items-end w-full h-20 pt-4 px-6 fixed top-0 left-0 ${isSidebarOpen ? "bg-white" : "bg-white"} shadow-md`}>
      {/* Logo */}
      <Link to="/">
        <div className={`lg:w-[100px] lg:h-[51.52px] mb-4 cursor-pointer ${isSidebarOpen ? "w-[37px] h-[33.39px] bg-[url('assets/logo-icon-blue.svg')]" : "w-[80px] h-[33.39px] bg-[url('assets/full-logo-blue.svg')]"} lg:bg-[url('assets/full-logo-blue.svg')] bg-center bg-contain bg-no-repeat`} />
      </Link>

      {/* Burger Icons */}
      <div className={`w-6 h-6 ${isSidebarOpen ? "bg-[url('assets/close-icon.svg')]" : "bg-[url('assets/burger-menu.svg')]"} bg-contain bg-no-repeat flex justify-center items-center text-center p-0 cursor-pointer [-webkit-tap-highlight-color:transparent] lg:hidden`} role="button" onClick={() => setIsSidebarOpen(state => !state)} />

      {/* Menu Links */}
      <div className={`text-[16px] font-semibold flex-col lg:flex-row justify-center items-center gap-6 lg:gap-3 xl:gap-6 text-center [font-variant:small-caps] w-screen lg:w-fit h-[calc(100vh-5rem)] lg:h-min bg-stone-200 lg:bg-transparent p-0 absolute lg:static top-20 left-0 ${isSidebarOpen ? "flex bg-white" : "hidden lg:flex bg-white"}`}>
        {
          /* Navlink names and URLs */
          [
            ["Home", "/"],
            ["Rent to Own?", "/what-is-rent-to-own"],
            ["About Us", "/about-us"],
            ["Faq", "/faq"],
            ["Apply Now", "/apply-now"],
            ["Investment", "/partner-with-us"],
          ].map((link, id) => (
            <NavLink
              to={link[1]}
              key={id}
              className={
                ({ isActive, isPending }) =>
                  `border-[3px] lg:border-[5px] border-transparent px-1 lg:pb-2 lg:mb-3 ${
                    isActive
                    ? "border-b-brown-primary"
                    : isPending
                    ? "pending"
                    : ""
                  }`
              }
              onClick={() => setIsSidebarOpen(state => !state)}
            >
              {link[0]}
            </NavLink>
          ))
        }
      </div>

      <div className="hidden lg:flex gap-5 mb-4">
        <div onClick={openContactUsModal}>
          <Button theme="secondary" isNavbarButton={true}>
            Contact Us
          </Button>
        </div>

        <Link to="/apply-now">
          <Button theme="primary" isNavbarButton={true}>
            Apply Now
          </Button>
        </Link>
      </div>

      <dialog ref={contactUsRef} className="backdrop:bg-slate-900/40 w-[min(70vw,35rem)] relative p-16 rounded-md">
        <p className="px-auto text-center text-lg font-semibold mb-8">{"We'd love to hear from you, send us a message"}</p>

        <div className="flex flex-wrap gap-8 justify-center">
          {
            /* Contant link URLs, icons and text */
            [
              ["https://wa.me/19053410200", "bg-[url(assets/whatsapp-logo-blue.svg)]", "+1 (905) 3410200",],
              ["tel:+19053410200", "bg-[url(assets/phone-icon-blue.svg)]", "+1 (905) 3410200",],
              ["https://www.instagram.com/carmelhomesltd/", "bg-[url(assets/instagram-logo-blue.svg)]", "@carmelhomesltd",],
              ["https://www.linkedin.com/company/carmel-homes-ltd/", "bg-[url(assets/linkedin-logo-blue.svg)]", "Carmel Homes Ltd",],
            ].map((link, index) => (
              <a href={link[0]} key={index} className="flex gap-2 items-center px-1 py-2 border-[5px] border-transparent hover:border-b-brown-primary">
                <span className={`inline-block h-6 w-6 ${link[1]} bg-contain bg-center bg-no-repeat`} />
                <p className="inline-block">{link[2]}</p>
              </a>
            ))
          }
        </div>
          
          <button className="absolute right-4 top-4 h-5 w-5 bg-[url(assets/close-icon.svg)] bg-contain bg-center bg-no-repeat cursor-pointer" onClick={closeContactUsModal} />
        </dialog>
    </div>
  )
}

export default Navbar

