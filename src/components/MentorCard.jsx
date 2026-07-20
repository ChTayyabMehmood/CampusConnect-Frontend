import React from "react";
import { LuStar, LuClock } from "react-icons/lu";

const MentorCard = ({
  name,
  role,
  college,
  skills,
  bio,
  availability,
  sessions,
  rating,
  avatar,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header - Avatar + Name + Rating */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar}&backgroundColor=b6e3f4`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{college}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 justify-end">
            <LuStar className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-gray-900">
              {rating}
            </span>
          </div>
          <p className="text-[11px] text-gray-400">{sessions} sessions</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer - Availability + Book Button */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <LuClock className="w-3 h-3" />
          {availability}
        </div>
        <button className="text-xs font-semibold bg-gray-900 text-white px-3.5 py-1.5 rounded-full hover:opacity-85 transition">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
