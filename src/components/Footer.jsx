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
    <div className=" mt-44 bg-[#270F33] h-[350px] w-[100%] flex flex-wrap items-center justify-around">
      <div className="h-[222px] flex flex-col justify-center gap-[22px] border-2 px-[6.563rem] border-[#FBD07A] rounded-[19px]">
        <h1 className="text-[white] text-[1.5rem] font-[500]">
          Get Event Updates
        </h1>

        <div className="  relative">
          <input
            className="h-[75px] w-[33.813rem]  rounded-[7px] box-border px-5  "
            type="email"
            placeholder="Enter email address"
          />
          <button className="bg-[#FBD07A] text-[1.125rem] absolute box-border px-5 py-3  right-[10%] top-[25%]  rounded-[7px]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-[1.5rem]">Contact Us</h1>
        {contact.map((item) => (
          <div className="flex items-center text-white text-[0.75rem] gap-2">
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
