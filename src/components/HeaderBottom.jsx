import React from "react";
import SiteLogo from "../../public/assets/Logo.svg"

const HeaderBottom = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-[50px]">
          <img src= {SiteLogo} alt="logo" />
          <div className="flex">
            <li className="px-[24px] py-[14px] hover:bg-[#F1F1F3] rounded-lg">
              Home
            </li>
            <li className="px-[24px] py-[14px] hover:bg-[#F1F1F3] rounded-lg">
              Course
            </li>
            <li className="px-[24px] py-[14px] hover:bg-[#F1F1F3] rounded-lg">
              About
            </li>
            <li className="px-[24px] py-[14px] hover:bg-[#F1F1F3] rounded-lg">
              Pricing
            </li>
            <li className="px-[24px] py-[14px] hover:bg-[#F1F1F3] rounded-lg">
              Contact
            </li>
          </div>
        </div>
        <div className="my-[20px]">
          <button className="px-[34px] py-[14px] mr-3 hover:bg-[#F1F1F3] rounded-lg">
            Sign Up
          </button>
          <button className="px-[34px] py-[14px] rounded-lg bg-[#FF9500] text-[white]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
