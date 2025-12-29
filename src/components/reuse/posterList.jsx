import React, { useEffect, useState } from "react";
import Poster from "../reuse/poster"; // adjust path if needed

const PosterList = ({ Url, style='' }) => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data); // check structure
        setAnimeData(data.data || []); // safely handle empty data
      } catch (err) {
        setError("Failed to fetch anime data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading)
    return (
      <div className="text-white text-center mt-20 text-2xl">Loading...</div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-20 text-lg">OOPs Looks like we have a error <br />{error}</div>
    );

  return (
    <>
        {animeData.map((anime) => (
          <div className={`${style}`}>
            <Poster
              malid={anime.mal_id}
              image={anime.images.jpg.large_image_url}
              title={anime.title_english}
              rating={anime.score || "N/A"}
              subs={anime.episodes}
              dubs=""
              year={anime.year || "Unknown"}
              duration={
                anime.duration?.replace(" per ep", "") ||
                `${anime.episodes || "?"} eps`
              }
            />
          </div>
          
          
        ))}
    </>
  );
};

export default PosterList;
