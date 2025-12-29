import { Link } from "react-router-dom";

export default function AnimeHeroBanner({
  title,
  summary,
  image,
  rating,
  year,
  type,
  malid,
}) {
  return (
    <section
      className="relative h-[40vh] md:h-[60vh]  w-full  overflow-hidden shadow-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
       {/* Vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/40  to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent"></div>
      

      {/* Content */}
      <div className="relative z-10 h-full flex items-end-safe p-8 md:p-16">
        <div className="max-w-2xl text-white">
          {/* Meta */}
          <div className="flex text-shadow-2lg items-center gap-4 text-xs md:text-sm text-gray-300 mb-1 md:mb-3">
            <span className="text-green-400 font-semibold">
              ⭐ {rating ?? "N/A"}
            </span>
            {year && <span>{year}</span>}
            {type && <span className="uppercase">{type}</span>}
          </div>

          {/* Title */}
          <h1 className="text-2xl  md:text-6xl font-bold leading-tight mb-2 md:mb-4">
            {title}
          </h1>

          {/* Summary */}
          <p className="text-xs md:text-base text-gray-200 line-clamp-4 mb-3 md:mb-6">
            {summary || "No description available."}
          </p>

          {/* CTA */}
          <Link to={`/anime/${malid}`}>
          <button
            
            className="inline-flex items-center gap-2
                       bg-indigo-600/50 hover:bg-indigo-700/50
                       transition px-2 py-1 md:px-6 md:py-3 rounded-full
                       font-semibold shadow-lg text-xs md:text-sm" 
          >
            Learn More
          </button>
        </Link>
          
        </div>
      </div>
    </section>
  );
}
