import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaClosedCaptioning, FaMicrophone } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Poster = ({
  image,
  title,
  rating,
  subs,
  dubs,
  year,
  duration,
  malid,
}) => {
  return (
    <div className="w-full max-w-60 bg-transparent text-white rounded-sm overflow-hidden ">
      {/* === Image Section === */}
      <div className="relative aspect-[2/3]  rounded-sm overflow-hidden group hover:scale-[1.02] transition-all duration-300">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 group-hover:blur-sm text-yellow-400 text-xs px-1 py-1 rounded-md flex items-center gap-1">
          <AiFillStar className="text-xs" />
          {rating}
        </div>

        {/* Sub & Dub Badges */}
        <div className="absolute bottom-2 left-2 group-hover:blur-sm flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-md backdrop-blur-xs">
            <FaClosedCaptioning className="text-[#00e6e6]" />
            <span>{subs}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-md backdrop-blur-xs">
            <FaMicrophone className="text-[#ff8c00]" />
            <span>{dubs}</span>
          </div>
        </div>
        

        {/* Watch Now Button (on hover) */}
        <Link to={`/anime/${malid}`}>
          <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-indigo-600/70  hover:bg-indigo-700/70  rounded-full text-sm font-semibold shadow-lg">
              Learn more..
            </span>
          </button>
        </Link>
      </div>

      {/* === Text Section === */}
      <div className="p-2 mt-1">
        <h3 className="text-base font-semibold line-clamp-1">
          {title}
        </h3>
        <p className="text-xs opacity-70 mt-2">
          {year} <GoDotFill className="inline" /> {duration}
        </p>
      </div>
    </div>
  );
};

export default Poster;
