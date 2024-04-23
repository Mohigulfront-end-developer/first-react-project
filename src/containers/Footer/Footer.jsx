import React from 'react'
import SiteLogo from "../../../public/assets/Logo.svg";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[white] mt-[142px]">
      <div className="container">
        <div className="flex justify-around gap-10 mb-[50px]">
          <div className="">
            <img src={SiteLogo} alt="" className="mb-[45px] mt-[100px]" />
            <li className="flex items-center">
              <IoMdMail className="mr-[10px]" />
              hello@skillbridge.com
            </li>
            <li className="flex items-center">
              <BsFillTelephoneFill className="mr-[10px]" />
              +91 91813 23 2309
            </li>
            <li className="flex items-center">
              <FaLocationDot className="mr-[10px]" />
              Somewhere in the World
            </li>
          </div>
          <div className="flex justify-between gap-[80px] mb-[50px]">
            <div className="">
              <h4 className="mb-[14px] mt-[100px] text-xl font-semibold">
                Home
              </h4>
              <li className="pb-[5px]">Benefits</li>
              <li className="pb-[5px]">Our Courses</li>
              <li className="pb-[5px]">Our Testimonials</li>
              <li className="pb-[5px]">Our FAQ</li>
            </div>
            <div className="">
              <h4 className="mb-[14px] mt-[100px] text-xl font-semibold">
                About Us
              </h4>
              <li className="pb-[5px]">Company</li>
              <li className="pb-[5px]">Achievements</li>
              <li className="pb-[5px]">Our Goals</li>
            </div>
            <div className="">
              <h4 className="mb-[14px] mt-[100px] text-xl font-semibold">
                Social Profiles
              </h4>
              <div className="flex justify-between items-center">
                <button className="bg-[#F7F7F8] rounded-lg border-solid border-1 p-4 mr-[10px]">
                  <FaFacebook />
                </button>
                <button className="bg-[#F7F7F8] rounded-lg border-solid border-1 p-4 mr-[10px]">
                  <FaTwitter />
                </button>
                <button className="bg-[#F7F7F8] rounded-lg border-solid border-1 p-4">
                  <FaLinkedin />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-[20px]">
          <span>© 2023 Skillbridge. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;