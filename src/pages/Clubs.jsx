import React from "react";
import ClubCard from "../components/ClubCard";

const Clubs = () => {
  // Mock Data (UI only)
  const clubsData = [
    {
      id: 1,
      name: "ACM Student Chapter",
      college: "IIT Bombay",
      type: "tech",
      desc: "Association for Computing Machinery. Weekly coding sessions, tech talks, and hackathon organizing.",
      members: 120,
      events: 8,
      following: true,
      bannerColor: "bg-blue-600",
      initials: "AC",
    },
    {
      id: 2,
      name: "DesignHub",
      college: "NID Ahmedabad",
      type: "design",
      desc: "UI/UX design community. Design sprints, portfolio reviews, and industry mentorship.",
      members: 85,
      events: 6,
      following: false,
      bannerColor: "bg-purple-600",
      initials: "DH",
    },
    {
      id: 3,
      name: "CodeClub",
      college: "BITS Pilani",
      type: "coding",
      desc: "Competitive programming and open source. Weekly contests, code reviews, and GSoC prep.",
      members: 200,
      events: 12,
      following: true,
      bannerColor: "bg-rose-500",
      initials: "CC",
    },
    {
      id: 4,
      name: "Robotics Society",
      college: "NIT Trichy",
      type: "robotics",
      desc: "Build robots, compete nationally. Arduino workshops, Robocon prep, and hardware projects.",
      members: 60,
      events: 4,
      following: false,
      bannerColor: "bg-amber-500",
      initials: "RS",
    },
    {
      id: 5,
      name: "Entrepreneurship Cell",
      college: "IIM Bangalore",
      type: "business",
      desc: "Startup ecosystem on campus. Pitch sessions, networking events, and founder talks.",
      members: 95,
      events: 10,
      following: false,
      bannerColor: "bg-emerald-500",
      initials: "EC",
    },
    {
      id: 6,
      name: "AI/ML Club",
      college: "IIIT Hyderabad",
      type: "tech",
      desc: "Artificial Intelligence and Machine Learning. Research discussions, paper readings, and projects.",
      members: 150,
      events: 7,
      following: true,
      bannerColor: "bg-indigo-600",
      initials: "AI",
    },
    {
      id: 7,
      name: "Open Source Society",
      college: "VIT Vellore",
      type: "coding",
      desc: "Contributing to open source. Git workshops, hacktoberfest, and community projects.",
      members: 110,
      events: 5,
      following: false,
      bannerColor: "bg-slate-700",
      initials: "OS",
    },
    {
      id: 8,
      name: "Women in Tech",
      college: "SRM University",
      type: "tech",
      desc: "Empowering women in technology. Workshops, mentorship, and industry connections.",
      members: 75,
      events: 6,
      following: false,
      bannerColor: "bg-pink-600",
      initials: "WT",
    },
  ];

  const filters = ["All", "Tech", "Design", "Coding", "Robotics", "Business"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Clubs & Communities
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Join college clubs and tech communities across campuses
        </p>
      </div>

      {/* Filter Chips (Static) */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {filters.map((label, index) => (
          <button
            key={label}
            className={`px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap border transition-colors ${
              index === 0
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Club Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubsData.map((club) => (
          <ClubCard key={club.id} {...club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
