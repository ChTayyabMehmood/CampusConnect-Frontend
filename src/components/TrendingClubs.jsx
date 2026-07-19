const clubs = [
  {
    id: 1,
    name: "Google Developer Student Club",
    org: "NUST",
    initial: "G",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "ACM Student Chapter",
    org: "LUMS",
    initial: "A",
    bgColor: "bg-blue-700", // Darker blue
  },
  {
    id: 3,
    name: "Robotics Club",
    org: "FAST-NUCES",
    initial: "R",
    bgColor: "bg-orange-500",
  },
];

const RecommendedClubs = () => {
  return (
    <div className="w-full bg-white p-0 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold text-gray-900">Trending Clubs</h2>
        <p className="text-sm text-blue-500 font-medium cursor-pointer hover:underline">
          View all
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {clubs.map((club) => (
          <div key={club.id} className="flex items-center gap-3 cursor-pointer">
            {/* Initial-based avatar square */}
            <div
              className={`w-10 h-10 shrink-0 rounded-xl ${club.bgColor} flex items-center justify-center text-white font-bold text-sm select-none`}
            >
              {club.initial}
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-sm text-gray-900 leading-tight">
                {club.name}
              </h3>
              <p className="text-xs text-gray-500 truncate max-w-50">
                {club.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedClubs;
