import React from "react";
import InfoBadges from "./reuse/InfoBadges";

const AnimeList = () => {
  return (
    <div className="p-3 bg-zinc-900/50 rounded-xl shadow-md hover:bg-zinc-800/70 transition-all duration-300">
      <div className="flex gap-4 items-center">
        {/* Thumbnail */}
        <img
          className="h-24 w-16 object-cover rounded-md border border-zinc-700 shadow-sm"
          src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f5f2d39e92ac10eb0e809e39bd430aa.jpg"
          alt="Thumbnail"
        />

        {/* Info */}
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white mb-1">Title</h3>
          <InfoBadges />
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
