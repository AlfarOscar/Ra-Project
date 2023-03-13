import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div clasName='sm:text-center pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-800'>About Us</p>
                </div>
                <div>

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                 <div className='sm:text-left text-2xl font-bold'>
                        <p>We are RA Construction</p> 
                        </div>
                        <div></div>
                        <div>
                            <p>We provide services such as 
                              <li> Tape and Bed
                                    
                                </li>
                                                                                                    </p>
                        </div>
                </div>
            </div>
            </div>
        </div>
    
  );
};

export default About