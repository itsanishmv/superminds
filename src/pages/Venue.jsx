import React from "react";
import LEFTIMAGE from "../images/Venue/leftimage.png";
import RIGHTIMAGE from "../images/Venue/rightimage.png";
import CENTERPAGE from "../images/Venue/centerpage.png";
function Venue() {
  return (
    <div className="flex flex-col w-[100%] items-center px-[5%] space-y-[1%] justify-between ">
      <div className="flex justify-center  py-40 ">
        <img
          className="z-20 border-[10px] flex justify-between absolute md:-translate-x-40 rounded-tl-[150px] border-primaryBtn"
          src={LEFTIMAGE}
          alt=""
        />
        <img
          className="relative top-40 md:translate-x-52"
          src={RIGHTIMAGE}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-[1rem] md:text-[2rem] py-[5%]">Book venue</h1>
        <img className="" src={CENTERPAGE} alt="" />
      </div>
    </div>
  );
}

export default Venue;
