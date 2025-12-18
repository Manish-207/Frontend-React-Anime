import React from "react";
import Chip from "./reuse/chip";
import { IoMdFolderOpen } from "react-icons/io";
import PosterList from "./reuse/posterList";

const Main = () => {
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
    <div className="md:ml-65">
      <main className="p-5">
        <div >
          <Chip
            label="Genres "
            hollow={false}
            color="bg-gray-600"
            textColor="text-neutral-200"
            icon={<IoMdFolderOpen />}
          />
          <br />
          {Genre.map((value) => {
            return <Chip label={value} />;
          })}
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">Trending</h2>
          <PosterList Url={"https://api.jikan.moe/v4/top/anime"} />
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">
            Latest Releases
          </h2>
          <PosterList Url="https://api.jikan.moe/v4/top/anime?filter=upcoming" />
        </div>
        <div>
          <h2 className="text-white py-5 text-2xl font-semibold ">Upcoming</h2>
          <PosterList Url="https://api.jikan.moe/v4/top/anime?filter=airing" />
        </div>
      </main>
    </div>
  );
};

export default Main;
