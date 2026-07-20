import { LuPlus } from "react-icons/lu";
import TeamCard from "../components/TeamCard";
import { teamsData } from "../utils/fakeData";

const Teams = () => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Hackathons", value: "hackathon" },
    { label: "Projects", value: "project" },
    { label: "Competitions", value: "competition" },
    { label: "Open Only", value: "open" },
  ];

  return (
    <div className="max-w-300 mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-gray-900">
            Teams
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Find teammates for hackathons and projects
          </p>
        </div>
        <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-full hover:opacity-85 transition">
          <LuPlus className="w-4 h-4" />
          Create Team Request
        </button>
      </div>

      {/* Filter Chips - Static UI Only */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6 scrollbar-hide">
        {filters.map((filterOption) => (
          <button
            key={filterOption.value}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition ${
              filterOption.value === "all"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Team Cards Grid - All teams displayed statically */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamsData.map((team) => (
          <div key={team.id}>
            <TeamCard team={team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
