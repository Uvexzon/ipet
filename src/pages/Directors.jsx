import React from 'react'
import DrNadeesh from '../assets/DrNadeesh.png'
import DrAdhi from '../assets/DrAdhi.png'
import MsMishel from '../assets/Ms Mishel.png'
import MsTrarindi from '../assets/Ms Tharindi.png'


const Directors = () => {
  // Array of Director Details
  const directors = [
    {
      id:1,
      src: DrNadeesh,
      desc: 'HON. DR. NADEESH',
      desc1:'PERERA',
      brief1:'CEO at Training Athority',
      brief2:'Sri Lanka'
    },
    {
      id:2,
      src: MsTrarindi,
      desc:'MS THARINDI GAMAGE', 
      desc1:'SILVA',
      brief1:'Director at Digital',
      brief2:'Marketing'
    },
    {
      id:3,
      src: DrAdhi,
      desc:'HON. DR. ADHI', 
      desc1:'PERERA',
      brief1:'CEO at Training Athority',
      brief2:'Sri Lanka'
    },
    {
      id:4,
      src: MsMishel,
      desc:'MS MISHEL DE',
      desc1:'GAMAGE',
      brief1:'IT Systems Architecture',
      brief2:'Sri lanka'
    },
    
  ]
  return (
    <div name='Directors' className='w-full h-auto '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen'>
        <div className='pb-8'>
          <p className='font-sans text-[#131313] text-center mt-10 text-sm font-semibold'>Our Directors</p>
          <p className='text-[#452aa7] text-center text-2xl font-semibold py-6'>Meet the Leadership Team</p>
        </div>

         {/* Main container */}
        <div className='border-1 border-[#c6c5c9] p-2 rounded-none shadow-lg p-8'>
        {/* Grid layout that switches from 1 column on mobile to 4 columns on larger screens */}
          {/* <div className='grid sm:grid-cols-1 md:grid-cols- gap-x-2 px-1 sm:px-0'> */}
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 px-1 sm:px-0'>  
          {
            // directors.map(({id, src, desc}) => (
            //   <div key={id} className='inline-flex items-center overflow-hidden mr-4'>
            //   <img src={src} alt="" className='w-full h-40 object-cover px-10' />
            //   <div className='flex items-center justify-center py-2 px-1'>
            //     <p className='font-xl font-thin'>{desc}</p>
            //   </div>
            // </div>
            // ))
            directors.map(({ id, src, desc, desc1, brief1, brief2 }) => (
              <div key={id} className="flex flex-col items-center justify-center bg-[#f5f5f5]  rounded-none shadow-md">
                {/* Each directors container */}
                <img src={src} alt="" className="w-56 h-56 object-cover " />
                <p className="text-[#452aa7]  font-semibold mt-2">{desc}</p>
                <p className="text-[#452aa7]  font-semibold ">{desc1}</p>
                <p className="text-[#090909]  font-semibold mt-3 text-xs">{brief1}</p>
                <p className="text-[#090909]  font-semibold text-xs mb-10">{brief2}</p>
              </div>
            ))
          }
        </div>    
        </div>

      </div>
    </div> 
  )
}

export default Directors
