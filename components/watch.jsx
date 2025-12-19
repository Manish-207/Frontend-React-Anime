// Watch.jsx
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./reuse/info.jsx";
import PosterList from "./reuse/posterList.jsx";
import SidebarEpisodeChooser from "./reuse/episodes.jsx";

const Watch = () => {
  const { malid } = useParams();                      // ← get malid
  const playerRef = useRef(null);

  const [playerHeight, setPlayerHeight] = useState(0);
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch anime data
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${malid}/full`);
        const data = await res.json();
        setAnime(data.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [malid]);

  

  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!anime) return <div className="text-red-400 p-10">Anime Not Found</div>;

  return (
    <div className="md:p-5 space-y-8 min-h-screen">
      {/* Video Player + Episode List */}
      <div className="flex flex-col h-svh lg:flex-row rounded-lg overflow-hidden">
        
        {/* Video Player */}
        <div
          ref={playerRef}
          className="flex-1 relative w-full"
        >
          <iframe
            id="video-player"
            className="absolute inset-0 w-full h-full shadow-lg"
            src={`https://www.youtube.com/embed/${anime.trailer?.youtube_id || "OEdHsZbJHrk"}`}
            title={anime.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Episode Sidebar */}
        <div
          className="w-full lg:w-[350px] lg:max-w-[30vw] bg-gray-900 text-white overflow-y-auto"
         
        >
          <SidebarEpisodeChooser
            latestEp={{
              number: anime.episodes || 1,
              title: anime.title,
              thumbnailUrl:
                anime.images?.jpg?.image_url ||
                "https://via.placeholder.com/80x56",
            }}
            currentEp={1}
            episodes={[...Array(anime.episodes || 1).keys()].map((i) => ({
              number: i + 1,
              title: `Episode ${i + 1}`,
              thumbnailUrl: anime.images?.jpg?.small_image_url,
            }))}
            onPrev={() => {}}
            onNext={() => {}}
            onSelectEpisode={(num) => console.log("Selected", num)}
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="rounded-lg shadow-md">
        <Info animeData={anime} islarge={false} />
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-3xl text-white font-bold mb-4">
          Recommended For You
        </h2>

        {/* <PosterList
          Url={`https://api.jikan.moe/v4/recommendations/anime?genre=4`}
          isGrid={true}
        /> */}
      </div>
    </div>
  );
};

export default Watch;
