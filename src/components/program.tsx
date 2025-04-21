import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


interface ProgramProps {
    title: string;
    image: string;
    showButtomLine: boolean;
    titleColor: string;
}

const Program: React.FC<ProgramProps> = ({ title, image, showButtomLine, titleColor }) => {
    return (
        <div className='w-[250px] md:w-[350px] h-[500px] flex flex-col gap-5  relative'>
            <img src={image} alt={title} className='w-full h-[80%] object-cover' />
            {showButtomLine && (
                <div className='content-[" "] absolute bg-[#D6FD52] w-full h-[5px] bottom-25 left-0 '></div>
            )}
            <a href="#" className='absolute bottom-30 right-3 w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                <FaArrowRightLong className='text-[#fff] text-[40px] font-bold' />
            </a>
            <h1 className={`${titleColor} text-[26px] leading-7 font-bold`}>{title}</h1>
           
        </div>
    );
};      

export default Program;