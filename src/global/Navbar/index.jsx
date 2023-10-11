import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "global/Button";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const contactUsRef = useRef(null);

  const contactUsLinks = [
    {
      url: "https://wa.me/15874172421",
      icon: "bg-[url(assets/whatsapp-logo-blue.svg)]",
      text: "+1 (587) 4172421",
      alt: "whatsapp logo",
    },
    {
      url: "tel:+15874172421",
      icon: "bg-[url(assets/phone-icon-blue.svg)]",
      text: "+1 (587) 4172421",
      alt: "phone",
    },
    {
      url: "https://www.instagram.com/carmelhomesltd/",
      icon: "bg-[url(assets/instagram-logo-blue.svg)]",
      text: "@carmelhomesltd",
      alt: "instagram logo",
    },
    {
      url: "https://www.linkedin.com/company/carmel-homes-ltd/",
      icon: "bg-[url(assets/linkedin-logo-blue.svg)]",
      text: "Carmel Homes Ltd",
      alt: "linkedin logo",
    },
  ]

  function toggleSideBar() {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isSidebarOpen
        ? "unset"
        : "hidden";
      setIsSidebarOpen(state => !state);
    }
  }

  function openContactUsModal() {
    if (isSidebarOpen && window.innerWidth < 1024) setIsSidebarOpen(state => !state); 
    contactUsRef.current.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeContactUsModal() {
    contactUsRef.current.close();
    document.body.style.overflow = "unset";
  }

  return (
    <nav className={`z-10 flex justify-between items-center lg:items-end w-full h-20 pt-4 px-6 fixed top-0 left-0 ${isSidebarOpen ? "bg-white" : "bg-white"} shadow-md`}>
      {/* Logo */}
      <Link to="/">
        <div className={`lg:w-[100px] lg:h-[51.52px] mb-4 cursor-pointer ${isSidebarOpen ? "w-[37px] h-[33.39px] bg-[url('assets/logo-icon-blue.svg')]" : "w-[80px] h-[33.39px] bg-[url('assets/full-logo-blue.svg')]"} lg:bg-[url('assets/full-logo-blue.svg')] bg-center bg-contain bg-no-repeat`} role="img" aria-roledescription="Carmel Homes Ltd logo" />
      </Link>

      {/* Burger Icons */}
      <button type="button" className={`w-6 h-6 ${isSidebarOpen ? "bg-[url('assets/close-icon.svg')]" : "bg-[url('assets/burger-menu.svg')]"} bg-contain bg-no-repeat flex justify-center items-center text-center p-0 [-webkit-tap-highlight-color:transparent] lg:hidden`} onClick={toggleSideBar} />

      {/* Menu Links */}
      <div className={`flex-col justify-evenly items-center pb-10 lg:pb-0 text-[16px] font-semibold [font-variant:small-caps] w-screen lg:w-fit h-[calc(100vh-5rem)] lg:h-min bg-stone-200 lg:bg-transparent p-0 absolute lg:static top-20 left-0 ${isSidebarOpen ? "flex bg-white" : "hidden lg:flex bg-white"}`}>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-3 xl:gap-6 h-full text-center">
          {
            /* Navlink names and URLs */
            [
              ["Home", "/"],
              ["Rent to Own?", "/what-is-rent-to-own"],
              ["About Us", "/about-us"],
              ["Faq", "/faq"],
              ["Apply Now", "/apply-now"],
              ["Partner", "/partner-with-us"],
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
                onClick={toggleSideBar}
              >
                {link[0]}
              </NavLink>
            ))
          }
        </ul>
        <div className="lg:hidden" onClick={openContactUsModal}>
          <Button theme="primary" isNavbarButton={true}>
            Contact Us
          </Button>
        </div>
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

      <dialog ref={contactUsRef} className="backdrop:bg-slate-900/40 w-[min(70vw,55rem)] absolute px-6 py-12 md:p-16 rounded-md">
        <p className="px-auto text-center text-lg xl:text-2xl font-semibold mb-8">{"We'd love to hear from you, send us a message"}</p>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 lg:gap-10">
          {
            /* Contact links */
            contactUsLinks.map((link, index) => (
              <a href={link.url} target="_blank" rel="noreferrer" key={index} className="flex gap-2 items-center px-1 py-2 border-[5px] border-transparent hover:border-b-brown-primary">
                <span className={`inline-block h-6 w-6 xl:h-10 xl:w-10 ${link.icon} bg-contain bg-center bg-no-repeat`}  role="img" aria-roledescription={`${link.alt} icon`} />
                <p className="inline-block xl:text-xl font-semibold">{link.text}</p>
              </a>
            ))
          }
        </div>
          
        <button className="absolute right-4 top-4 h-5 w-5 bg-[url(assets/close-icon.svg)] bg-contain bg-center bg-no-repeat cursor-pointer" onClick={closeContactUsModal} />
      </dialog>
    </nav>
  )
}

export default Navbar

