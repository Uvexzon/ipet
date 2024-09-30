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
      name:'Youth Club',
      desc: 'Take control of your future in the rapidly growing with Youth Club in Sri Lanka',
    },
    {
      id:2,
      src:Image3,
      name:'FRIC',
      desc:'Take control of your future in the rapidly growing with Youth Club in Sri Lanka'
    },
    {
      id:3,
      src:Image,
      name:'Tech Innovators Hub',
      desc:'Take control of your future in the rapidly growing with Youth Club in Sri Lanka'
    }
  ]
  return (
    <div name='Memberships' className='w-full h-auto '>
      <div className='bg-[#E9ECF7] max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen'>
        <div className='pb-8'>
          <p className='font-sans text-[#131313] text-center mt-10 text-sm'>Memberships</p>
          <p className='text-[#452aa7] text-center text-2xl font-semibold py-6'>What we offer for your future</p>
        </div>

        <div className="w-full max-w-full p-4 sm:p-2"> 
          <img src={Student_Desk} alt="Student_Group" className="w-full h-auto object-cover flex items-center justify-center" />
        </div>
        {/* Main container */}
        <div className='border-1 border-[#c6c5c9] p-6 rounded-none shadow-lg flex items-center justify-center'>
          {/* Grid Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 w-full max-w-screen-lg justify-center'> 
          {
            members.map(({id, src, name, desc}) => (
             < div key={id} className="bg-[#ffffff] flex flex-col items-center justify-center -mt-44 rounded-none shadow-md w-64">
                {/* Each card container */}
                <img src={src} alt="" className="w-auto h-auto object-cover mt-4 m-4 " />
                <p className="text-[#2543B1]  font-semibold mt-2 ">{name}</p>
                <p className="text-[#777777]  text-sm font-normal mt-2 p-8 text-center ">{desc}</p>
                <button onClick={onButtonClick} className='text-black px-1 py-1 mt-4 mb-6 text-xs mx-auto flex items-center hover:scale-105 duration-200 font-semibold poppins-thin'>Explore More +  </button>
              </div>
            )) 
          }
        </div>
        </div>
        <button onClick={onButtonClick} className='bg-[#2D387D] rounded-md px-1 py-1 my-auto mx-auto flex items-center hover:scale-105 duration-200 font-semibold poppins-thin text-white'>All Plans  </button>

      </div>
    </div>
  )
}

export default Memberships