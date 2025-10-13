import React from "react";
import { FiHome } from "react-icons/fi";
import { FaRegNewspaper, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="fixed left-0 z-40">
      <div className="flex  flex-col bg-[#1d2028] text-neutral-300 p-5 w-65 h-screen border-r-1 border-r-[#2c2c36]">
        <div className="  gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <FiHome />
            <a href="#">Home</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <FaRegNewspaper />
            <a href="#">News Feed</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <AiOutlineThunderbolt />
            <a href="#">Latest</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <BiCommentDots />
            <a href="#">Discussion</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-3">
          <hr className="text-[#363644]" />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <MdOutlineWifiTethering />
            <a href="#">Watch Together</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <GiPerspectiveDiceSixFacesRandom />
            <a href="#">Meta</a>
          </div>
          <div className="flex gap-5 text-[1.1ren] items-center p-2.5 rounded-md w-55 hover:bg-[#171920] hover:text-[#c09ffadd]">
            <FaRegCalendarTimes />
            <a href="#">Schedule</a>
          </div>
        </div>
        <div className="grow-1"></div>
      </div>
    </div>
  );
};

export default Sidebar;
