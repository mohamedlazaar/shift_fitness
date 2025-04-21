import React from 'react';

interface TitleSectionProps {
    title: string;
    subtitle: string;
    titleColor: string;
}
const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, titleColor }) => {
    return (
        <div className=' w-full flex flex-col items-center justify-center '>
            <h1 className={`${titleColor} md:text-[40px] text-[30px] text-center font-bold`}>
                {title}
            </h1>
            <h1 className={`${titleColor} md:text-[80px] text-[50px] text-center font-bold`}>
                {subtitle}
            </h1>
        </div>
    );
};

export default TitleSection;