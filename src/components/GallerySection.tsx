import React from 'react';
import gallery1 from '../assets/gallery/gallery_1.png';
import gallery2 from '../assets/gallery/gallery_2.png';
import gallery3 from '../assets/gallery/gallery_3.png';
import gallery4 from '../assets/gallery/gallery_4.png';
import gallery5 from '../assets/gallery/gallery_5.png';
import TitleSection from './TitleSection';

const GallerySection: React.FC = () => {
    return (
        <section className='bg-[#FFFFFF] flex flex-col gap-16 w-full py-16 md:py-24'>
        <TitleSection title='Explore Our' subtitle='Gym Atmosphere' titleColor='text-[#0B1301]' />
        <div className=' w-full '>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                    {/* First Column */}
                    <div className='space-y-4'>
                        <div className='h-[265px] overflow-hidden rounded-lg shadow-lg'>
                            <img 
                                src={gallery1} 
                                alt="Dumbbells rack" 
                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                            />
                        </div>
                        <div className='h-[320px] overflow-hidden rounded-lg shadow-lg'>
                            <img 
                                src={gallery2} 
                                alt="Person working out" 
                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                            />
                        </div>
                    </div>

                    {/* Middle Column - Larger Image */}
                    <div className='h-[600px] overflow-hidden rounded-lg shadow-lg'>
                        <img 
                            src={gallery3} 
                            alt="Woman in red workout attire" 
                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                        />
                    </div>

                    {/* Third Column */}
                    <div className='space-y-4'>
                        <div className='h-[300px] overflow-hidden rounded-lg shadow-lg'>
                            <img 
                                src={gallery4} 
                                alt="Person doing exercise" 
                                className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                            />
                        </div>
                        <div className='space-y-4'>
                            <div className='h-[275px] overflow-hidden rounded-lg shadow-lg'>
                                <img 
                                    src={gallery5} 
                                    alt="Gym equipment" 
                                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    );
};

export default GallerySection; 