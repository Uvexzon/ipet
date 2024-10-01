import React from 'react'
import Student_Desk from '../assets/students-desk-working-together (1) 1.png'
import Image2 from '../assets/Membership/image 2.png'
import Image3 from '../assets/Membership/image 3.png'
import Image from '../assets/Membership/image.png'


const Memberships = () => {

  const onButtonClick = () => {
    window.location.href = "/"; // Redirect to the homepage
  };

  const members =[
    {
      id:1,
      src:Image2,
      name:'Student Member - S M iPET',
      desc: 'After completing school and following engineering / technology diploma courses . . .',
    },
    {
      id:2,
      src:Image3,
      name:'Technical Member - T. M iPET',
      desc:'Obtained the certificate of proficiency in the field relevant to the subject area not . . .'
    },
    {
      id:3,
      src:Image,
      name:'Graduate Engineer - G Eng. iPET',
      desc:'After completing a Bachelor of Science in Engineering OR Bachelor of Engineering or . . .'
    }
  ]
 return (
  <div name="Memberships" className="w-full h-auto bg-[#E9ECF7]">
    <div
      className="bg-[#E9ECF7] max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen"
    >
      <div className="pb-8">
        <p className="font-sans text-[#131313] text-center mt-10 text-sm">Memberships</p>
        <p className="text-[#452aa7] text-center text-2xl font-semibold py-6">What we offer for your future</p>
      </div>

      <div className="w-full max-w-full p-4 sm:p-2">
  <img src={Student_Desk} alt="Student_Group" className="w-full h-auto object-cover" />
</div>

{/* Main container */}
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center place-items-center">
  {members.map(({ id, src, name, desc }) => (
    <div key={id} className="bg-white flex flex-col items-center justify-center rounded-none shadow-md m-auto w-full sm:w-72 relative mt-8 sm:-mt-36">
      {/* Each card container */}
      <img src={src} alt={name} className="w-auto h-auto object-cover mt-4" />
      <p className="text-[#2543B1] font-semibold mt-2">{name}</p>
      <p className="text-[#777777] text-sm font-normal mt-2 p-4 text-center">{desc}</p>
      <button
        onClick={onButtonClick}
        className="text-black px-4 py-1 mb-10 text-xs sm:text-base mx-auto flex items-center hover:scale-105 duration-200 font-semibold"
      >
        Explore More +
      </button>
    </div>
  ))}
</div>

      <div className="mt-3">
        <button
          onClick={onButtonClick}
          className="bg-[#2D387D] mt-6 rounded-md px-6 py-2 my-auto mx-auto flex items-center hover:scale-105 duration-200 text-sm font-normal poppins-thin text-white"
        >
          All Plans
        </button>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
);
}

export default Memberships