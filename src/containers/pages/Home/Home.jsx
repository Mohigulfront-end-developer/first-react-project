import React from "react";
import Hero from "../../../components/home/Hero";
import Benefits from "../../../components/home/Benefits";
import MainComp from "../../../components/home/MainComp";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <MainComp/>
      <Benefits/>
    </div>
  );
};

export default Home;
