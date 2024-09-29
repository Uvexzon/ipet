import Wrapper from "./components/Wrapper";
import {
  ICFacebook,
  ICLinkedIn,
  ICSearch,
  ICTwitter,
  ICYoutube,
  Logo,
  LogoText,
} from "./assets";
import Button from "./components/Button";

import { useState } from "react";
import group1 from "./assets/group1.png";
import frame31 from "./assets/Frame 31.svg";
import frame30 from "./assets/Frame 30.svg";
import frame33 from "./assets/Frame 33.svg";
import frame34 from "./assets/Frame 34.svg";
import frame35 from "./assets/Frame 35.svg";
import frame36 from "./assets/Frame 36.svg";
import star from "./assets/material-symbols_star-outline.svg";
import "./App.css";
import "./index.css";

import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

import director1 from "./images/director1.jpeg";
import director2 from "./images/director2.jpeg";
import director3 from "./images/director3.jpeg";
import director4 from "./images/director4.jpeg";
import { ICStar } from "./assets";
import { ICAward } from "./assets";
import { ICUser } from "./assets";
import { ICTree } from "./assets";

const directors = [
  {
    image: director1,
    name: "HON. DR. NADEESH PERERA",
    designation: "CEO at Training Athority Sri Lanka",
  },
  {
    image: director2,
    name: "MS. THARINDI GAMAGE SILVA",
    designation: "Director at Digital Marketing",
  },

  {
    image: director3,
    name: "HON. DR. ADHI PERERA",
    designation: "CEO at Training Athority Sri Lanka",
  },
  {
    image: director4,
    name: "MS. MISHEL DE GAMAGE",
    designation: "IT Systems Architecture Sri Lanka",
  },
];

const cards = [
  {
    image: image1,
    title: "Python Programming Course",
    description: "Unlock Your Potential with Our Python Programming Course!",
    student_count: 20,
    duration: 20,
  },
  {
    image: image2,
    title: "Certificate in English Communication Essential",
    description: "Unlock Your Potential with Our Python Programming Course!",
    student_count: 20,
    duration: 20,
  },
  {
    image: image3,
    title: "Python Programming Course",
    description: "Unlock Your Potential with Our Python Programming Course!",
    student_count: 20,
    duration: 20,
  },
];

const features = [
  {
    title: "Facilities",
    description: "Computer Facilities",
    icon: frame31,
  },
  {
    title: "Experienced Faculty",
    description: "Learn from experts",
    icon: frame34,
  },
  {
    title: "Oracle Academy",
    description: "Partnership",
    icon: frame30,
  },
  {
    title: "Cisco Academy",
    description: "Partnership",
    icon: frame35,
  },
  {
    title: "Online Skills",
    description: "Career Support",
    icon: frame33,
  },
  {
    title: "Industry-Relevant",
    description: "Career Support",
    icon: frame36,
  },
];
const statistics = [
  {
    title: "Years of Excellence",
    value: "34+",
    icon: <ICStar />, // Replace with actual icon path
  },
  {
    title: "Awards",
    value: "10+",
    icon: <ICAward />, // Replace with actual icon path
  },
  {
    title: "Student in Campus",
    value: "5000+",
    icon: <ICUser />, // Replace with actual icon path
  },
  {
    title: "Programmes",
    value: "20+",
    icon: <ICTree />, // Replace with actual icon path
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div className="bg-dark w-full h-[74px] flex items-center text-white justify-center p-2">
        <div className="w-full max-w-[1360px] h-full flex justify-between">
          <div className="flex gap-5 h-full items-center">
            <span className="flex gap-1">
              <b>Email:</b>
              <p>ipetsrilanka@gmail.com</p>
            </span>
            <div className="h-full w-[1px] bg-neutral-300"></div>
            <span className="flex gap-1">
              <b>call:</b>
              <p>+9412345678</p>
            </span>
          </div>
          <div className="h-full w-60 flex items-center gap-2">
            <ICFacebook />
            <ICTwitter />
            <ICLinkedIn />
            <ICYoutube />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-2">
        <div className="max-w-[1360px] w-full h-[90px] flex items-center">
          <div className="flex items-center gap-5">
            <Logo />
            <LogoText />
          </div>
          <div className="justify-self-center mx-auto">
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
                {/* Parent element with group */}
                <a href="#" className="hover:underline cursor-pointer">
                  Courses
                </a>
                {/* Dropdown */}
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
          <div className="flex gap-2">
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
        </div>
      </div>
      <div className="h-screen w-full">
        <div class="bg-[url('./assets/bgimage.jpeg')] h-full w-full bg-cover bg-center flex justify-center items-center">
          <div className="max-w-[1360px] w-full">
            <div className="w-[900px]">
              <h5 className="uppercase leading-10 pl-2 relative text-white before:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-normal">
                An Empowered Sri Lanka IPET.
              </h5>
              <h1 className="text-white text-7xl leading-snug uppercase">
                <span class="block ">Institute of</span>
                <span class="block">Professional Engineers</span>
                <span class="block">and Technologists</span>
              </h1>
              <Button className="mt-4">Explore</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="text-[20px] mt-10 justify-center flex">About us</div>
        <div className="text-[30px] flex justify-center font-bold text-normal">
          Our Mission and Vision
        </div>
        <div className="gap-[30px] h-auto mx-auto grid md:grid-cols-2">
          <img
            className="w-full h-auto mt-20 mx-auto my-4 max-w-[526px] max-h-[494px]" // Ensuring the image scales well
            src={group1}
            alt="/"
          />
          <div className="flex flex-col ml-20">
            <p className="text-[#2543B1] text-left text-[30px] leading-[45px] font-poppins font-semibold mt-20">
              Why Choose Us?
            </p>
            <p className="font-poppins font-light text-justify mt-8">
              At the Institute of Engineering and Technologistics, we are
              committed to shaping the future of innovation and technology. Our
              programs are designed to provide students with a solid foundation
              in both engineering and logistics, combining theoretical knowledge
              with practical experience.
            </p>
            <div className="grid grid-cols-2 mt-10">
              {features.map((items) => (
                <div key={items.title} className="flex gap-5">
                  <div>
                    <img className="" src={items.icon} alt="/" />
                  </div>
                  <div className="flex flex-col justify-start">
                    <h4 className="text-lg font-semibold text-left">
                      {items.title}
                    </h4>
                    <p className="text-sm font-light text-left">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-normal w-[115px] mt-6 h-[44px] px-5 py-1 text-white rounded-sm ml-2">
              Explore
            </button>
          </div>
        </div>
        <div className="bg-dark mt-16 flex justify-center items-center h-[279px] max-w-[1512px]">
          <div className="flex items-center gap-40 justify-center w-[1164px] h-[216px] ">
            {statistics.map((item) => (
              <div className="flex flex-col items-center text-white justify-around">
                <span className="flex justify-between">{item.icon}</span>
                <span className="flex justify-between">{item.title}</span>
                <span className=" font-bold text-2xl">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-light">
        <div className="max-w-[1360px] w-full">
          <div className="text-center h-[85px] flex flex-col justify-between my-[100px]">
            <h3>Courses</h3>
            <h2 className="text-4xl text-normal font-semibold">
              Our Popular Courses
            </h2>
          </div>
          <div className="w-full flex justify-between">
            {cards.map((card) => (
              <div className="w-[430px] flex flex-col justify-between bg-white">
                <div className="relative">
                  <div className="w-full object-contain bg-slate-400">
                    <img
                      className="h-full w-full object-contain"
                      src={card.image}
                    />
                  </div>
                  <div className="p-4">
                    <h1 className="text-2xl">{card.title}</h1>
                    <p className="mt-5">{card.description}</p>
                  </div>
                </div>

                <div className="bg-normal text-white p-4 grid grid-cols-3">
                  <span>{card.student_count} students</span>
                  <span className="flex justify-center">
                    {card.duration} students
                  </span>
                  <span className="flex justify-end">
                    <button>View</button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-10 mb-20">
            <Button>All Courses</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1360px] w-full ">
          <div className="text-center h-[85px] flex flex-col justify-between my-[100px]">
            <h3>Our Directors</h3>
            <h2 className="text-4xl text-normal font-semibold">
              Meet the Leadership Team
            </h2>
          </div>

          <div className="w-full flex justify-center gap-4">
            {directors.map((director) => (
              <div className="w-[270px] flex flex-col justify-between bg-light">
                <div className="relative">
                  <div className="w-[270px] h-[270px] bg-slate-400 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={director.image}
                      alt={director.name}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-2xl text-normal font-semibold">
                      {director.name}
                    </h1>
                    <p className="mt-5">{director.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-10 mb-20">
            <Button>All Courses</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default App;
