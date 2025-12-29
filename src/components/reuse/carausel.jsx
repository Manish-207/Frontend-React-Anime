import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AnimeHeroBanner from "./banner";
import { SidebarContext } from "../../context/sidebarContext";

export default function Carousel() {
  const {isSidebarOpen} = useContext(SidebarContext)
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?filter=airing&limit=10")
      .then(res => res.json())
      .then(data => {
        setAnimeList(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-[40vh] md:h-[60vh] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className={`w-auto h-[40vh] ${isSidebarOpen? 'md:ml-65' :''} md:h-[60vh] `}>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {animeList.map(anime => (
          <SwiperSlide key={anime.mal_id}>
            <AnimeHeroBanner
              malid={anime.mal_id}
              title={anime.title}
              summary={anime.synopsis}
              image={anime.images.jpg.large_image_url}
              rating={anime.score}
              year={anime.year}
              type={anime.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
