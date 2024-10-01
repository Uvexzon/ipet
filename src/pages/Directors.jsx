import React from 'react'
import Lakitha from '../assets/Directors/Lakitha.jpg'
import Nalaka from '../assets/Directors/Nalaka.jpg'
import Daham from '../assets/Directors/Daham.jpg'
import Prabaheran from '../assets/Directors/Prabaheran.jpg'
// import { Carousel } from 'flowbite-react'

const Directors = () => {
  // Array of Director Details
  const directors = [
    {
      id:1,
      src: Lakitha,
      desc: 'Mr.D.D.L Rathnaweera',
      desc1:'BEng(HONS)',
      brief1:'AM iPET',
      brief2:'Sri Lanka'
    },
    {
      id:2,
      src: Nalaka,
      desc:'Mr. Nalaka Prabath', 
      desc1:'BEng(UK)',
      brief1:'AM iPET',
      brief2:'Sri Lanka'
    },
    {
      id:3,
      src: Daham,
      desc:'Mr. Daham Hewage', 
      desc1:'BEng(HONS)',
      brief1:'Member iPET',
      brief2:'Sri Lanka'
    },
    {
      id:4,
      src: Prabaheran,
      desc:'Mr. S.R.R.K.Prabaheran',
      desc1:'BSc(HONS)',
      brief1:'Member iPET',
      brief2:'Sri lanka'
    },
    
  ]
  return (
    <div name="Directors" className="w-full h-auto">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen">
        <div className="pb-8">
          <p className="font-sans text-[#131313] text-center mt-10 text-sm font-semibold">Our Directors</p>
          <p className="text-[#452aa7] text-center text-2xl font-semibold py-6">Meet the Leadership Team</p>
        </div>
  
        {/* Main container */}
        <div className="border-1 border-[#c6c5c9] p-2 rounded-none shadow-lg">
          {/* Grid layout with breakpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-1 sm:px-0">
            {directors.map(({ id, src, desc, desc1, brief1, brief2 }) => (
              <div key={id} className="flex flex-col items-center justify-center bg-[#f5f5f5] rounded-none shadow-md w-full">
                {/* Each director's container */}
                <img src={src} alt="" className="w-56 h-56 object-cover" />
                <p className="text-[#452aa7] font-semibold mt-2">{desc}</p>
                <p className="text-[#452aa7] text-sm font-semibold">{desc1}</p>
                <p className="text-[#090909] font-semibold mt-3 text-xs">{brief1}</p>
                <p className="text-[#090909] font-semibold text-xs mb-10">{brief2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directors
