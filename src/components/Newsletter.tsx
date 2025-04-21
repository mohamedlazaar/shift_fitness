import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div className="bg-[#000000] p-8 ">
            <h2 className="lg:text-[250px] text-[30px] md:text-[220px] text-center ">SHIFFIT</h2>
            <form className="flex md:w-[40%] w-full mx-auto  gap-4">
                <input type="email" placeholder="Enter your email" className="p-3 placeholder:text-white/30  border-2 border-gray-600 w-[70%]" />
                <button type="submit" className="bg-[#D6FD52] text-[20px] text-[#141414] p-2 rounded-md w-[30%]">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
