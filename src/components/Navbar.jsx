import React, { useState } from "react";
import LOGO from "../images/logo.png";
import SolidButton from "./Utility-components/SolidButton";
import SEARCH from "../images/navbar/search.svg";
import HAMBURGER from "../images/navbar/hamburger.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [openHamMenu, setOpenHamMenu] = useState(false);
  const navigate = useNavigate();
  function redirectToVenue() {
    navigate("/venue");
    setOpenHamMenu(false);
  }
  function redirectToHome() {
    navigate("/");
    setOpenHamMenu(false);
  }
  return (
    <div>
      {" "}
      <div className="h-[6.438rem] w-[100%] z-30 fixed shadow-lg bg-[#270F33] flex items-center justify-between px-[10%] ">
        <img src={LOGO} alt="logo" />
        <div>
          <input
            className=" hidden md:flex bg-[#270F33] border-[1px]  w-[100%] border-[#D1D0D0] outline-none rounded-[20px]  box-border md:px-10 focus:bg-[white]"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="lg:hidden flex justify-end gap-10 w-[20%] ">
          <img className="md:hidden" src={SEARCH} alt="" />
          <img
            className="relative flex justify-end"
            onClick={() => setOpenHamMenu(!openHamMenu)}
            src={HAMBURGER}
            alt=""
          />
          {/* <div className="absolute top-[90%] w-[100%]  z-30 p-5 "> */}
          {openHamMenu && (
            <div className="absolute  top-[70%] p-5 flex flex-col space-y-2  bg-primaryBtn font-semibold">
              <h1 onClick={redirectToHome}>Home</h1>
              <h1>What's on</h1>
              <h1 onClick={redirectToVenue}>Book venue</h1>
              <h1>Gallery</h1>
              <h1>Contact</h1>
            </div>
          )}
        </div>
        {/* </div> */}

        <div className="xl:flex  w-[40%] justify-between hidden">
          <SolidButton text="Home" />
          <SolidButton text="What's on" />
          <SolidButton text="Book venue" />
          <SolidButton text="Gallery" />
          <SolidButton text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
