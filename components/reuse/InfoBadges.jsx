import React from "react";

const InfoBadges = ({ animeData = {}, islarge = true }) => {
  const badgeStyle = islarge
    ? "px-1 py-1  rounded-xs text-sm text-neutral-800"
    : "px-1  py-0.5 rounded-xs text-xs text-neutral-800";
  return (
    <div>
      <div className="flex flex-wrap w-auto rounded-lg overflow-hidden justify-center lg:justify-start  gap-0.5">
        {animeData.type && (
          <span className={`${badgeStyle}  bg-gray-100`}>
            {animeData.type}
          </span>
        )}
        {animeData.episodes && (
          <span className={`${badgeStyle} bg-yellow-400`}  >
            {animeData.episodes} Episodes
          </span>
        )}
        {animeData.rating && (
          <span  className={`${badgeStyle} bg-red-400`} >
            {animeData.rating.split(" ")[0]}
          </span>
        )}
        {animeData.source && (
          <span  className={`${badgeStyle} bg-blue-400`} >
            {animeData.source}
          </span>
        )}
      </div>
    </div>
  );
};

export default InfoBadges;
