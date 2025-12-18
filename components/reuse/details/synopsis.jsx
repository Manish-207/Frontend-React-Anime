import React, { useState } from "react";

const Synopsis = ({ animeData }) => {
  const [expanded, setExpanded] = useState(false);

  if (!animeData) return null;

  const {
    synopsis,
    title,
    title_english,
    title_japanese,
    type,
    source,
    episodes,
    status,
    duration,
    rating,
    score,
    rank,
    popularity,
    members,
    favorites,
    season,
    year,
    aired,
    studios = [],
    producers = [],
    licensors = [],
    genres = [],
    themes = [],
    demographics = [],
  } = animeData;

  return (
    <div className="text-neutral-200 w-full flex flex-col gap-10 mt-6">
      {/* SYNOPSIS SECTION */}
      <div className="flex-1">
        <div className="mb-5 pb-5 ">
          <h2 className="text-3xl font-semibold mb-5">Synopsis</h2>
          <p
            className={`text-neutral-300 transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-4"
            }`}
          >
            {synopsis || "No synopsis available."}
          </p>
          {synopsis && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>

      {/* INFORMATION SECTION */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-5">Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm text-neutral-300">
          <InfoItem label="Title (English)" value={title_english} />
          <InfoItem label="Title (Japanese)" value={title_japanese} />
          <InfoItem label="Type" value={type} />
          <InfoItem label="Source" value={source} />
          <InfoItem label="Episodes" value={episodes} />
          <InfoItem label="Status" value={status} />
          <InfoItem label="Duration" value={duration} />
          <InfoItem label="Rating" value={rating} />
          <InfoItem label="Score" value={score} />
          <InfoItem label="Rank" value={`#${rank}`} />
          <InfoItem label="Popularity" value={`#${popularity}`} />
          <InfoItem label="Members" value={members?.toLocaleString()} />
          <InfoItem label="Favorites" value={favorites?.toLocaleString()} />
          <InfoItem label="Aired" value={aired?.string} />
          <InfoItem label="Season" value={`${season} ${year || ""}`} />

          <InfoItem
            label="Studios"
            value={studios.map((s) => s.name).join(", ")}
          />
          <InfoItem
            label="Producers"
            value={producers.map((p) => p.name).join(", ")}
          />
          <InfoItem
            label="Licensors"
            value={licensors.map((l) => l.name).join(", ")}
          />
          <InfoItem
            label="Genres"
            value={genres.map((g) => g.name).join(", ")}
          />
          <InfoItem
            label="Themes"
            value={themes.map((t) => t.name).join(", ")}
          />
          <InfoItem
            label="Demographics"
            value={demographics.map((d) => d.name).join(", ")}
          />
        </div>
      </div>
    </div>
  );
};

// Subcomponent for cleaner info rows
const InfoItem = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col">
      <span className="text-indigo-300 font-bold text-xs uppercase">{label}</span>
      <span className="text-white text-base">{value}</span>
    </div>
  );
};

export default Synopsis;
