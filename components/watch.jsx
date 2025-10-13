// Watch.jsx
import React, { useRef, useEffect, useState } from "react";
import Info from "./reuse/info";
import PosterList from "./reuse/posterList";
import SidebarEpisodeChooser from "./reuse/episodes";

const Watch = () => {
  const playerRef = useRef(null);
  const [episodeData ,setEpisodeData] = useEffect({});
  const [playerHeight, setPlayerHeight] = useState(0);

  // Update sidebar height to match player
  useEffect(() => {
    const updateHeight = () => {
      if (playerRef.current) {
        setPlayerHeight(playerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

 

  return (
    <div className="md:p-5 space-y-8 min-h-screen">
      {/* Video Player + Episode List */}
      <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden ">
        {/* Video Player */}
        <div
          ref={playerRef}
          className="flex-1 relative w-full"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            id="video-player"
            className="absolute inset-0 w-full h-full shadow-lg"
            src="https://www.youtube.com/embed/OEdHsZbJHrk?si=aFKm8cWvHfua0aQS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Episode Sidebar */}
        <div
          className="w-full lg:w-[350px] lg:max-w-[30vw] bg-gray-900 text-white overflow-y-auto"
          style={{ maxHeight: playerHeight }}
        >
          <SidebarEpisodeChooser
            latestEp={{
              number: 120,
              title: "Episode 120",
              thumbnailUrl: "https://via.placeholder.com/80x56",
            }}
            currentEp={69}
            episodes={[...Array(120).keys()].map((i) => ({
              number: i + 1,
              title: `Episode ${i + 1}`,
              thumbnailUrl: "https://via.placeholder.com/80x56",
            }))}
            onPrev={() => console.log("Prev")}
            onNext={() => console.log("Next")}
            onSelectEpisode={(num) => console.log("Selected", num)}
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="rounded-lg shadow-md">
        <Info animeData={{}} islarge={false} />
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-3xl text-white font-bold mb-4">
          Recommended For You
        </h2>
        <PosterList
          Url={`https://api.jikan.moe/v4/anime?genres:comedy`}
          isGrid={true}
        />
      </div>
    </div>
  );
};

export default Watch;
