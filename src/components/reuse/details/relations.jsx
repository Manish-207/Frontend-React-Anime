import React, { useEffect, useState } from "react";

const RelationsGrid = ({ malId }) => {
  const [relations, setRelations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!malId) return;

    const fetchRelations = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/relations`);
        const data = await res.json();
        setRelations(data.data || []);
      } catch (err) {
        setError("Failed to fetch relations");
      } finally {
        setLoading(false);
      }
    };

    fetchRelations();
  }, [malId]);

  if (loading) return <div className="text-white mt-4 text-center">Loading relations...</div>;
  if (error) return <div className="text-red-500 mt-4 text-center">{error}</div>;
  if (relations.length === 0) return <div className="text-neutral-400 mt-4 text-center">No relations found.</div>;

  return (
    <div className="flex flex-col gap-6 mt-4">
      {relations.map((rel) => (
        <div key={rel.relation}>
          <h3 className="text-indigo-400 font-semibold mb-2 text-lg">{rel.relation}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rel.entry.map((entry) => (
              <a
                key={entry.mal_id}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg  shadow-md p-4 bg-indigo-500/10   hover:bg-indigo-500/20 transition-colors flex flex-col justify-between"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-white font-semibold truncate">{entry.name}</p>
                  <p className="text-neutral-400 text-sm">{entry.type}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelationsGrid;
