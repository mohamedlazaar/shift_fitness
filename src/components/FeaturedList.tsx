import React from 'react';
import TitleSection from './TitleSection';
interface FeaturedListProps {
    title: string;
    subtitle: string;
    titleColor: string;
    bgColor: string;
    children: any;
}

const FeaturedList: React.FC<FeaturedListProps> = ({ title, subtitle, titleColor, bgColor, children }) => {
    return (
        <div className={`${bgColor} w-full flex flex-col gap-6  py-20 `}>
            <TitleSection title={title} subtitle={subtitle} titleColor={titleColor}  />
            <div className='flex flex-wrap   justify-around w-full md:w-[70%] mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default FeaturedList;