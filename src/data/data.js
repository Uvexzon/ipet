import { ICSearch, ICStar, Logo, LogoText } from "../assets";
import { ICAward } from "../assets";
import { ICUser } from "../assets";
import { ICTree } from "../assets";

import director1 from "../assets/Images/director1.jpeg";
import director2 from "../assets/images/director2.jpeg";
import director3 from "../assets/images/director3.jpeg";
import director4 from "../assets/images/director4.jpeg";

import frame31 from "../assets/Frame 31.svg";
import frame30 from "../assets/Frame 30.svg";
import frame33 from "../assets/Frame 33.svg";
import frame34 from "../assets/Frame 34.svg";
import frame35 from "../assets/Frame 35.svg";
import frame36 from "../assets/Frame 36.svg";
import frame17 from "../assets/Frame 17.svg";
import frame32 from "../assets/Frame 32.svg";
import frame19 from "../assets/Frame 19.svg";
import frame20 from "../assets/Frame 20.svg";
import frame21 from "../assets/Frame 21.svg";
import frame22 from "../assets/Frame 22.svg"

import image1 from "../assets/Images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";



// Exporting the `features` array
export const features = [
  {
    title: "Facilities  ",
    description: "Computer Facilities",
    icon: frame17,
  },
  {
    title: "Experienced Faculty",
    description: "Learn from experts",
    icon: frame20,
  },
  {
    title: "Oracle Academy",
    description: "Partnership",
    icon: frame32,
  },
  {
    title: "Cisco Academy",
    description: "Partnership",
    icon:frame21,
  },
  {
    title: "Online Skills",
    description: "Career Support",
    icon: frame19,
  },
  {
    title: "Industry-Relevant",
    description: "Career Support",
    icon: frame22,
  },
];

// Exporting the `statistics` array with component references for icons
export const statistics = [
  {
    title: "Years of Excellence",
    value: "34+",
    icon: ICStar,  // Pass the component reference
  },
  {
    title: "Awards",
    value: "10+",
    icon: ICAward,
  },
  {
    title: "Student in Campus",
    value: "5000+",
    icon: ICUser,
  },
  {
    title: "Programmes",
    value: "20+",
    icon: ICTree,
  },
];

export const settings = {
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
export const cards = [
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

export const directors = [
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

