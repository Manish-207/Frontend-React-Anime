import React from "react";
import InfoBadges from "./InfoBadges";
import Tabs from "./details/tabs";

const Info = ({ animeData = {}, islarge = true }) => {
  return (
    <>
    
    <div className="relative flex  justify-center py-8 min-h-screen">
      <div
      className="absolute inset-0 bg-fixed  bg-top brightness-15 bg-cover"
      style={{
        backgroundImage: `url(${animeData.images?.jpg?.large_image_url || ""})`,
      }}
    ></div>
    <div className="absolute inset-0    bg-[#0d0a1f]/20"></div>
      
      <div className="w-[90%] flex flex-col gap-8">
        {/* Title & Badges */}
        <div className="flex flex-col gap-4 drop-shadow-lg">
          <h1 className="text-5xl font-extrabold text-white ">
            {animeData.title}
          </h1>
          <InfoBadges animeData={animeData} />
        </div>

        {/* Main Content */}
        <div className="flex  flex-col items-center md:items-start md:flex-row gap-5">

  
          <div className="md:sticky top-20 ">
            <div className="w-64 sm:w-72   rounded-2xl backdrop-blur-md shadow-lg ">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src={animeData.images.jpg.large_image_url}
                alt={animeData.title}
              />
            </div>
          </div>

          {/* Tabs section */}
          <div className="flex-1 ">
            <div className="p-2 md:p-6   w-[95vw] md:w-auto rounded-2xl backdrop-blur-md  bg-indigo-500/10 shadow-lg ">
             <div className="h-dvh overflow-y-scroll">
              <Tabs animeData={animeData} />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Info;
