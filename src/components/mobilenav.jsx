import React, { useState } from "react";
import logo from "../assets/LOGOS/LOGO-WHITW.PNG";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import  {SidebarContext} from "../context/sidebarContext.jsx";
import { useContext } from "react";

const Mobilenav = () => {
  const { toggleSidebar } = useContext(SidebarContext)
  const [searching, setSearching] = useState(false);
  const [query ,setquery]= useState("");
  const onSearchClick = () => {
    setSearching(!searching);
    setquery("");
  };
  return (
    <div className="md:hidden">
      {!searching && (
        <nav className="flex  items-center justify-between h-16 px-4 text-amber-50">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">
              <GiHamburgerMenu />
            </button>
            <a href="#">
              <img src={logo} alt="logo" className="w-42" />
            </a>
          </div>

          {/* Right: Search + Profile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSearchClick()}
              className="text-white text-2xl rounded-full p-2 bg-[#1a1a1a] hover:bg-[#111111] transition"
            >
              <CiSearch />
            </button>
            <button className="text-white text-2xl rounded-full p-2 bg-[#1a1a1a] hover:bg-[#111111] transition">
              <FaRegUser />
            </button>
          </div>
        </nav>
      )}
      {searching && (
        <div className="flex items-center gap-2  h-16 px-3 py-2 w-full max-w-md mx-auto ">
          <div className="bg-[#1a1a1a] rounded-full flex items-center gap-2 w-full px-3 py-2 ">
            {/* Search Icon */}
            <CiSearch className="text-white text-2xl flex-shrink-0" />

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault(); 
                onSearchClick();// prevent page reload
                console.log("Submitted!", query);
                
              }}
            >
              <input
              type="text"
              placeholder="Search a Show..."
              value= {query}
              onChange={e => setquery(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none placeholder-white text-white" />
            </form>
            
           
          </div>

          {/* Close Button */}
          <button
            onClick={() => onSearchClick()}
            className="text-white text-xl flex-shrink-0 hover:bg-[#111111] bg-[#1a1a1a] rounded-full  p-3 transition"
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default Mobilenav;
