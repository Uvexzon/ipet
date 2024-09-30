import React from "react";
import { features, statistics } from "../data/data";
import group1 from "../assets/group1.png"; // Make sure to import the image

const About = () => {
  return (
    <div className="w-full px-4 bg-white sm:px-0">
      <div className="text-[20px] mt-20 justify-center flex font-poppins">
        About Us
      </div>
      <div className="text-[30px] flex justify-center font-bold text-normal font-poppins">
        Our Mission and Vision
      </div>

      <div className="gap-[30px] h-auto mx-auto grid md:grid-cols-2 items-start">
        <div className="flex justify-center w-full">
          <img
            className="w-[526px] h-[494px] mt-20 object-cover"
            src={group1}
            alt="About us"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-[#2543B1] text-left text-[30px] leading-[45px] font-poppins font-semibold mt-20">
            Why Choose Us?
          </p>
          <p className="px-4 mt-8 font-light text-justify font-poppins">
            At the Institute of Engineering and Technologistics, we are
            committed to shaping the future of innovation and technology. Our
            programs are designed to provide students with a solid foundation in
            both engineering and logistics, combining theoretical knowledge with
            practical experience.
          </p>
          <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-5 md:flex-row"
              >
                {" "}
                {/* Center for mobile */}
                <div className="w-[60px] flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center md:text-left">
                  {" "}
                  {/* Center text on mobile only */}
                  <h4 className="text-lg font-semibold font-poppins line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-sm font-light font-poppins line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:justify-start">
            {" "}
            {/* Center on mobile only */}
            <button className="bg-[#2D387D] w-[115px] h-[44px] hover:bg-blue-700 px-5 py-1 text-white rounded-sm font-poppins">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="bg-dark mt-16 flex justify-center items-center h-[279px] max-w-[1512px] overflow-x-auto">
        <div className="flex items-center gap-40 justify-center w-[1164px] h-[216px]">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-around text-white"
            >
              <span className="flex justify-center">{<item.icon />}</span>{" "}
              {/* Render icon as a component */}
              <span className="flex justify-center font-poppins">
                {item.title}
              </span>
              <span className="text-2xl font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
