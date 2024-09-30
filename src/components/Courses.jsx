import React from "react";
import { cards, settings } from "../data/data";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Slider from "react-slick";
import Button from "./Button";

const Courses = () => {
  return (
    <div className="flex justify-center px-4 bg-light">
      <div className="max-w-[1360px] w-full">
        <div className="text-center h-[85px] flex flex-col justify-between my-[100px]">
          <h3 className="text-base md:text-lg font-poppins">Courses</h3>
          <h2 className="text-2xl font-semibold md:text-4xl text-normal font-poppins">
            Our Popular Courses
          </h2>
        </div>

        <div className="hidden md:block">
          {/* Show grid for medium and larger screens */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-between w-full bg-white"
              >
                <div className="relative">
                  <div className="object-contain w-full bg-slate-400">
                    <img
                      className="object-contain w-full h-full"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  <div className="p-4 ">
                    <h1 className="mt-4 overflow-hidden text-xl font-bold md:text-2xl line-clamp-2 font-poppins h-14">
                      {card.title}
                    </h1>
                    <p className="h-16 mt-6 overflow-hidden text-sm md:text-base line-clamp-3 font-poppins">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="bg-[#2D387D] text-white p-4 grid grid-cols-3">
                  <span className="flex items-center text-sm font-poppins">
                    <FaUser className="mr-1" />
                    {card.student_count} students
                  </span>
                  <span className="flex items-center justify-center text-sm font-poppins">
                    <FaClock className="mr-1 " />
                    {card.duration} months
                  </span>
                  <span className="flex justify-end font-poppins">
                    <button>View</button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          {/* Show carousel for mobile */}
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-between bg-white h-[400px]"
              >
                {" "}
                {/* Set fixed height for card */}
                <div className="relative flex flex-col flex-grow">
                  <div className="w-full object-contain bg-slate-400 h-[200px]">
                    {" "}
                    {/* Fixed height for image */}
                    <img
                      className="object-fill w-full h-full"
                      src={card.image}
                      alt={card.title}
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-4">
                    <h1 className="mb-2 overflow-hidden text-xl font-bold md:text-2xl text-ellipsis whitespace-nowrap">
                      {card.title}
                    </h1>
                    <p className="flex-grow overflow-hidden text-sm md:text-base text-ellipsis">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="bg-[#2D387D] text-white p-4 grid grid-cols-3">
                  <span className="flex items-center text-sm">
                    <FaUser className="mr-1" />
                    {card.student_count} students
                  </span>
                  <span className="flex items-center justify-center text-sm">
                    <FaClock className="mr-1" />
                    {card.duration} months
                  </span>
                  <span className="flex justify-end">
                    <button>View</button>
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center w-full mt-10 mb-20">
          <Button className="bg-[#2D387D] hover:bg-blue-700 text-white py-2 px-4 rounded font-poppins">
            All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
