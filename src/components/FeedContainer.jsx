import {
  LuBuilding2,
  LuCalendar,
  LuMapPin,
  LuUsers,
  LuBookmark,
  LuClock, // Added Clock icon
} from "react-icons/lu";
import { useState } from "react";
import { typeColors, statusColors } from "../utils/colors";

const FeedContainer = ({ props }) => {
  const {
    title,
    type,
    status,
    deadline, // New prop for the Calendar text (e.g. "Closed", "1d left")
    description,
    location,
    participants,
    tags = [],
    organizer,
    extraBadge, // New prop for extra special badges (e.g. "Closing soon")
    initialBookmarked = false, // Allows you to start with a filled bookmark
  } = props;

  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);

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
      <div className="pr-10 flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        {/* Type Badge */}
        <span
          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
            typeColors[type] || "bg-gray-50 text-gray-600"
          }`}
        >
          {type}
        </span>

        {/* Status Badge */}
        <span
          className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
            statusColors[status] || "bg-gray-50 text-gray-600"
          }`}
        >
          {status}
        </span>

        {/* Extra Badge (e.g., Closing Soon) */}
        {extraBadge && (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-green-50 text-green-600">
            <LuClock size={14} />
            {extraBadge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Meta Row: Organizer, Deadline, Location, Participants */}
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
          <span className="text-sm font-medium text-gray-600">{deadline}</span>
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
