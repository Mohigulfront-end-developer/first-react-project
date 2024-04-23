import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

const BenedfitCart = ({ title, num, desc }) => {
  return (
    <div className=" w-[400px] bg-[white] p-[50px] rounded-xl">
      <div className=" flex justify-end">
        <span className=" text-[80px] font-bold">{num}</span>
      </div>
      <h3 className=" mt-[50px] pb-[14px] text-[24px] font-semibold">
        {title}
      </h3>
      <p className="text-[#4C4C4D]  text-[18px]">{desc}</p>
      <div className="mt-[50px] flex justify-end">
        <button className="p-5 bg-[#FCFCFD] text-[#FF9500] border rounded-lg text-[18px]">
          <CgArrowTopRight />
        </button>
      </div>
    </div>
  );
};

export default BenedfitCart;
