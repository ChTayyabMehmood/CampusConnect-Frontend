import React from "react";
import {
  LuUsers,
  LuUserPlus,
  LuCalendar,
  LuMapPin,
  LuMail,
  LuMessageSquare,
  LuTag,
  LuHash,
} from "react-icons/lu";

const CreateTeamCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-[-0.02em]">
          Create a Team
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Find teammates for hackathons, projects, and competitions
        </p>
      </div>

      <form className="space-y-5">
        {/* Team Name */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Team Name *
          </label>
          <div className="relative">
            <LuUsers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., CodeCrafters"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
            />
          </div>
        </div>

        {/* Event/Hackathon */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Event / Hackathon Name *
          </label>
          <div className="relative">
            <LuCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., Build for India Hackathon 2026"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
            />
          </div>
        </div>

        {/* Team Description */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Team Description *
          </label>
          <div className="relative">
            <LuMessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <textarea
              rows="3"
              placeholder="Describe what you're building, what skills you need, and what you're looking for..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition resize-y"
            />
          </div>
        </div>

        {/* Skills Needed */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Skills Needed *
          </label>
          <div className="relative">
            <LuTag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., React, Python, UI/UX (comma separated)"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1.5">
            Enter skills separated by commas
          </p>
        </div>

        {/* Team Size + Open/Closed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              Team Size *
            </label>
            <div className="relative">
              <LuUserPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                min="1"
                max="10"
                placeholder="2-4"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              Availability
            </label>
            <div className="relative">
              <LuCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition appearance-none">
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mode / Location */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Mode *
          </label>
          <div className="relative">
            <LuMapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition appearance-none">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Contact Email */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
            Contact Email *
          </label>
          <div className="relative">
            <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="your.email@college.edu"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
            />
          </div>
        </div>

        {/* Open to All Toggle */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="openToAll"
            className="w-4 h-4 text-[#f06543] border-gray-300 rounded focus:ring-[#f06543]/30"
          />
          <label htmlFor="openToAll" className="text-sm text-gray-700">
            Open to all students (any college)
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 min-w-[140px] bg-[#f06543] text-white font-semibold text-sm py-3 rounded-lg hover:opacity-85 transition shadow-sm"
          >
            Create Team Request
          </button>
          <button
            type="button"
            className="flex-1 min-w-[140px] bg-gray-50 text-gray-700 font-semibold text-sm py-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">
          Your team request will be visible to all students on CampusConnect
        </p>
      </form>
    </div>
  );
};

export default CreateTeamCard;
