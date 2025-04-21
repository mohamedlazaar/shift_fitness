import React, { useState, useRef } from 'react';
import playIcon from '../assets/play-icon.svg';
import thumbnail from  "../assets/video_thumb.png"
import TitleSection from './TitleSection';
import { FaPlay } from "react-icons/fa";


const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className='bg-[#F0F0F0] w-full flex flex-col pt-16 md:pt-24'>
            <TitleSection title='Discover What Makes Our' subtitle='Gym Different' titleColor='text-[#141414]' />
            <div className='w-full'>
                <div className='relative w-full lg:h-[800px] h-[400px] overflow-hidden group'>
                    {/* Video */}
                    <video
                        ref={videoRef}
                        className='w-full aspect-video object-contain rounded-2xl'
                        playsInline
                    >
                        <source src="/path-to-your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Thumbnail Overlay */}
                    <div 
                        className={`absolute inset-0 transition-opacity duration-500
                            ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <div className='relative w-full h-full'>
                            {/* Thumbnail Image */}
                            <img 
                                src={thumbnail} 
                                alt="Women exercising on treadmills" 
                                className='w-full h-full object-cover'
                            />
                            {/* Warm Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
                        </div>
                    </div>

                    {/* Play Button */}
                    <div 
                        className={`absolute inset-0 flex items-center justify-center 
                            ${isPlaying ? 'opacity-0' : 'opacity-100'} 
                            group-hover:opacity-100 transition-opacity duration-300`}
                    >
                        <button
                            onClick={handlePlayPause}
                            className='w-24 h-24 md:w-30 md:h-30 flex items-center justify-center rounded-full
                                bg-white/50 backdrop-blur-sm border-2 border-white
                                hover:bg-white/40 hover:scale-110 transition-all duration-300
                                group/button ' 
                            aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                            {isPlaying ? (
                                <div className='w-10 h-10 bg-white rounded-sm '></div>
                            ) : (
                                <FaPlay className='text-green-700 ml-2 text-5xl' />
                            )}
                        </button>
                    </div>
                </div>

          
            </div>
        </section>
    );
};

export default VideoSection; 