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
      <div className="bg-dark w-full h-[74px] flex items-center text-white justify-center p-2">
        <div className="w-full max-w-[1360px] h-full flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-5 h-full items-center">
            <span className="flex gap-1">
              <b>Email:</b>
              <p>ipetsrilanka@gmail.com</p>
            </span>
            <div className="hidden sm:block h-full w-[1px] bg-neutral-300"></div>
            <span className="flex gap-1">
              <b>Call:</b>
              <p>+9412345678</p>
            </span>
          </div>
          <div className="h-full w-full sm:w-60 flex justify-center sm:justify-end items-center gap-4 sm:gap-8 mt-2 sm:mt-0">
            <ICFacebook className="text-white text-2xl" />
            <ICTwitter className="text-white text-2xl" />
            <ICLinkedIn className="text-white text-2xl" />
            <ICYoutube className="text-white text-2xl" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-2">
        <div className="max-w-[1360px] w-full h-[90px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <LogoText />
          </div>

          {/* Hamburger Menu Icon (for mobile) */}
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="focus:outline-none">
              <span className="block w-8 h-1 bg-black mb-1"></span>
              <span className="block w-8 h-1 bg-black mb-1"></span>
              <span className="block w-8 h-1 bg-black"></span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:block">
            <ul className="flex gap-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:underline cursor-pointer">
                  Courses
                </a>
                <ul className="absolute left-0 bg-white border rounded-lg shadow-lg mt-2 p-2 space-y-2 hidden group-hover:block group-focus-within:block">
                  <li>
                    <a
                      href="/courses/web-development"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/data-science"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="/courses/marketing"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/memberships" className="hover:underline">
                  Memberships
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Search and Login */}
          <div className="hidden lg:flex gap-2">
            <Button>Login</Button>
            <div className="flex items-center bg-light w-[200px] rounded-sm">
              <input
                className="h-full bg-transparent w-full p-2"
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
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-4 mt-8">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Courses
                </a>
                <span className="ml-2 flex items-center">
                  <SlArrowDown /> {/* Add the icon here */}
                </span>
              </li>
              <li>
                <a href="/memberships" className="hover:underline">
                  Memberships
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Overlay to close drawer */}
          {isDrawerOpen && (
            <div
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            ></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
