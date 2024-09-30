import React from "react";
import { directors, settings } from "../data/data";
import Slider from "react-slick";

const Directors = () => {
  return (
    <div className="max-w-[1360px] w-full">
      <div className="text-center h-[85px] flex flex-col justify-between my-[100px]">
        <h3 className="text-base md:text-lg font-poppins">Our Directors</h3>
        <h2 className="text-2xl font-semibold md:text-4xl text-normal font-poppins">
          Meet the Leadership Team
        </h2>
      </div>

      {/* Grid for medium and large screens */}
      <div className="hidden md:block">
        <div className="grid w-full grid-cols-1 gap-4 p-10 shadow-lg md:grid-cols-2 lg:grid-cols-4">
          {directors.map((director, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full bg-light"
            >
              <div className="relative">
                <div className="w-full h-[250px] bg-slate-400 overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={director.image}
                    alt={director.name}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="overflow-hidden text-xl font-semibold font-poppins md:text-2xl text-normal h-14">
                    {director.name}
                  </h1>
                  <p className="h-6 mt-2 overflow-hidden text-sm md:text-base font-poppins text-ellipsis">
                    {director.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel for mobile */}
      <div className="md:hidden">
        <Slider {...settings}>
          {directors.map((director, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full p-4 bg-light"
            >
              <div className="relative">
                <div className="w-full h-[250px] bg-slate-400 overflow-hidden">
                  <img
                    className="w-full h-full "
                    src={director.image}
                    alt={director.name}
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-semibold md:text-2xl text-normal">
                    {director.name}
                  </h1>
                  <p className="mt-5 text-sm md:text-base">
                    {director.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Directors;
