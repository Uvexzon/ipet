import React from "react";
import frame4 from "../assets/Frame 4.svg";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="bg-blue-700 text-white  max-w-3xl py-8 w-[902px]  md:h-[203px]">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 h-full">
            {/* Phone Info */}
            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="flex flex-col items-center  ">
                <FaPhoneVolume size={30} className=" mb-5" />
                +94 123 456 78
              </div>
              <hr className="border-white my-4 md:hidden w-[75%]" />
              <hr className="hidden md:block border-l-2 border-white h-32 mx-4 opacity-35" />
            </div>

            {/* Address Info */}
            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="flex flex-col items-center">
                <FaLocationDot size={30} className=" mb-5" />
                NO 61, High Level, Nugegoda
              </div>
              <hr className="border-white my-4 md:hidden w-[75%]" />
              <hr className="hidden md:block border-l-2 border-white h-32 mx-4 opacity-35" />
            </div>

            {/* Email Info */}
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <MdEmail size={30} className=" mb-5" />
                ipetsrilanka@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="-mt-[101px] mb-10">
        <div className="max-w-[1512px] mx-auto py-8 px-4 bg-black ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-gray-300 mt-[150px] mb-[120px] ml-20">
            {/* Logo and description */}
            <div className="flex flex-col items-center justify-center text-center ">
              <img
                className="w-full h-auto mb-8  my-4 mx-10 max-w-[526px] max-h-[494px]"
                src={frame4}
                alt="/"
              />
              <p className="">Follow Us On</p>
              {/* Social media icons */}
              <div className="flex justify-center mb-10 gap-6 my-6">
                <div className="border border-gray-300 p-1">
                  <FaFacebookSquare size={30} />
                </div>
                <div className="border border-gray-300 p-1">
                  <FaInstagram size={30} />
                </div>
                <div className="border border-gray-300 p-1">
                  <FaTwitterSquare size={30} />
                </div>
                <div className="border border-gray-300 p-1">
                  <FaGithubSquare size={30} />
                </div>
                <div className="border border-gray-300 p-1">
                  <FaDribbbleSquare size={30} />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:ml-10 ">
              <span className="pr-4">QUICK LINKS</span>
              <hr className="w-24 border-b-2 mt-2" />
              <ul className="text-left">
                <li className="py-2 text-sm">Home</li>
                <li className="py-2 text-sm">About Us</li>
                <li className="py-2 text-sm">Courses</li>
                <li className="py-2 text-sm">Membership</li>
                <li className="py-2 text-sm">News & Events</li>
                <li className="py-2 text-sm">Contact Us</li>
              </ul>
            </div>

            <div className="flex flex-col   mb-10">
              <h1>ABOUT IPET</h1>
              <hr className="w-24 border-b-2 mt-2" />
              <ul className="text-left">
                <li className="py-2 text-sm">History of IPET</li>
                <li className="py-2 text-sm">Students</li>
                <li className="py-2 text-sm">Awards</li>
                <li className="py-2 text-sm">Academic Partners</li>
                <li className="py-2 text-sm">Employees of our Graduates</li>
              </ul>
            </div>

            <div className="flex flex-col ">
              <h1>STUD</h1>
              <hr className="w-12 border-b-2 mt-2" />
              <ul className="text-left">
                <li className="py-2 text-sm">Pre-University</li>
                <li className="py-2 text-sm">IPET Business School</li>
                <li className="py-2 text-sm">IPET School of Computing</li>
                <li className="py-2 text-sm">IPET Poster Graduates</li>
                <li className="py-2 text-sm">IPET Global Pathways</li>
              </ul>
            </div>
          </div>

          <div className="text-white mt-8">
            <hr className="border-white my-4 w-full" />
            <div className="flex flex-col lg:flex-row justify-between mx-10">
              <p>
                Copyright @ 2024 <span className="text-blue-700">IPET</span>.
                All Rights Reserved
              </p>
              <p>
                Designed & Developed by{" "}
                <span className="text-blue-700">Uvexon</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
