import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ team }) => {
  const navigate = useNavigate();
  const handleJoin = () => {
    // Navigate to the join team page with the team ID
    navigate(`/teams/join/${team.id}`);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:border-transparent">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-gray-900 tracking-[-0.01em]">
              {team.title}
            </h3>
            {team.open ? (
              <span className="text-[10px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                Open
              </span>
            ) : (
              <span className="text-[10px] font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                Full
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">{team.event}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {team.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {team.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Member Avatars */}
          <div className="flex">
            {Array.from({ length: Math.min(team.members, 3) }).map(
              (_, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${team.id}${index}&backgroundColor=b6e3f4`}
                    alt="Member"
                    className="w-full h-full object-cover"
                  />
                </div>
              ),
            )}
            {team.members > 3 && (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2 bg-gray-100 flex items-center justify-center">
                <span className="text-[10px] font-semibold text-gray-500">
                  +{team.members - 3}
                </span>
              </div>
            )}
          </div>
          <span className="text-xs text-gray-500">
            {team.members}/{team.members + team.needed}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-gray-400">{team.college}</span>
          {team.open && (
            <button
              onClick={handleJoin}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold bg-gray-900 text-white rounded-full hover:opacity-85 transition disabled:opacity-60"
            >
              Join
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
