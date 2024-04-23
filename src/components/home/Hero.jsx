import React from "react";
import Line from "../../../public/assets/Abstract Line.svg";
import Stroke from "../../../public/assets/Stroke1.svg";

const Hero = () => {
  return (
    <div className=" py-[100px]">
      <div className="flex justify-center">
        <div className=" flex justify-center items-center flex-col">
          <div className=" flex gap-[10px]  relative py-[14px] px-5 bg-white rounded-lg">
            <img
              src={Line}
              className=" absolute top-[-30px] left-[-20px]"
              alt="img1"
            />
            <img src={Stroke} alt="img2"/>
            <h1 className=" text-[48px]  font-semibold leading-[150%]">
              <span className="text-[#FF9500]"> Unlock</span> Your Creative
              Potential
            </h1>
          </div>
          <h2 className=" text-[38px] font-medium">with Online Design and Development Courses.</h2>
          <p className=" text-[18px] font-normal leading-[150%]">Learn from Industry Experts and Enhance Your Skills.</p>
          <div className=" flex gap-3 mt-[60px]">
            <button className="bg-[#FF9500] rounded-lg py-[18px] px-[24px]  text-[white]">
              Explore Courses
            </button>
            <button className="bg-white rounded-lg py-[18px] px-[24px]">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
