import React, { useRef, useState } from 'react'
import InfoBadges from './InfoBadges';

const Info = ({animeData ={},  islarge=true}) => {
      const [isExpanded, setIsExpanded] = useState(false);
      const [needsExpansion, setNeedsExpansion] = useState(true);
      const synopsisRef = useRef(null);
  return (
    <div>
        <div className="relative min-h-auto overflow-hidden">
        {/* Blurred background with gradient overlay */}
        <div
          style={{
            backgroundImage: `url(${
              animeData.images?.jpg?.large_image_url ||
              animeData.images?.jpg?.image_url
            })`,
            transform: "scale(1.1)",
          }}
          className="absolute inset-0 bg-cover bg-center  filter blur-md opacity-50"
        ></div>
        <div className="absolute inset-0 bg-[#2b0e70]/20 backdrop-brightness-100"></div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Poster image - left side on medium+ screens */}
            <div className={` ${islarge?' w-64 h-96' :'w-24 h-36' } rounded-lg overflow-hidden shadow-3xl flex-shrink-0`}>
              <img
                src={
                  animeData.images?.jpg?.large_image_url ||
                  animeData.images?.jpg?.image_url
                }
                alt={animeData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content - right side on medium+ screens */}
          <div className={`flex-1 ${islarge ? 'space-y-6 ': 'space-y-3'}text-center lg:text-left`}>
              {/* Title */}
              <h1 className={` ${islarge? 'text-4xl md:text-5xl' : 'text-xl'}  font-bold text-white drop-shadow-lg`}>
                {animeData.title}
              </h1>

              {/* Info badges */}
              
              <InfoBadges animeData={animeData} islarge={islarge}/>

              {/* Action buttons */}
              
              {islarge && <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-violet-400 hover:bg-violet-500 rounded-full shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Now
                </button>
              </div>}

              {/* Synopsis with expand/collapse */}
              {animeData.synopsis && (
                <div className="max-w-2xl">
                  <div
                    ref={synopsisRef}
                    className={`text-gray-300 ${islarge? '' : 'text-xs'} leading-relaxed transition-all duration-300 ${
                      !isExpanded && needsExpansion ? "line-clamp-3" : ""
                    }`}
                  >
                    {animeData.synopsis}
                  </div>
                  {needsExpansion && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              )}

              {/* share with your friends  */}
              <div className="border-l-4 border-l-violet-400  mt-4  text-white px-4 py-2 text-shadow-xl inline-block">
                <span className="font-bold text-violet-400 text-lg">
                  Share Anime{" "}
                </span>{" "}
                <br /> with your friends
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info