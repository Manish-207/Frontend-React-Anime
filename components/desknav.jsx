import React from 'react'
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FaTelegramPlane, FaInstagram, FaRegUser } from "react-icons/fa";

const Desknav = () => {
  return (
    <div>
        <nav className="hidden md:flex  items-center justify-between h-20 mx-auto px-8 text-amber-50">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src={logo} alt="logo" className="w-36 md:w-40" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-[500px] min-w-0">
          <div className="flex items-center gap-2 p-2 px-3 rounded-full border border-neutral-500 hover:bg-[#3a3d4a] min-w-0 ">
            <CiSearch className="text-white text-2xl flex-shrink-0" />
            <input
              type="text"
              placeholder="Search a Show..."
              className="flex-1 bg-transparent border-0 outline-none placeholder-white min-w-0 w-[100px] sm:w-[150px] md:w-[240px] lg:max-w-[400px]"
            />
          </div>
        </div>

        {/* Social & User Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 border-r border-neutral-600 pr-6">
            <div className="flex items-center gap-2 rounded-full px-4 py-2.5 bg-[#393c49] hover:bg-[#4a4d5a] transition">
              <FaTelegramPlane className="text-xl" />
              <p className="text-sm">Join Telegram</p>
            </div>
            <div className="flex items-center gap-2 rounded-full p-2.5 bg-[#393c49] hover:bg-[#4a4d5a] transition">
              <FaInstagram className="text-xl" />
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full p-2.5 bg-[#393c49] hover:bg-[#4a4d5a] transition">
            <FaRegUser className="text-xl text-neutral-200" />
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Desknav