import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Using react-icons for the star

const Reviews = ({ malId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!malId) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/reviews`);
        const data = await res.json();
        setReviews(data.data || []);
      } catch (err) {
        setError("Failed to fetch reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [malId]);

  if (loading)
    return <div className="text-white text-center mt-10">Loading reviews...</div>;

  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;

  if (reviews.length === 0)
    return <div className="text-neutral-400 text-center mt-10">No reviews found.</div>;

  return (
    <div className="flex flex-col gap-6 mt-4">
      {reviews.map((review) => (
        <ReviewCard key={review.mal_id} review={review} />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShow = () => setShowMore((prev) => !prev);

  const isLong = review.review.length > 400;
  const displayedText = showMore || !isLong ? review.review : review.review.slice(0, 400) + "...";

  return (
    <div className="relative bg-indigo-500/10   hover:bg-indigo-500/20  rounded-xl p-4 flex flex-col gap-3">
      {/* Score in top-right corner */}
      <div className="absolute top-3 right-3 flex items-center gap-1 text-yellow-400 font-semibold">
        <FaStar />
        {review.score}
      </div>

      {/* User info */}
      <div className="flex items-center gap-3">
        <img
          src={review.user.images.jpg.image_url}
          alt={review.user.username}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold">{review.user.username}</p>
          <p className="text-neutral-400 text-sm">
            {new Date(review.date).toLocaleDateString()}
          </p>
          {review.tags && review.tags.length > 0 && (
            <p className="text-green-400 text-xs">{review.tags.join(", ")}</p>
          )}
        </div>
      </div>

      {/* Review text */}
      <p className="text-neutral-300 text-sm sm:text-base whitespace-pre-line mt-2">
        {displayedText}
      </p>

      {isLong && (
        <button
          onClick={toggleShow}
          className="text-blue-400 hover:underline self-start text-sm"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Reviews;
