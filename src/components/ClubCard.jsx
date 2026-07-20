import React from "react";
import { LuUsers, LuCalendar } from "react-icons/lu";

const ClubCard = ({
  name,
  college,
  desc,
  members,
  events,
  following,
  bannerColor,
  initials,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Banner */}
      <div className={`h-[120px] relative ${bannerColor}`}>
        {/* Avatar */}
        <div
          className={`w-16 h-16 rounded-lg border-4 border-white absolute -bottom-8 left-6 flex items-center justify-center text-2xl font-bold text-white ${bannerColor}`}
        >
          {initials}
        </div>
      </div>

      {/* Body */}
      <div className="pt-10 px-6 pb-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900 tracking-tight">
              {name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{college}</p>
          </div>

          {/* Static Follow Button */}
          <button
            className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors ${
              following
                ? "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                : "border-transparent text-white bg-gray-900 hover:bg-gray-800"
            }`}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mt-3">{desc}</p>

        <div className="flex items-center gap-6 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <LuUsers size={14} /> {members} members
          </span>
          <span className="flex items-center gap-1.5">
            <LuCalendar size={14} /> {events} events
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
