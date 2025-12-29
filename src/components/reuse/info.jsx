import React from "react";
import InfoBadges from "./InfoBadges";
import Tabs from "./details/tabs";

const Info = ({ animeData = {}, islarge = true }) => {
  return (
    <>
    
    <div className="relative flex  justify-center py-8 ">
      <div
      className="absolute inset-0 bg-fixed  brightness-15 bg-cover"
      style={{
        backgroundImage: `url(${animeData.images?.jpg?.large_image_url || ""})`,
      }}
    ></div>
    <div className="absolute inset-0    bg-[#0d0a1f]/20"></div>
      
      <div className="max-w-500 w-full p-5  flex flex-col gap-8">
        {/* Title & Badges */}
        <div className="flex flex-col gap-4 drop-shadow-lg">
          <h1 className="text-5xl font-extrabold text-white ">
            {animeData.title}
          </h1>
          <InfoBadges animeData={animeData} />
        </div>

        {/* Main Content */}
        <div className="flex overflow-clip flex-col items-center md:items-start md:flex-row gap-3 lg:gap-5">

  
          <div className="md:sticky top-20 ">
            <div className="lg:w-64  w-54  rounded-2xl backdrop-blur-md shadow-lg ">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src={animeData.images.jpg.large_image_url}
                alt={animeData.title}
              />
            </div>
          </div>

          {/* Tabs section  max-w-7xl w-[95vw] md:w-[65vw] lg:w-[105%]*/}
          <div className="flex-1 w-full">
            <div className=" box-border md:p-4 lg:p-5 rounded-2xl   backdrop-blur-md  bg-indigo-900/10 shadow-lg ">
              <Tabs animeData={animeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Info;
