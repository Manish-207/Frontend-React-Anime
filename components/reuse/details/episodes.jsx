import React, { useEffect, useState } from "react";

const EpisodesTab = ({ malId }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!malId) return;

    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/episodes`);
        const data = await res.json();
        setEpisodes(data.data || []);
      } catch (err) {
        setError("Failed to fetch episodes");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [malId]);

  if (loading) return <div className="text-white mt-4 text-center">Loading episodes...</div>;
  if (error) return <div className="text-red-500 mt-4 text-center">{error}</div>;
  if (episodes.length === 0) return <div className="text-neutral-400 mt-4 text-center">No episodes found.</div>;

  return (
    <div className="flex flex-col gap-4 mt-4">
      {episodes.map((ep) => (
        <EpisodeCard key={ep.mal_id} episode={ep} />
      ))}
    </div>
  );
};

const EpisodeCard = ({ episode }) => {
  const airDate = episode.aired ? new Date(episode.aired).toLocaleDateString() : "Unknown";

  return (
    <div className="flex justify-between items-start p-4 bg-indigo-500/10 rounded-xl  hover:bg-indigo-500/20 transition-all">
      {/* Left section: episode number and title */}
      <div className="flex flex-col gap-1">
        <span className="text-indigo-400 font-bold text-sm sm:text-base">Ep {episode.mal_id}</span>
        <span className="text-white font-semibold text-sm sm:text-base">{episode.title || "Unknown Title"}</span>
      </div>

      {/* Right section: air date */}
      <div className="text-neutral-400 text-xs sm:text-sm self-end">
        {airDate}
      </div>
    </div>
  );
};

export default EpisodesTab;
