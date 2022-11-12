import React from "react";

function SolidButton({ text }) {
  return (
    <button className="bg-[#FBD07A] rounded-[20px] px-4 text-[0.875rem] font-[500] h-[28px] box-border text-[#270F33] justify-center">
      {text}
    </button>
  );
}

export default SolidButton;
