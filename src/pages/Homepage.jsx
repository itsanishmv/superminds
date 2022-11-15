import React from "react";
import ItemCard from "../components/ItemCard";
import img1 from "../images/ItemCard/img1.png";
import img2 from "../images/ItemCard/img2.png";
import img3 from "../images/ItemCard/img3.png";
import POSTERCENTER from "../images/Homepage/postercenter.png";
import POSTERRIGHT from "../images/Homepage/posterright.png";
import POSTERLEFT from "../images/Homepage/posterleft.png";
import Icon1 from "../images/ItemCard/icon1.svg";
import Banner from "../components/Banner";
function Homepage() {
  const cards = [
    {
      img: img1,
      title: "Carnival of carnage",
      p1: "Get dressed to impress and join us for another incredible Carnival of Carnage show",
      p2: "with acts in pole, aerial, burlesque, comedy, drag and much more.",

      ticketPrice: 20,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
    {
      img: img2,
      title: "Cabaret Show",
      p1: "Join us for a spectacular cabaret show",
      p2: "where you can expect a jaw-dropping evening of circus,burlesque, aerialist's and more! Amazing entertainment paired with a 3-course meal",

      ticketPrice: 17,
      time: "Show 8pm | Doors 6pm",
      date: "19th October 2022",
    },
    {
      img: img3,
      title: "The Rocky Horror Tribute Show",
      p1: "The UK's Leading Premier tribute to the hit stage show and classic 1975 film.",
      p2: "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",

      ticketPrice: 10,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
    {
      img: img1,
      title: "Carnival of carnage",
      p1: "Get dressed to impress and join us for another incredible Carnival of Carnage show",
      p2: "with acts in pole, aerial, burlesque, comedy, drag and much more.",

      ticketPrice: 20,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
    {
      img: img2,
      title: "Cabaret Show",
      p1: "Join us for a spectacular cabaret show",
      p2: "where you can expect a jaw-dropping evening of circus,burlesque, aerialist's and more! Amazing entertainment paired with a 3-course meal",

      ticketPrice: 17,
      time: "Show 8pm | Doors 6pm",
      date: "19th October 2022",
    },
    {
      img: img3,
      title: "The Rocky Horror Tribute Show",
      p1: "The UK's Leading Premier tribute to the hit stage show and classic 1975 film.",
      p2: "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",

      ticketPrice: 10,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
    {
      img: img1,
      title: "Carnival of carnage",
      p1: "Get dressed to impress and join us for another incredible Carnival of Carnage show",
      p2: "with acts in pole, aerial, burlesque, comedy, drag and much more.",

      ticketPrice: 20,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
    {
      img: img2,
      title: "Cabaret Show",
      p1: "Join us for a spectacular cabaret show",
      p2: "where you can expect a jaw-dropping evening of circus,burlesque, aerialist's and more! Amazing entertainment paired with a 3-course meal",

      ticketPrice: 17,
      time: "Show 8pm | Doors 6pm",
      date: "19th October 2022",
    },
    {
      img: img3,
      title: "The Rocky Horror Tribute Show",
      p1: "The UK's Leading Premier tribute to the hit stage show and classic 1975 film.",
      p2: "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",

      ticketPrice: 10,
      time: "Show 8pm | Doors 6pm",
      date: "10th December 2022",
    },
  ];
  return (
    <div className=" min-h-[100vh]  w-[100%]  ">
      {/* banner */}
      <Banner />

      <div className="flex items-center w-[100%] justify-center py-[5%] ">
        <h1 className="font-[700] md:text-[1.875rem]">
          What's On At Glasgow's Coolest Event Space.
        </h1>
        <h3 className="hidden xl:flex text-[1.25rem] font-[500] absolute right-28">
          View all
        </h3>
      </div>

      <div className="flex justify-around px-[10%] gap-10 flex-wrap ">
        {cards.map((item) => (
          <ItemCard
            img={item.img}
            title={item.title}
            p1={item.p1}
            p2={item.p2}
            ticketPrice={item.ticketPrice}
            time={item.time}
            date={item.date}
          />
        ))}
      </div>
      <div className="flex items-center w-[100%]  justify-center py-[5%] box-border">
        <h1 className="font-[700] text-[1.875rem]">Must see events.</h1>
        <h3 className="text-[1.25rem] font-[500] absolute right-28">
          View all
        </h3>
      </div>
      <div className="flex   px-20 justify-center ">
        <img
          className="object-contain w-[100%] h-auto translate-x-40"
          src={POSTERLEFT}
          alt="poster"
        />
        <div className="z-20 w-[50%]  flex ">
          <div className="flex justify-center relative  bg-center bg-no-repeat  ">
            <img className="w-[100%] object-cover" src={POSTERCENTER} alt="" />
            <div
              style={{
                background:
                  "linear-gradient(179.6deg, rgba(0, 0, 0, 0.15) 2%, rgba(0, 0, 0, 1) )",
              }}
              className="absolute flex flex-col gap-[0.5rem] bottom-0 text-white px-10 py-5   w-full"
            >
              <h1 className="text-[1.563rem] font-[500]">
                Carnival of carnage
              </h1>
              <div className="flex gap-2">
                <img src={Icon1} alt="icon" />
                <p>18 Candleriggs, Glasgow City Centre G1 1LD</p>
              </div>
              <div className="flex gap-2">
                <img src={Icon1} alt="icon" />
                <p>8th October 2022</p>
              </div>
              <div className="flex items-start justify-between  box-border">
                <div className="flex  gap-2">
                  <img src={Icon1} alt="icon" />
                  <p>7pm</p>
                </div>

                <button className=" bg-primaryBtn text-black font-[500] px-4 py-2 rounded-md opacity-100">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="object-contain -translate-x-40 w-[100%] h-auto"
          src={POSTERRIGHT}
          alt="poster"
        />
      </div>
    </div>
  );
}

export default Homepage;
