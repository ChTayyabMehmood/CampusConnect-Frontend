import {
  LuBuilding2,
  LuCalendar,
  LuMapPin,
  LuUsers,
  LuBookmark,
} from "react-icons/lu";
import { useState } from "react";
import { typeColors, statusColors } from "../utils/colors"; // Import your color maps

const FeedContainer = ({ props }) => {
  const {
    title,
    type,
    status,
    description,
    location,
    participants,
    tags = [],
    organizer,
  } = props;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="relative mt-6 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Bookmark Button */}
      <button
        onClick={handleBookmark}
        className="absolute top-5 right-5 p-1.5 rounded-md hover:bg-gray-100 transition-colors z-10"
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        <LuBookmark
          size={22}
          className={`transition-colors ${
            isBookmarked
              ? "text-blue-600 fill-blue-600"
              : "text-gray-400 hover:text-gray-700"
          }`}
        />
      </button>

      {/* Top Row: Title & Badges */}
      <div className="pr-10 flex flex-wrap items-center gap-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        {/* Type Badge (Uses typeColors) */}
        <span
          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
            typeColors[type] || "bg-gray-50 text-gray-600"
          }`}
        >
          {type}
        </span>

        {/* Status Badge (Uses statusColors) */}
        <span
          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
            statusColors[status] || "bg-gray-50 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {description}
      </p>

      {/* Meta Row: Organizer, Status, Location, Participants */}
      <div className="flex flex-wrap items-center gap-5 mt-4 text-gray-500">
        {organizer && (
          <div className="flex items-center gap-1.5">
            <LuBuilding2 size={18} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-600">
              {organizer}
            </span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <LuCalendar size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">{status}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <LuMapPin size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">{location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <LuUsers size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">
            {participants}
          </span>
        </div>
      </div>

      {/* Tags Row */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedContainer;
