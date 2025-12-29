import React, { useContext } from "react";
import { FiHome } from "react-icons/fi";
import { FaRegNewspaper, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
   const {isSidebarOpen} = useContext(SidebarContext)
  return (
    <div className={`fixed ${isSidebarOpen? "" : "hidden"} z-50 left-0`}>
      <div className="flex  flex-col bg-[#1A1A1A] text-neutral-300 p-5 w-65 h-screen border-r-1 border-r-[#2b2b2b]">
        <div className="  gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <FiHome />
            <Link to={`/Home`} >Home</Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <FaRegNewspaper />
            <Link to={`/News Feed`} >News Feed</Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <AiOutlineThunderbolt />
            <Link to={`/Latest`} > Latest</Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <BiCommentDots />
            <Link to={`/Discussion`} >Discussion</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-3">
          <hr className="text-[#333333]" />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <MdOutlineWifiTethering />
            <Link to={`/WatchTogether`} > Watch Together</Link>
           
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <GiPerspectiveDiceSixFacesRandom />
            <Link to={`/Meta`} >Meta</Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-indigo-900/20 hover:text-indigo-500">
            <FaRegCalendarTimes />
            <Link to={`/Schedule`} >Schedule</Link>
          </div>
        </div>
        <div className="grow-1"></div>
      </div>
    </div>
  );
};

export default Sidebar;
