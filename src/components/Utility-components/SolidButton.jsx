import React from "react";
import { useNavigate } from "react-router-dom";
function SolidButton({ text }) {
  const navigate = useNavigate();
  function route() {
    switch (text) {
      case "Home":
        navigate("/");
        break;
      case "Book venue":
        navigate("/venue");
        break;
      default:
        break;
    }
  }
  return (
    <button
      onClick={route}
      className="bg-[#FBD07A] rounded-[20px] px-4 text-[0.875rem] font-[500] h-[28px] box-border text-[#270F33] justify-center"
    >
      {text}
    </button>
  );
}

export default SolidButton;
