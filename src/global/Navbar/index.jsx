//eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "global/Button";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex justify-between items-center w-full h-24 p-4 fixed top-0 left-0 ${isSidebarOpen ? "bg-white" : "bg-white"} shadow-md`}>
      {/* Logo */}
      <div className={`lg:w-[150px] lg:h-[51.52px] flex justify-center items-center p-0 text-xs cursor-pointer ${isSidebarOpen ? "w-[37px] h-[33.39px] bg-[url('assets/logo-icon-blue.svg')] bg-center bg-contain" : "w-[80px] h-[33.39px] bg-[url('assets/full-logo-blue.svg')] bg-contain bg-center"} bg-no-repeat`} />

      {/* Burger Icons */}
      <div className={`w-6 h-6 ${isSidebarOpen ? "bg-[url('assets/close-icon.svg')]" : "bg-[url('assets/burger-menu.svg')]"} bg-contain bg-no-repeat flex justify-center items-center text-center p-0 cursor-pointer lg:hidden`} onClick={() => setIsSidebarOpen(state => !state)} />

      {/* Menu Links */}
      <div className={`text-[16px] font-semibold flex-col lg:flex-row justify-center items-center gap-8 text-center [font-variant:small-caps] w-screen lg:w-fit h-[calc(100vh-6rem)] lg:h-min bg-stone-200 lg:bg-transparent p-0 absolute lg:static top-24 left-0 ${isSidebarOpen ? "flex bg-white" : "hidden lg:flex bg-white"}`}>
        <NavLink
          to="/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          Home
        </NavLink>

        <NavLink
          to="what-is-rent-to-own/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          Rent to Own?
        </NavLink>

        <NavLink
          to="about-us/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          About Us
        </NavLink>

        <NavLink
          to="faq/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          Faq
        </NavLink>

        <NavLink
          to="apply-now/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          Apply Now
        </NavLink>

        <NavLink
          to="partner-with-us/"
          className={
            ({ isActive, isPending }) =>
              isActive
              ? "border-b-2 border-b-orange-400 px-1"
              : isPending
              ? "pending"
              : ""
          }
          onClick={() => setIsSidebarOpen(state => !state)}
        >
          Investment
        </NavLink>
      </div>

      <div className="hidden lg:flex gap-5">
        <Button theme="secondary" isNavbarButton={true}>
          Contact Us
        </Button>

        <Button theme="primary" isNavbarButton={true}>
          Apply Now
        </Button>
      </div>
    </div>
  )
}

export default Navbar

