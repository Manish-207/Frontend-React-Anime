import React, { useState, useEffect, useRef } from "react";

const SidebarEpisodeChooser = ({
  onNext,
  onPrev,
  episodes = [],
  currentEp,
  latestEp,
  onSelectEpisode,
}) => {
const [episodeData, setEpisodeData]= useState({});
 useEffect(()=> {
   const fetchAnime = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime/20/episodes');
        const data = await response.json();
        console.log(data); // check structure
        setEpisodeData(data.data || []); // safely handle empty data
      } catch (err) {
        setError("Failed to fetch anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();

  }
  ,[])


  return (
    <aside
      ref={sidebarRef}
      className="  flex flex-col text-gray-200  bg-[#1d2028]/90 backdrop-blur-sm  overflow-y-auto h-full"
    >
      {/* --- HEADER --- */}
      <div className="p-4 hidden md:block border-b border-[#2c2f38]">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          Episodes
        </h2>
      </div>

      {/* --- NAVIGATION BUTTONS --- */}
      <div className="flex border-b p-1 gap-1 border-[#2c2f38]">
        <button
          onClick={onPrev}
          className="w-1/2 py-3 rounded-lg hover:bg-[#3a3d47] transition font-medium border-r border-[#1d2028]"
        >
          ⬅ Previous
        </button>
        <button
          onClick={onNext}
          className="w-1/2 py-3 rounded-lg hover:bg-[#3a3d47] transition font-medium"
        >
          Next ➡
        </button>
      </div>

      {/* --- LATEST EPISODE --- */}
      {latestEp && (
        <div
          className="flex items-center gap-3 px-4 border-b border-[#2c2f38] hover:bg-[#2c2f38]/80 transition cursor-pointer"
          onClick={() => onSelectEpisode?.(latestEp.number)}
        >
          <img
            src={latestEp.thumbnailUrl}
            alt={latestEp.title}
            className="w-20 h-14 object-cover rounded-md shadow-md"
          />
          <div className="flex flex-col">
            <span className="text-xs uppercase text-gray-400">Latest Episode</span>
            <span className="text-sm font-semibold text-white line-clamp-1">
              {latestEp.title}
            </span>
          </div>
        </div>
      )}

      {/* --- EPISODE LIST HEADER --- */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2c2f38]">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-400">
          All Episodes
        </h3>
        
      </div>

      {/* --- EPISODE LIST --- */}
      <div className="flex-1 overflow-y-auto p-4">
        {episodes.length < 25 ? (
          <ul className="flex flex-col gap-2">
            {episodes.map((ep) => (
              <li
                key={ep.number}
                onClick={() => onSelectEpisode?.(ep.number)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  ep.number === currentEp
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    : "bg-[#2c2f38] hover:bg-[#3a3d47] text-gray-200"
                }`}
              >
                <span className="font-semibold">Ep {ep.number}</span>{" "}
                <span className="text-sm text-gray-400 ml-1">{ep.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(40px,_5fr))] gap-2">
            {currentRangeEpisodes.map((ep) => (
              <div
                key={ep.number}
                onClick={() => onSelectEpisode?.(ep.number)}
                className={`text-sm font-semibold flex items-center justify-center px-3 py-0.5 rounded-md cursor-pointer transition-all duration-200 ${
                  ep.number === currentEp
                    ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md scale-105"
                    : "bg-[#2c2f38] hover:bg-[#3a3d47] text-gray-200"
                }`}
              >
                {ep.number}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarEpisodeChooser;
