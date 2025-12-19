import React, { useState, useEffect, useRef } from "react";
import Chip from "./chip";
import PosterList from "./posterList";
import InfoBadges from "./InfoBadges";
import Info from "./info";

const Details = ({ malId }) => {
  const [animeData, setAnimedata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!malId) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
        const data = await response.json();
        setAnimedata(data.data || {});
      } catch (err) {
        setError("Failed to fetch anime details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [malId]);

  if (loading)
    return (
      <div className="text-white text-center mt-20 text-2xl">Loading...</div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-20 text-lg">
        Oops! Looks like we have an error <br />
        {error}
      </div>
    );

  return (
    <div className="text-white">
      <div >
        <Info animeData={animeData} />
      </div>
      

      <div className="p-5 ">
        {/* Use only the first genre for the API */}
        {(() => {
          const firstGenre =
            animeData.genres?.[0] ||
            animeData.explicit_genres?.[0] ||
            animeData.themes?.[0];

          if (!firstGenre) return null;

          return (
            <div>
              <h2 className="text-white py-5  text-2xl font-semibold ">
                Recommended for You
              </h2>
              <PosterList
                Url={`https://api.jikan.moe/v4/anime?genres=${firstGenre.mal_id}`}
                isGrid={true}
              />
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Details;
