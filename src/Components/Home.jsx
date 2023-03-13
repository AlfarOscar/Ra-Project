import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#031249]'>
        <div className='bg-house-img w-full h-screen bg-no-repeat bg-cover'>

        
        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-800'>Welcome to </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#031249]'>RA Construction Services</h1>
            <p className='text-[#f7f8fe]'>We are a construction company based in Dallas,Texas, that focuses on your satisfaction. With our skilled team, we are able to do
                anything from a small home renovation to your companies lounge.
            </p>
            <div>
             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-800 hover:border-purple-800'> View Gallery
             <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-4' />

             </span>
             </button>
            </div>
    </div>
    </div>
    </div>
  )
}
export default Home