import React, { useState } from "react";
import Synopsis from "./synopsis";
import Characters from "./characters";
import Reviews from "./reviews";
import EpisodesTab from "./episodes";
import RelationsTab from "./relations";

const Tabs = ({animeData}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "characters", label: "Characters" },
    { id: "episodes", label: "Episodes" },
    { id: "reviews", label: "Reviews" },
    { id: "related", label: "Related" },
  ];

  return (
    <div className=" ">
      {/* Tabs Header */}
      <div className="flex px-2  border-b border-gray-700 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1  text-center py-3 text-xs md:text-sm font-medium transition-all duration-200 
              ${
                activeTab === tab.id
                  ? "border-b-2 border-indigo-500 text-indigo-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-h-[80vh] overflow-y-scroll rounded-2xl  p-3 text-gray-200">
        {activeTab === "overview" && (
        <>
          <div className="mb-2 pb-5 ">
            
             <Synopsis animeData={animeData} />
        
          </div>
          
          </>
        )}
        {activeTab === "characters" && (
          <div>
            <Characters malId={animeData.mal_id} />
          </div>
        )}

        {activeTab === "episodes" && (
          <div>
            <EpisodesTab malId={animeData.mal_id} />
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <Reviews malId={animeData.mal_id} />
          </div>
        )}

        {activeTab === "related" && (
          <div>
            <RelationsTab malId={animeData.mal_id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
