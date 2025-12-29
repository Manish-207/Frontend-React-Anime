import React, { useContext, useState } from "react";
import Chip from "./reuse/chip";
import { IoMdFolderOpen } from "react-icons/io";
import PosterList from "./reuse/posterList";
import { SidebarContext } from "../context/sidebarContext";

const Main = () => {
  const {isSidebarOpen} = useContext(SidebarContext)
  const [expanded, setExpanded] = useState(false);
  const Genre = [
    "Action",
    "Adventure",
    "Cars",
    "Comedy",
    "Dementia",
    "Demons",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Game",
    "Harem",
    "Historical",
    "Horror",
    "Isekai",
    "Josei",
    "Kids",
    "Magic",
    "Martial Arts",
    "Mecha",
    "Military",
    "Music",
    "Mystery",
    "Parody",
    "Police",
    "Psychological",
    "Romance",
    "Samurai",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shoujo Ai",
    "Shounen",
    "Shounen Ai",
    "Slice of Life",
    "Space",
    "Sports",
    "Super Power",
    "Supernatural",
    "Thriller",
    "Vampire",
  ];

  return (
    <div className={` ${isSidebarOpen?'md:ml-65': ''} `} >
      <main className="p-5">
        <div>
          <Chip
            label="Genres "
            hollow={false}
            color="bg-gray-600"
            textColor="text-neutral-200"
            icon={<IoMdFolderOpen />}
          />
          <br />
          <div
            className={`${
              expanded ? "line-clamp-none" : " line-clamp-3 md:line-clamp-2"
            }`}
          >
            {Genre.map((value) => {
              return <Chip label={value} />;
            })}
            
          </div>
          <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 px-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">
            Trending
          </h2>
          <div className="flex overflow-scroll no-scrollbar">
            <PosterList style={'p-2 min-w-40 md:min-w-60 '} Url={"https://api.jikan.moe/v4/top/anime"} />
          </div>
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">
            Upcoming
          </h2>
          <div className="flex overflow-scroll no-scrollbar">
            <PosterList style={'p-2 min-w-40 md:min-w-60 '} Url={"https://api.jikan.moe/v4/top/anime?filter=upcoming"} />
          </div>
          
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">
            Airing Now
          </h2>
          <div className="flex overflow-scroll no-scrollbar">
            <PosterList style={'p-2 min-w-40 md:min-w-60 '} Url={"https://api.jikan.moe/v4/top/anime?filter=airing"} />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Main;
