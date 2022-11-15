import React from "react";
import PHONE from "../images/Socials/phone.png";
import MAIL from "../images/Socials/mail.png";
import FB from "../images/Socials/facebook.png";
import INSTA from "../images/Socials/instagram.png";
function Footer() {
  const contact = [
    { img: MAIL, text: "events@18candleriggs.com" },
    { img: PHONE, text: "07936 558303" },
    { img: FB, img2: INSTA },
  ];
  return (
    <div className=" w-[100%] h-[100%] bg-[#270F33]  flex flex-wrap items-center justify-around p-[5%]">
      <div className=" md:w-[50%] px-10 py-5 flex flex-col justify-center gap-[1.375rem] border-2  border-[#FBD07A] rounded-[19px]">
        <h1 className="text-[white] text-[1.5rem] font-[500]">
          Get Event Updates
        </h1>

        <div className="relative flex w-[100%] box-border justify-end items-center">
          <input
            className=" h-[100px]   w-[100%] md:h-[5.5rem] md:px-5  rounded-[7px] box-border   "
            type="email"
            placeholder="Enter email address"
          />
          <button className="bg-[#FBD07A] text-[1.125rem] absolute box-border px-[10%] py-3 right-[5%] rounded-[7px]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-3 ">
        <h1 className="text-white text-[1.5rem]">Contact Us</h1>
        {contact.map((item) => (
          <div className="flex flex-wrap items-center text-white text-[0.75rem] gap-2">
            <img src={item.img} alt={item.img} />
            <h4>{item.text}</h4>
            <img src={item.img2} alt={item.img2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
