import React from "react";
import bgImage from "../assets/image.png";
import logo from "../assets/LOGOS/LOGO-WHITW.PNG";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-gradient-to-r  from-[#1A1A1A] to-[#2a2a2a] text-white">
      {/* HERO SECTION */}
      <div
        className="relative h-screen bg-cover bg-center -mt-16 md:-mt-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* HEADER */}
        {/* HEADER */}
        <header className="relative z-10 flex items-center px-2 py-0">
          <img src={logo} alt="Igris Vere" className="w-45 md:w-65" />
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex h-[80%] flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-4xl">
            Discover Anime. Track Trends. Dive Deeper.
          </h1>

          <h2 className="text-lg md:text-2xl mt-4 text-gray-200">
            Explore trending anime, detailed stats, reviews, and
            seasonal hits.
          </h2>

          <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-300">
            From top-rated classics to currently airing anime —
            everything you need in one place.
          </p>

          <Link to={"/home"}>
            <button className="mt-8 px-6 py-3 bg-indigo-600/80 hover:bg-indigo-700/80 transition rounded text-lg font-semibold">
              Explore Trending Anime
            </button>
          </Link>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why AniVerse?
        </h2>

        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-indigo-700/50  to-indigo-900/50 rounded-lg p-6 hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Track Trends
            </h3>
            <p className="text-gray-200">
              Stay up-to-date with trending and seasonal anime so you
              never miss what’s hot in the anime world.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-indigo-700/50 to-indigo-900/50 rounded-lg p-6 hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Detailed Stats
            </h3>
            <p className="text-gray-200">
              View ratings, reviews, episodes, and rankings to choose
              the perfect anime for your next binge.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-indigo-700/50  to-indigo-900/50 rounded-lg p-6 hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Anime Discovery
            </h3>
            <p className="text-gray-200">
              Explore new anime, classics, and hidden gems with
              curated recommendations and search filters.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-indigo-800/10 p-6">
            <h3 className="text-xl font-semibold mb-2">
              What is AniVerse?
            </h3>
            <p className="text-gray-300">
              AniVerse is an anime discovery platform inspired by MAL,
              helping users explore anime details, ratings, trends,
              and seasonal charts.
            </p>
          </div>

          <div className="bg-indigo-800/10 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Where does the anime data come from?
            </h3>
            <p className="text-gray-300">
              Anime information is fetched using public anime APIs
              such as Jikan, providing up-to-date and reliable data.
            </p>
          </div>

          <div className="bg-indigo-800/10 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Can I track trending or seasonal anime?
            </h3>
            <p className="text-gray-300">
              Yes, AniVerse highlights trending, popular, and
              currently airing anime so you never miss what’s hot.
            </p>
          </div>

          <div className="bg-indigo-800/10 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Is this a streaming platform?
            </h3>
            <p className="text-gray-300">
              No. AniVerse focuses on anime discovery, information,
              and trends — not streambg-zinc-8ing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
