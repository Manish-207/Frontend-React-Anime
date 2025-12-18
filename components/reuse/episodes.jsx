import React, { useState, useEffect, useRef } from "react";

const SidebarEpisodeChooser = ({
  onNext,
  onPrev,
  currentEp,
  latestEp,
  onSelectEpisode,
}) => {
  const [episodeData, setEpisodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sidebarRef = useRef();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/anime/20/episodes"
        );
        const data = await response.json();
        console.log(data);

        setEpisodeData(data.data || []);
      } catch (err) {
        setError("Failed to fetch anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="flex flex-col text-gray-200 bg-[#1d2028]/90 h-full"
    >
      <div className="p-4 border-b">Episodes</div>

      <div className="p-4 overflow-y-auto">
        {loading && <p>Loading episodes...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading &&
          !error &&
          episodeData.map((ep) => (
            <div
              key={ep.mal_id}
              onClick={() => onSelectEpisode?.(ep.mal_id)}
              className="p-3 rounded-md bg-[#2c2f38] hover:bg-[#3a3d47]"
            >
              Episode {ep.mal_id}: {ep.title}
            </div>
          ))}
      </div>
    </aside>
  );
};


export default SidebarEpisodeChooser;
