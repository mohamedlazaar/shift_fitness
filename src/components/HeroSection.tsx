import React from 'react';
import heroImage from '../assets/hero_img.png';

const HeroSection: React.FC = () => {
    return (
        <section className='bg-[#10110F]  flex  '>
            <div className='h-full flex flex-col-reverse md:flex-row justify-between px-4 sm:px-6 md:px-10 lg:px-20 items-center '>
                <div className='flex flex-col gap-3 md:gap-8 w-full md:w-[50%] lg:w-[45%] py-8 md:py-0'>
                    <h1 className='text-[#ffffff] text-[40px] sm:text-[45px] md:text-[70px] lg:text-[90px] leading-tight md:leading-none font-medium'>
                        Your Journey
                        to Health and <span className='text-[#D6FD52]'>Wellness</span>
                    </h1>
                    <p className='text-[#ffffff] text-[16px] sm:text-[18px] md:text-[20px] font-extralight max-w-[600px]'>
                        Our state-of-art facility offers a comprehensive range of fitness services, including strength training, cardio conditioning, mobility exercises.
                    </p>
                    <button className='bg-[#ffffff] mt-4 mb-8 md:mt-8 text-[#10110F] w-full sm:w-[215px] h-[45px] sm:h-[55px] text-[20px] sm:text-[26px] font-medium cursor-pointer hover:bg-[#D6FD52] hover:text-white transition-all duration-300'>
                        Contact US
                    </button>
                </div>
                <div className='w-full md:w-[50%] h-[350px] sm:h-[300px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden'>
                    <img 
                        src={heroImage} 
                        alt="hero" 
                        className='w-full h-full object-contain object-center'
                    />
                </div>                
            </div>

        </section>
    );
};

export default HeroSection;