import React, {useState} from 'react';
import logo from "../assets/SHIFTFIT.png"
import { MdClose } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ['Home', 'Services', 'Doctors', 'About us'];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <header className='relative  bg-[#10110F] w-full   h-[15vh] flex items-start md:items-center'>
        <div className='bg-[#252723] w-[100%] md:w-[90%] mx-auto flex justify-between items-center p-4 '>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="logo" className='w-[100px] h-[30px] md:w-[200px] md:h-[35px] object-fill' />
                {/* <h1 className='text-white text-2xl font-bold'>SHIFTFIT</h1> */}
            </div>
            <nav>
                <ul className='hidden md:flex items-center gap-5'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='text-[#D6FD52] text-[18px] font-extralight cursor-pointer hover:text-[#fff] transition-all duration-300'>{item}</li>
                    ))}
                </ul>
            </nav>
            <button className='hidden md:block bg-[#D6FD52] text-[#10110F] w-[100px] h-[35px] text-[16px] font-bold cursor-pointer hover:bg-[#D6FD52] hover:text-white transition-all duration-300'
            >Contact US</button>
             <button 
                    className="flex md:hidden cursor-pointer p-2"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <MdClose className="text-[24px]" />
                    ) : (
                        <CiMenuBurger className="text-[24px]" />
                    )}
                </button>
        </div>
        {isMenuOpen && (
            <div className='absolute bottom-0 translate-y-[100%] left-0 h-[90vh] w-full  bg-[#10110F]'>
                <ul className='flex flex-col items-center justify-center gap-10'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='text-[#D6FD52] text-[20px] font-extralight cursor-pointer hover:text-[#fff] transition-all duration-300'>{item}</li>
                    ))}
                     <button className=' bg-[#D6FD52] text-[#10110F] w-[100px] h-[25px] text-[18px] font-medium cursor-pointer hover:bg-[#D6FD52] hover:text-white transition-all duration-300'
            >Contact US</button>
                </ul>
            </div>
        )}
    </header>
  )
}

export default Header;