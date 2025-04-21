import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#000000] text-white py-8">
            <div className="w-[90%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 border-b-[1px] border-white pb-8 ">
                    <div className="space-y-4">
                        <h3 className="text-[24px] font-bold  font-sans">Company</h3>
                        <ul className="space-y-2">
                            <li className='font-light text-[20px] font-sans'><a href="#">Instrument</a></li>
                            <li className='font-light text-[20px] font-sans'><a href="#">Events</a></li>
                            <li className='font-light text-[20px] font-sans'><a href="#">All Members</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col ">
                        <h3 className="text-[24px] font-bold font-sans">About Us</h3>
                        <ul className="space-y-2">
                            <li className='font-light text-[20px] font-sans'><a href="#">Our Team</a></li>
                            <li className='font-light text-[20px] font-sans'><a href="#">Career</a></li>
                            <li className='font-light text-[20px] font-sans'><a href="#">Work Culture</a></li>
                            <li className='font-light text-[20px] font-sans'><a href="#">Daily Plan</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col  ">
                        <h3 className="text-[24px] font-bold text-left font-sans">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className='font-light text-[20px]  font-sans'>256B West Site House Main Town, New York</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-8'>
                    <p className='text-[18px] text-gray-400 font-light font-sans'>© 2025 NutriFlow. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <div className='bg-white p-2  rounded-full '>
                            <FaFacebookF className='text-[20px] text-[#000]' />
                        </div>
                        <div className='bg-white p-2 rounded-full'>
                            <FaInstagram className='text-[20px] text-[#000]' />
                        </div>
                        <div className='bg-white p-2 rounded-full'>
                            <FaLinkedinIn className='text-[20px] text-[#000]' />
                        </div>
                        <div className='bg-white p-2 rounded-full'>
                            <FaWhatsapp className='text-[20px] text-[#000]' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

