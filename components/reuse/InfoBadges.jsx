import React from "react";

const InfoBadges = ({ animeData = {}, islarge = true }) => {
  const badgeStyle = islarge
    ? "px-1 py-1  rounded-xs text-sm text-neutral-200"
    : "px-1  py-0.5 rounded-xs text-xs text-neutral-200";
  return (
    <div>
      <div className="flex flex-wrap w-auto rounded-lg overflow-hidden justify-center lg:justify-start  gap-0.5">
        {animeData.score && (
          <span  className={`${badgeStyle}`} >
            ⭐{animeData.score}
          </span>
        )}
        {animeData.type && (
          <span className={`${badgeStyle} `}>
            {animeData.type}
          </span>
        )}
        {animeData.episodes && (
          <span className={`${badgeStyle}`}  >
            {animeData.episodes} Episodes
          </span>
        )}
        {animeData.rating && (
          <span  className={`${badgeStyle}`} >
            {animeData.rating.split(" ")[0]}
          </span>
        )}
        {animeData.source && (
          <span  className={`${badgeStyle}`} >
            {animeData.source}
          </span>
        )}
        
      </div>
    </div>
  );
};

export default InfoBadges;
