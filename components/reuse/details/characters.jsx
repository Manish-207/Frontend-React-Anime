import React, { useEffect, useState } from "react";

const Characters = ({ malId }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!malId) return;

    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/characters`);
        const data = await res.json();
        setCharacters(data.data || []);
      } catch (err) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [malId]);

  if (loading)
    return <div className="text-white text-center mt-10">Loading characters...</div>;

  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((charItem) => {
        const character = charItem.character;
        const role = charItem.role;
        const japaneseVA = charItem.voice_actors.find((va) => va.language === "Japanese");

        return (
          <div
            key={character.mal_id}
            className="flex bg-indigo-500/10   hover:bg-indigo-500/20 rounded-xl shadow-lg  overflow-hidden hover:scale-[1.02] transition-transform duration-200"
          >
            {/* Left Character Image */}
            <div className="flex-shrink-0 w-20 h-24 sm:w-25 sm:h-32 overflow-hidden">
              <img
                src={character.images.jpg.image_url}
                alt={character.name}
                className=" inset-0 scale-110 object-cover"
              />
            </div>

            {/* Middle Text */}
            <div className="flex-1 px-4 py-2 sm:py-4 flex flex-col justify-between h-24 sm:h-32">
              <div>
                <p className="text-white font-semibold text-sm sm:text-base truncate">
                  {character.name}
                </p>
                {role && (
                  <p className="text-indigo-400 text-xs font-semibold sm:text-sm">{role}</p>
                )}
              </div>

              {japaneseVA && (
                <div className="flex items-center justify-between mt-2">
                  
                 <p className="text-neutral-400 text-xs sm:text-sm truncate">
                    {japaneseVA.person.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
