import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import Chip from "./chip";
import PosterList from "./posterList";
import InfoBadges from "./InfoBadges";
import Info from "./info";
import { SidebarContext } from "../../context/sidebarContext";

const Details = ({ malId }) => {
  const { isSidebarOpen } = useContext(SidebarContext);
  const [animeData, setAnimedata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!malId) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${malId}`
        );
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
      <div className="text-white text-center mt-20 text-2xl">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center mt-20 text-lg">
        Oops! Looks like we have an error <br />
        {error}
      </div>
    );

  return (
    <div
      className={` ${isSidebarOpen ? "md:ml-65" : ""}    text-white `}
    >
      <div>
        <Info animeData={animeData} />
      </div>

      <div className="p-5 flex justify-center ">
        <div className=" max-w-500 overflow-hidden">
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
                <div
                  className="w-full grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 "
                >
                  <PosterList
                    Url={`https://api.jikan.moe/v4/anime?genres=${firstGenre.mal_id}`}
                  />
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Details;
