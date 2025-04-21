import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#10110F] flex flex-col items-center justify-center z-50">
            {/* Dumbbell Animation */}
            <div className="relative w-24 h-24 mb-8">
                <div className="absolute left-0 w-10 h-10 bg-[#D6FD52] rounded-full animate-bounce"></div>
                <div className="absolute w-16 h-2 bg-white top-4 left-8"></div>
                <div className="absolute right-0 w-10 h-10 bg-[#D6FD52] rounded-full animate-bounce"></div>
            </div>
            
            {/* Loading Text */}
            <div className="text-white text-xl font-bold tracking-wider">
                SHIFT<span className="text-[#D6FD52]">FIT</span>
            </div>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                <div className="h-full bg-[#D6FD52] animate-progressBar"></div>
            </div>
        </div>
    );
};

export default Loader; 