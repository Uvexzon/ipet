import React from 'react'
import News1 from '../assets/NewsImages/News1.png'
import News2 from '../assets/NewsImages/News2.png'
import News3 from '../assets/NewsImages/News3.png'
import News4 from '../assets/NewsImages/News4.png'
import Group1 from '../assets/NewsImages/Group 1.png'
import Group2 from '../assets/NewsImages/Group 2.png'
import Group3 from '../assets/NewsImages/Group 3.png'

const News = () => {

    const onButtonClick = () => {
        window.location.href = "/"; // Redirect to the homepage
    };

    return (
        <div name='NewsAndEvents' className='w-full h-auto '>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen'>
            <div className='pb-8'>
              <p className='font-sans text-[#131313] text-center mt-10 text-sm'>News and Events</p>
              <p className='text-[#452aa7] text-center text-2xl font-semibold py-6'>New Research and Innovation</p>
            </div>

            <div className='flex mt-4'>
                 {/* left column */}
                
                
                    <div className='w-full md:w-3/5 md:pr-2 mb-6 md:mb-0'>
                    <p className=' poppins-thin text-lg font-semibold  text-[#452aa7]' >Latest News</p>
                     {/* Main container */}
                    <div className='border-1 border-[#c6c5c9] p-2 rounded-none shadow-lg'>
                    <div className='flex flex-col'></div>
                    <div className='h-max border-l border-gray-200 mt-2'>
                        
                        <div className="bg-[#E9ECF7] p-6 m-4 rounded-none shadow-lg w-full max-w-fit flex flex-col md:flex-row items-center">
                        <img src={News1} alt="News1" className="w-32 h-auto object-cover"/>

                        {/* Description container to align the text on the right */}
                        <div className="ml-6 flex flex-col justify-start">
                                <p className=' text-[#0f0f0f] text-sm font-semibold poppins-thin'>IPET hosts International Tech Symposium 2024</p>
                                <p className='text-[#777777] font-normal text-sm flex justify-between poppins-thin'>September 25 2024</p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>The symposium, focused on Artificial Intelligence and Machine Learning, featured renowned speakers from top global tech firms and research institutions.</p>
                            </div>
                        </div > 
                        <div className="bg-[#E9ECF7] p-6 m-4 rounded-none shadow-lg w-full max-w-fit flex flex-col md:flex-row items-center">
                            <img src={News2} alt="News2" className="w-32 h-auto object-cover"/>

                            <div className="ml-6 flex flex-col justify-start">
                                <p className=' text-[#0f0f0f] font-semibold text-sm poppins-thin'>Ranked top 5 institutes for Engineering Studies</p>
                                <p className='text-[#777777] font-normal text-sm flex justify-between poppins-thin'>July 20 2024</p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>The symposium, focused on artificial intelligence and Machine Learning, featured renowned speakers from top global tech firms and research institutions. </p>
                            </div>
                            
                        </div>

                        <div className="bg-[#E9ECF7] p-6 m-4 rounded-none shadow-lg w-full max-w-fit flex flex-col md:flex-row items-center">
                            <img src={News3} alt="News3" className="w-32 h-auto object-cover"/> 
                            <div className="ml-6 flex flex-col justify-start">
                                <p className='text-[#0f0f0f] text-sm font-semibold poppins-thin'>50+ Companies for Internship Placements</p>
                                <p className='text-[#777777] font-normal text-sm flex justify-between poppins-thin'>July 20 2024 </p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>The symposium, focused on artificial intelligence and Machine Learning, featured renowned speakers from top global tech firms and research institutions.</p>
                            </div>
                            
                        </div>

                        <div className="bg-[#E9ECF7] p-6 m-4 rounded-none shadow-lg w-full max-w-fit flex flex-col md:flex-row items-center">
                            <img src={News4} alt="News4" className="w-32 h-auto object-cover"/> 
                            <div className="ml-6 flex flex-col justify-start">
                                <p className='text-[#0f0f0f] text-sm font-semibold poppins-thin'>Online Learning Platform for Remote Students</p>
                                <p className='text-[#777777] font-normal text-sm flex justify-between poppins-thin'>July 20 2024 </p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>The symposium, focused on artificial intelligence and Machine Learning, featured renowned speakers from top global tech firms and research institutions.</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>

                {/* right column */}
                <div className='w-full md:w-2/5 md:pl-4'>
                <p className='poppins-thin text-lg font-semibold  text-[#452aa7]' >Upcoming Conferences</p>
                <div className='flex flex-col'></div>
                <div className='h-max border-l border-gray-200 mt-7'>
                    
                        <div className="p-4 md:p-6 m-4 rounded-none shadow-lg w-full  flex flex-col md:flex-row items-center">
                            <img src={Group1} alt="Group1" className="w-32 h-auto object-cover"/> 
                            <div className="ml-6 flex flex-col justify-start w-full">
                                <p className='text-[#0f0f0f] text-sm font-semibold poppins-thin'>AIDS 2024</p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>International Conference on Artificial Intelligence and Data Science </p>
                                
                            </div>
                            
                        </div>

                        <div className="p-4 md:p-6 m-4 rounded-none shadow-lg w-full  flex flex-col md:flex-row items-center">
                            <img src={Group2} alt="Group2" className="w-32 h-auto object-cover"/> 
                            <div className="ml-6 flex flex-col justify-start w-full">
                                <p className='text-[#0f0f0f] text-sm font-semibold poppins-thin'>GISTC 2024</p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>Global Innovation in Sustainable Technology Conference. </p>
                                
                            </div>
                            
                        </div>

                        <div className="p-4 md:p-6 m-4 rounded-none shadow-lg w-full  flex flex-col md:flex-row items-center">
                            <img src={Group3} alt="Group3" className="w-32 h-auto object-cover"/> 
                            <div className="ml-6 flex flex-col justify-start w-full">
                                <p className='text-[#0f0f0f] text-sm font-semibold poppins-thin'>ISCB 2024</p>
                                <p className='text-[#777777] font-normal text-xs flex justify-between poppins-thin'>International Symposium on Cybersecurity and Blockchain </p>
                                
                            </div>

                        </div>
                </div>
                </div>
            </div>
                        
            <button onClick={onButtonClick} className='bg-[#2D387D] rounded-md px-6 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-200 font-semibold poppins-thin text-white'>All Events  </button>

          </div>
        </div>
      )
}

export default News