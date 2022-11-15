import React from "react";
import img1 from "../images/ItemCard/img1.png";
import icon1 from "../images/ItemCard/icon1.svg";
import icon2 from "../images/ItemCard/icon2.svg";
import icon3 from "../images/ItemCard/icon3.svg";
function ItemCard({ img, title, p1, p2, ticketPrice, time, date }) {
  return (
    <div className="flex flex-col h-[700px] w-[340px]  ">
      <img
        className="rounded-tl-[50px] w-[100%] h-[60%] object-fill "
        src={img}
        alt={img}
      />
      <div className="p-4 bg-[#270F33] text-white h-[100%] flex flex-col justify-between rounded-br-[50px] box-border">
        <div className="  flex flex-col gap-[10%] h-[100%] ">
          <h1 className="text-[1.375rem] font-[500] h-10 leading-[1.5rem]">
            {title}
          </h1>
          <p className="text-[0.875rem] font-[400] leading-[1rem] ">{p1}</p>
          <p className="text-[0.875rem] font-[400] leading-[1rem]">{p2}</p>
        </div>
        <div className="flex  flex-wrap gap-[1rem] ">
          <div className="flex gap-[0.5rem]">
            <img src={icon1} alt="img" />
            <h3 className="text-[0.75rem] font-[400]">
              Tickets €{ticketPrice}
            </h3>
          </div>
          <div className="flex gap-[0.5rem] items-center">
            <img className="h-3" src={icon2} alt="img" />
            <h3 className="text-[0.75rem] font-[400]">{time}</h3>
          </div>
          <div className="flex gap-[1.5rem] items-start ">
            <div className="flex gap-[0.5rem] items-center">
              <img className=" h-3" src={icon3} alt="img" />
              <h3 className="text-[1rem] font-[400]">{date}</h3>
            </div>
            <button className="bg-[#FBD07A] text-black rounded-md text-sm px-4 py-2  ">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
