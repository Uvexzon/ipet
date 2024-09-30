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
        <div className="bg-dark text-white max-w-3xl py-8 w-[902px] md:h-[203px]">
          <div className="grid h-full grid-cols-1 gap-6 text-center md:grid-cols-3">
            {/* Phone Info */}
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="flex flex-col items-center ">
                <FaPhoneVolume size={30} className="mb-5" />
                +94 123 456 78
              </div>
              <hr className="border-white my-4 md:hidden w-[75%] mx-auto" />
              <hr className="hidden h-32 mx-4 border-l-2 border-white md:block opacity-35" />
            </div>

            {/* Address Info */}
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="flex flex-col items-center font-poppins">
                <FaLocationDot size={30} className="mb-5" />
                NO 61, High Level, Nugegoda
              </div>
              <hr className="border-white my-4 md:hidden w-[75%] mx-auto" />
              <hr className="hidden h-32 mx-4 border-l-2 border-white md:block opacity-35" />
            </div>

            {/* Email Info */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center font-poppins">
                <MdEmail size={30} className="mb-5" />
                ipetsrilanka@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="-mt-[101px] mb-10">
        <div className="max-w-[1512px] mx-auto py-8 px-4 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-gray-300 mt-[150px] mb-[120px] lg:ml-20 text-center lg:text-left">
            {/* Logo and description */}
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-full h-auto mb-8 my-4 mx-10 max-w-[526px] max-h-[494px]"
                src={frame4}
                alt="/"
              />
              <p>Follow Us On</p>
              {/* Social media icons */}
              <div className="flex justify-center gap-6 my-6 mb-10">
                <div className="p-1 border border-gray-300">
                  <FaFacebookSquare size={30} />
                </div>
                <div className="p-1 border border-gray-300">
                  <FaInstagram size={30} />
                </div>
                <div className="p-1 border border-gray-300">
                  <FaTwitterSquare size={30} />
                </div>
                <div className="p-1 border border-gray-300">
                  <FaDribbbleSquare size={30} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center text-center md:flex md:flex-col md:items-center md:ml-10">
              <span className="pr-4 font-poppins">QUICK LINKS</span>
              <hr className="w-24 mt-2 border-b-2" />
              <ul className="md:text-left md:flex md:items-center md:flex-col">
                <li className="py-2 text-sm font-poppins">Home</li>
                <li className="py-2 text-sm font-poppins">About Us</li>
                <li className="py-2 text-sm font-poppins">Courses</li>
                <li className="py-2 text-sm font-poppins">Membership</li>
                <li className="py-2 text-sm font-poppins">News & Events</li>
                <li className="py-2 text-sm font-poppins">Contact Us</li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:flex md:flex-col md:items-center md:ml-10 ">
              <h1>ABOUT IPET</h1>
              <hr className="w-24 mt-2 border-b-2" />
              <ul className="flex flex-col items-center md:text-left">
                <li className="py-2 text-sm font-poppins">History of IPET</li>
                <li className="py-2 text-sm font-poppins">Students</li>
                <li className="py-2 text-sm font-poppins">Awards</li>
                <li className="py-2 text-sm font-poppins">Academic Partners</li>
                <li className="py-2 text-sm font-poppins">
                  Employees of our Graduates
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:flex md:flex-col md:items-center md:ml-10">
              <h1 className="font-poppins">STUD</h1>
              <hr className="w-12 mt-2 border-b-2" />
              <ul className="flex flex-col items-center md:text-left">
                <li className="py-2 text-sm font-poppins">Pre-University</li>
                <li className="py-2 text-sm font-poppins">
                  IPET Business School
                </li>
                <li className="py-2 text-sm font-poppins">
                  IPET School of Computing
                </li>
                <li className="py-2 text-sm font-poppins">
                  IPET Poster Graduates
                </li>
                <li className="py-2 text-sm font-poppins">
                  IPET Global Pathways
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-white">
            <hr className="w-full my-4 border-white" />
            <div className="flex flex-col items-center justify-center mx-10 lg:flex-row lg:justify-between">
              <p className="text-center font-poppins">
                Copyright @ 2024 <span className="text-blue-700">IPET</span>.
                All Rights Reserved
              </p>
              <p className="text-center font-poppins">
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
