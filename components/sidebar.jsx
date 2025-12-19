import React from "react";
import { FiHome } from "react-icons/fi";
import { FaRegNewspaper, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 z-40">
      <div className="flex  flex-col bg-[#0e0a27] text-neutral-300 p-5 w-65 h-screen border-r-1 border-r-[#2c2c36]">
        <div className="  gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <FiHome />
            <a href="#">Home</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <FaRegNewspaper />
            <Link to={`/uc`} ><a href="">News Feed</a></Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <AiOutlineThunderbolt />
            <a href="#">Latest</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <BiCommentDots />
            <Link to={`/uc`} ><a href="">Discussion</a></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-3">
          <hr className="text-[#363644]" />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <MdOutlineWifiTethering />
            <Link to={`/uc`} > <a href="#">Watch Together</a></Link>
           
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <GiPerspectiveDiceSixFacesRandom />
            <Link to={`/uc`} ><a href="">Meta</a></Link>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#221749] hover:text-[#c09ffadd]">
            <FaRegCalendarTimes />
            <Link to={`/uc`} ><a href="">Schedule</a></Link>
          </div>
        </div>
        <div className="grow-1"></div>
      </div>
    </div>
  );
};

export default Sidebar;
