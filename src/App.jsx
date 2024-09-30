import Wrapper from "./components/Wrapper";
import { SlArrowDown } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import Footer from "./components/footer";

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
    duration: 0o3,
  },
  {
    image: image2,
    title: "Certificate in English Communication Essential",
    description: "Unlock Your Potential with Our Python Programming Course!",
    student_count: 20,
    duration: 0o6,
  },
  {
    image: image3,
    title: "Python Programming Course",
    description: "Unlock Your Potential with Our Python Programming Course!",
    student_count: 20,
    duration: 0o3,
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
    icon: <ICStar />,
  },
  {
    title: "Awards",
    value: "10+",
    icon: <ICAward />,
  },
  {
    title: "Student in Campus",
    value: "5000+",
    icon: <ICUser />,
  },
  {
    title: "Programmes",
    value: "20+",
    icon: <ICTree />,
  },
];
// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // 1 slide for mobile
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Mobile breakpoint
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024, // Tablet breakpoint
      settings: {
        slidesToShow: 2, // 2 slides for tablets
      },
    },
    {
      breakpoint: 1360, // Desktop breakpoint
      settings: {
        slidesToShow: 3, // 3 slides for desktop
      },
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Wrapper>
      <div className="bg-dark w-full h-[74px] flex items-center text-white justify-center p-2">
        <div className="w-full max-w-[1360px] h-full flex justify-between items-center">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-start gap-5 sm:flex-row">
            <span className="flex gap-1">
              <b className="font-poppins">Call:</b>
              <p>+9412345678</p>
            </span>
            <div className="hidden sm:block h-full w-[1px] bg-neutral-300"></div>
            <span className="flex gap-1">
              <b className="font-poppins">Email:</b>
              <p>ipetsrilanka@gmail.com</p>
            </span>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex gap-4 sm:gap-8">
            <ICFacebook className="text-2xl text-white" />
            <ICTwitter className="text-2xl text-white" />
            <ICLinkedIn className="text-2xl text-white" />
            <ICYoutube className="text-2xl text-white" />
          </div>
        </div>
      </div>

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
      {/* Hero Section */}
      <div className="w-full h-screen">
        <div className="bg-[url('./assets/bgimage.jpeg')] h-full w-full bg-cover bg-center flex justify-center items-center px-4">
          <div className="max-w-[1360px] w-full">
            <div className="w-full md:w-[900px]">
              <div className="flex items-center">
                <ReactTyped
                  className="pl-2 font-bold text-white md:text-2xl sm:text-4xl"
                  strings={["BTB", "BTC", "SASS"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
                <h5 className="uppercase leading-10 pl-2 font-poppins relative text-white before:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-1  text-base md:text-lg">
                  An Empowered Sri Lanka IPET.
                </h5>
              </div>
              <h1 className="text-4xl leading-snug text-white uppercase md:text-7xl">
                <span className="block font-poppins ">Institute of</span>
                <span className="block font-poppins">
                  Professional Engineers
                </span>
                <span className="block font-poppins">and Technologists</span>
              </h1>
              <Button className="mt-4 hover:bg-blue-700 font-poppins">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 bg-white sm:px-0">
        <div className="text-[20px] mt-20 justify-center flex font-poppins">
          About us
        </div>
        <div className="text-[30px] flex justify-center font-bold text-normal font-poppins">
          Our Mission and Vision
        </div>

        <div className="gap-[30px] h-auto mx-auto grid md:grid-cols-2 items-start">
          <div className="flex justify-center w-full">
            <img
              className="w-[526px] h-[494px] mt-20 object-cover"
              src={group1}
              alt="/"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[#2543B1] text-left text-[30px] leading-[45px] font-poppins font-semibold mt-20">
              Why Choose Us?
            </p>
            <p className="px-4 mt-8 font-light text-justify font-poppins">
              At the Institute of Engineering and Technologistics, we are
              committed to shaping the future of innovation and technology. Our
              programs are designed to provide students with a solid foundation
              in both engineering and logistics, combining theoretical knowledge
              with practical experience.
            </p>
            <div className="grid grid-cols-2 mt-10">
              {features.map((items) => (
                <div key={items.title} className="flex items-center gap-5">
                  <div>
                    <img src={items.icon} alt="/" />
                  </div>
                  <div className="flex flex-col justify-start">
                    <h4 className="text-lg font-semibold text-left font-poppins">
                      {items.title}
                    </h4>
                    <p className="text-sm font-light text-left font-poppins">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#2D387D] w-[115px] mt-6 h-[44px] hover:bg-blue-700 px-5 py-1 text-white rounded-sm ml-2 font-poppins">
              Explore
            </button>
          </div>
        </div>

        <div className="bg-dark mt-16 flex justify-center items-center h-[279px] max-w-[1512px] overflow-x-auto">
          <div className="flex items-center gap-40 justify-center w-[1164px] h-[216px]">
            {statistics.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-around text-white"
              >
                <span className="flex justify-between">{item.icon}</span>
                <span className="flex justify-between font-poppins">
                  {item.title}
                </span>
                <span className="text-2xl font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
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
                    <div className="p-4 min-h-[150px]">
                      {" "}
                      {/* Adjust the min height */}
                      <h1 className="text-xl font-bold md:text-2xl line-clamp-2 font-poppins">
                        {card.title}
                      </h1>
                      <p className="mt-5 text-sm md:text-base line-clamp-3 font-poppins">
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

      <div className="flex justify-center px-4">
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
                      <h1 className="text-xl font-semibold font-poppins md:text-2xl text-normal">
                        {director.name}
                      </h1>
                      <p className="mt-5 text-sm md:text-base font-poppins">
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

          <div className="flex justify-center w-full mt-10 mb-20">
            <Button className="bg-[#2D387D] hover:bg-blue-700 text-white py-2 px-4 rounded font-poppins">
              All Courses
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}
export default App;
