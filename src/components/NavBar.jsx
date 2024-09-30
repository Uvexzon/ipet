import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import {
  ICFacebook,
  ICLinkedIn,
  ICSearch,
  ICTwitter,
  ICYoutube,
  Logo,
  LogoText,
} from "../assets/index"; // Adjust if the files are inside `icons/` subfolder

import Button from "./Button";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="flex justify-center w-full p-2">
        <div className="max-w-[1360px] w-full h-[90px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <LogoText />
          </div>

          {/* Hamburger Menu Icon (for mobile) */}
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="focus:outline-none">
              <span className="block w-8 h-1 mb-1 bg-black"></span>
              <span className="block w-8 h-1 mb-1 bg-black"></span>
              <span className="block w-8 h-1 bg-black"></span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden mt-4 lg:block">
            <ul className="flex gap-4">
              <li>
                <a href="/" className="hover:underline font-poppins">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline font-poppins">
                  About Us
                </a>
              </li>
              <li className="relative flex items-center group">
                <a
                  href="#"
                  className="cursor-pointer hover:underline font-poppins"
                >
                  Courses
                </a>
                <span className="flex items-center ml-2">
                  <SlArrowDown /> {/* Add the icon here */}
                </span>
                <ul className="absolute left-0 hidden p-2 mt-2 space-y-2 bg-white border rounded-lg shadow-lg group-hover:block group-focus-within:block">
                  <li>
                    <a
                      href="/courses/web-development"
                      className="block p-2 rounded hover:bg-gray-100 font-poppins"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/data-science"
                      className="block p-2 rounded hover:bg-gray-100 font-poppins"
                    >
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/marketing"
                      className="block p-2 rounded hover:bg-gray-100 font-poppins"
                    >
                      Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/memberships" className="hover:underline font-poppins">
                  Memberships
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline font-poppins">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline font-poppins">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Search and Login */}
          <div className="hidden gap-2 lg:flex">
            <Button className="bg-[#2D387D] hover:bg-blue-700">Login</Button>
            <div className="flex items-center bg-light w-[200px] rounded-sm">
              <input
                className="w-full h-full p-2 bg-transparent"
                placeholder="Search..."
              />
              <span className="px-1">
                <ICSearch />
              </span>
            </div>
          </div>

          {/* Drawer for Mobile */}
          <div
            className={`fixed top-0 left-0 h-full bg-white w-64 p-4 z-50 transform transition-transform duration-300 ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={toggleDrawer}
              className="absolute text-2xl top-4 right-4"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4 mt-8">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/memberships"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  Memberships
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  News & Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Overlay to close drawer */}
          {isDrawerOpen && (
            <div
              onClick={toggleDrawer}
              className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
            ></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
