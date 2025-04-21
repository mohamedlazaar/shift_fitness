import Marquee from 'react-fast-marquee';

interface BannerItemProps {
  text: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ text }) => (
  <div className="flex items-center gap-4 sm:gap-8 md:gap-20 overflow-y-hidden">
    <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold text-center uppercase whitespace-nowrap">{text}</span>
    <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] text-center mx-4 sm:mx-8 md:mx-20">★</span>
  </div>
);

const ScrollingBanner: React.FC = () => {
  const bannerItems = [
    "STRONG",
    "MAKE LIFE HEALTHY",
    "STAY STRONG",
    "REBUILD YOUR BODY"
  ];

  return (
    <div className="bg-[#D6FD52] py-2 sm:py-3 md:py-4">
      <Marquee
        speed={40}
        gradient={false}
        className="text-black"
      >
        {[...bannerItems, ...bannerItems].map((text, index) => (
          <BannerItem key={index} text={text} />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingBanner;