import React from "react";
import LOGO from "../images/logo.png";
import SolidButton from "./Utility-components/SolidButton";
function Navbar() {
  return (
    <div className="h-[103px] w-[100%]  fixed shadow-lg bg-[#270F33] flex items-center justify-around">
      <img src={LOGO} alt="logo" />
      <div>
        <input
          className="bg-[#270F33] border-[1px] h-[35px] w-[338px] border-[#D1D0D0] outline-none rounded-[20px]  box-border px-10 focus:bg-[white]"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="flex  w-[35%] justify-between box-border">
        <SolidButton text="Home" />
        <SolidButton text="What's on" />
        <SolidButton text="Book venue" />
        <SolidButton text="Gallery" />
        <SolidButton text="Contact" />
      </div>
    </div>
  );
}

export default Navbar;
