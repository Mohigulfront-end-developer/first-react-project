import React from "react";
import BenedfitCart from "./BenedfitCart";

const Benefits = () => {
  return (
    <div className="container my-[100px]">
      <div className=" flex justify-around items-end mb-[80px]">
        <div className="">
          <h1 className=" text-[48px] font-semibold">Benefits</h1>
          <p className=" w-[74%] text-[18px] font-normal text-[#59595A]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="">
          <button className="py-[18px] px-[24px] w-[120px] bg-white rounded-lg border">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-around items-center">
        <BenedfitCart
          num={"01"}
          title={"Flexible Learning Schedule"}
          desc={
            "Fit your coursework around your existing commitments and obligations."
          }
        />{" "}
        <BenedfitCart
          num={"02"}
          title={"Expert Instruction"}
          desc={
            "Learn from industry experts who have hands-on experience in design and development."
          }
        />{" "}
        <BenedfitCart
          num={"03"}
          title={"Diverse Course Offerings"}
          desc={
            "Explore a wide range of design and development courses covering various topics."
          }
        />{" "}
        <BenedfitCart
          num={"04"}
          title={"Updated Curriculum"}
          desc={
            "Access courses with up-to-date content reflecting the latest trends and industry practices."
          }
        />{" "}
        <BenedfitCart
          num={"05"}
          title={"Practical Projects and Assignments"}
          desc={
            "FDevelop a portfolio showcasing your skills and abilities to potential employers."
          }
        />{" "}
        <BenedfitCart
          num={"06"}
          title={"Interactive Learning Environment"}
          desc={
            "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
          }
        />
      </div>
    </div>
  );
};

export default Benefits;
