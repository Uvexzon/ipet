import React from "react";
import ReactTyped from "react-typed";
import Button from "./Button"; // Adjust the import path if necessary
import bgImage from "../assets/bgimage.jpeg"; // Import the background image

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="h-full w-full bg-cover bg-center flex justify-center items-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }} // Set background image here
      >
        <div className="max-w-[1360px] w-full">
          <div className="w-full md:w-[900px]">
            <div className="flex items-center">
              <ReactTyped
                className="md:text-2xl sm:text-4xl font-bold pl-2 text-white"
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
              <h5 className="uppercase leading-10 pl-2 relative text-white before:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-1 text-base md:text-lg">
                An Empowered Sri Lanka IPET.
              </h5>
            </div>
            <h1 className="text-white text-4xl md:text-7xl leading-snug uppercase">
              <span className="block">Institute of</span>
              <span className="block">Professional Engineers</span>
              <span className="block">and Technologists</span>
            </h1>
            <Button className="mt-4 hover:bg-blue-700">Explore</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
