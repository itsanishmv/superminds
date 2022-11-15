import React from "react";
import LEFTIMAGE from "../images/Venue/leftimage.png";
import RIGHTIMAGE from "../images/Venue/rightimage.png";
function Venue() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center border-2 border-red-500 py-72">
        <img
          className="z-20 border-[10px] flex justify-between absolute  rounded-tl-[150px] border-primaryBtn"
          src={LEFTIMAGE}
          alt=""
        />
        <img className="relative top-40 " src={RIGHTIMAGE} alt="" />
      </div>
    </div>
  );
}

export default Venue;
