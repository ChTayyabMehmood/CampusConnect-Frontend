import React from "react";
import { LuMapPin, LuUsers, LuCalendar, LuArrowRight } from "react-icons/lu";

const EventCard = ({
  id,
  title,
  organizer,
  date,
  location,
  mode,
  bannerColor,
  icon: Icon,
  spots,
}) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Banner */}
      <div
        className={`h-[140px] relative flex items-center justify-center ${bannerColor}`}
      >
        <Icon className="w-12 h-12 text-white/80" />
        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-center shadow-md">
          <div className="text-[10px] font-semibold text-red-500 uppercase tracking-wide">
            {month}
          </div>
          <div className="text-lg font-bold text-gray-900 leading-none">
            {day}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{organizer}</p>

        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <LuMapPin size={12} /> {location}
          </span>
          <span className="flex items-center gap-1">
            <LuUsers size={12} /> {spots}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <span className="text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">
            {mode}
          </span>
          <button className="text-xs font-semibold bg-gray-900 text-white px-3.5 py-1.5 rounded-full hover:opacity-85 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
