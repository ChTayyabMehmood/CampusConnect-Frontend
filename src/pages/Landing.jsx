import React from "react";
import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import FeatureComponent from "../components/FeatureComponent";
import HowDoesItWork from "../components/HowDoesItWork";
import BuiltForComponent from "../components/BuiltForComponent";

const Landing = () => {
  return (
    <div className="w-7xl  mx-auto overflow-hidden ">
      <Navbar />
      <HeroComponent />
      <FeatureComponent />
      <HowDoesItWork />
      <BuiltForComponent />

      <div className="mb-111"></div>
    </div>
  );
};

export default Landing;
