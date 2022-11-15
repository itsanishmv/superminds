import React from "react";
import BANNER from "../images/Homepage/banner.png";
function Banner() {
  return (
    <div className=" w-[100%]  box-border flex justify-center items-center">
      <img className=" w-[100%] " src={BANNER} alt="banner" />
      <div className="rounded-xl text-white absolute  bg-[#68676780]  hidden md:flex w-4/5 h-3/5 box-border p-5">
        <div className="border-[3px] border-black h-[100%] gap-[10%] w-[100%] box-border flex flex-col justify-center items-center rounded-lg">
          <div className="flex flex-col text-center">
            <h1 className="text-[3.125rem] ">
              The perfect night out in Glasgow !
            </h1>
            <h1 className="text-[2.5rem]">18 Candleriggs</h1>
            <h1 className="text-[2.188rem]">ON 14TH & 15TH FEB</h1>
          </div>
          <button className="text-[#FEA901] bg-transparent border-white border-[1px] px-5 py-2 rounded-[3px]">
            Book Tickets
          </button>
          <h1 className="text-[1.875rem]">
            3 course meal & show included € 17 per person{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
