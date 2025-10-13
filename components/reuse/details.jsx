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
      
      {/* info section */}
      <div>
        <Info animeData={animeData}/>
      </div>
      {/* Detailed info section */}
      <div className="mt-8 space-y-0 p-6">
        {/* Basic info list */}
        <div className="pb-4 border-b border-gray-700">
          <ul className="space-y-2 text-gray-200">
            {animeData.title_japanese && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Japanese:
                </strong>
                <span>{animeData.title_japanese}</span>
              </li>
            )}
            {animeData.title_synonyms?.length > 0 && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Synonyms:
                </strong>
                <span>{animeData.title_synonyms.join(", ")}</span>
              </li>
            )}
            {animeData.aired?.string && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Aired:
                </strong>
                <span>{animeData.aired.string}</span>
              </li>
            )}
            {(animeData.season || animeData.year) && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Premiered:
                </strong>
                <span>
                  {animeData.season} {animeData.year}
                </span>
              </li>
            )}
            {animeData.duration && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Duration:
                </strong>
                <span>{animeData.duration}</span>
              </li>
            )}
            {animeData.status && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Status:
                </strong>
                <span>{animeData.status}</span>
              </li>
            )}
            {animeData.score && (
              <li className="flex">
                <strong className="w-24 flex-shrink-0 text-gray-400">
                  Score:
                </strong>
                <span>{animeData.score}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Genres & themes */}
        {(animeData.genres?.length > 0 ||
          animeData.explicit_genres?.length > 0 ||
          animeData.themes?.length > 0) && (
          <div className="py-4 border-b border-gray-700">
            <div className="flex flex-wrap items-start gap-2">
              <strong className="w-24 flex-shrink-0 text-gray-400 mt-1">
                Genres:
              </strong>
              <div className="flex-1 flex flex-wrap gap-2">
                {animeData.genres?.map((genre) => (
                  <Chip key={genre.mal_id} label={genre.name} />
                ))}
                {animeData.explicit_genres?.map((genre) => (
                  <Chip key={genre.mal_id} label={genre.name} />
                ))}
                {animeData.themes?.map((theme) => (
                  <Chip key={theme.mal_id} label={theme.name} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Studios */}
        {animeData.studios?.length > 0 && (
          <div className="py-4 border-b border-gray-700">
            <div className="flex">
              <strong className="w-24 flex-shrink-0 text-gray-400">
                Studios:
              </strong>
              <span className="text-gray-200">
                {animeData.studios.map((studio) => studio.name).join(", ")}
              </span>
            </div>
          </div>
        )}

        {/* Producers */}
        {animeData.producers?.length > 0 && (
          <div className="py-4">
            <div className="flex">
              <strong className="w-24 flex-shrink-0 text-gray-400">
                Producers:
              </strong>
              <span className="text-gray-200">
                {animeData.producers
                  .map((producer) => producer.name)
                  .join(", ")}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Use only the first genre for the API */}
        {(() => {
          const firstGenre =
            animeData.genres?.[0] ||
            animeData.explicit_genres?.[0] ||
            animeData.themes?.[0];

          if (!firstGenre) return null;

          return (
            <div>
              <h2 className="text-white py-5 text-2xl font-semibold ">
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
