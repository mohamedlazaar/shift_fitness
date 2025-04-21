import React from 'react';
import aboutImage1 from '../assets/about_1.png';
import aboutImage2 from '../assets/about_2.png';
import dumbbell from '../assets/dumbbell.png';

const About: React.FC = () => {
    return (
        <section className='bg-[#F0F0F0] w-full py-20 md:py-32 relative overflow-hidden'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-20 gap-8 md:gap-16'>
                {/* Left side with images */}
                <div className='w-full md:w-[45%] relative'>
                    {/* Main image with polaroid effect */} 
                    <div className='relative   shadow-xl max-w-[400px] mx-auto'>
                        <div className='relative overflow-hidden z-5'>
                            <img 
                                src={aboutImage1} 
                                alt="Fitness training" 
                                className='w-full h-[500px] object-cover'
                            />
                        </div>
                    </div>
                    {/* Background decorative elements */}
                    {/* <div className='absolute -left-20 top-0 w-24 h-[80%] bg-[#10110F] -z-10 transform -rotate-12'></div> */}
                    <img 
                        src={aboutImage2} 
                        alt="decorative dumbbell" 
                        className='absolute md:block hidden -bottom-10 -left-10 w-[300px] h-[300px] z-2'
                    />
                </div>

                {/* Right side content */}
                <div className='w-full md:w-[50%] flex flex-col gap-6 md:gap-8'>
                    <h2 className='text-[#0B1301] text-3xl md:text-4xl lg:text-[52px] font-bold leading-tight max-w-[600px]'>
                        Your journey to achieving balanced health, wellness, and lifelong vitality
                    </h2>
                    <p className='text-[#0B1301] text-base md:text-lg leading-relaxed font-light max-w-[600px]'>
                        Transform your life with NutriFlow's personalized nutrition coaching, comprehensive digital resources, and premium wellness products. Join our vibrant community of health enthusiasts and embark on your journey towards a healthier, happier you. With our expert guidance and support, you'll have all the tools you need to make lasting changes and achieve your wellness goals every step of the way.
                    </p>
                    <button className='bg-[#0B1301] text-white w-fit px-8 py-3 text-base font-medium hover:bg-[#D6FD52] hover:text-[#0B1301] transition-all duration-300 mt-4'>
                        Read More
                    </button>
                    <img src={dumbbell} alt="dumbbell" className='w-[150px] h-[150px] object-contain self-end' />
                </div>
            </div>
        </section>
    );
};

export default About;