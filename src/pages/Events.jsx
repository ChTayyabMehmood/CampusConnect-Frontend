import React from "react";
import EventCard from "../components/EventCard";
import {
  LuCalendar,
  LuMapPin,
  LuUsers,
  LuArrowRight,
  LuBriefcase,
  LuCode,
  LuPalette,
  LuTerminal,
  LuFlaskConical,
  LuPartyPopper,
  LuGitBranch,
  LuCpu,
} from "react-icons/lu";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: "Google Summer Intern 2026",
      organizer: "Google",
      type: "internship",
      date: "2026-07-30",
      location: "Bangalore",
      mode: "Offline",
      bannerColor: "bg-blue-600",
      icon: LuBriefcase,
      spots: "50k+ applied",
    },
    {
      id: 2,
      title: "Full Stack Web Dev Workshop",
      organizer: "DevClub IITB",
      type: "workshop",
      date: "2026-07-20",
      location: "Virtual",
      mode: "Online",
      bannerColor: "bg-purple-600",
      icon: LuCode,
      spots: "1.2k enrolled",
    },
    {
      id: 3,
      title: "UI/UX Design Sprint",
      organizer: "DesignBuddies",
      type: "workshop",
      date: "2026-07-18",
      location: "Virtual",
      mode: "Online",
      bannerColor: "bg-pink-600",
      icon: LuPalette,
      spots: "500 spots",
    },
    {
      id: 4,
      title: "JP Morgan Code for Good",
      organizer: "JP Morgan Chase",
      type: "hackathon",
      date: "2026-07-12",
      location: "Mumbai",
      mode: "Hybrid",
      bannerColor: "bg-rose-500",
      icon: LuTerminal,
      spots: "3k+ participants",
    },
    {
      id: 5,
      title: "NIT Trichy Summer Research",
      organizer: "NIT Trichy",
      type: "competition",
      date: "2026-07-25",
      location: "Trichy",
      mode: "Offline",
      bannerColor: "bg-teal-500",
      icon: LuFlaskConical,
      spots: "200 seats",
    },
    {
      id: 6,
      title: "TechFest 2026",
      organizer: "IIT Bombay",
      type: "fest",
      date: "2026-09-15",
      location: "Mumbai",
      mode: "Offline",
      bannerColor: "bg-emerald-500",
      icon: LuPartyPopper,
      spots: "20k+ visitors",
    },
    {
      id: 7,
      title: "Hacktoberfest India",
      organizer: "GitHub Community",
      type: "hackathon",
      date: "2026-10-01",
      location: "Global",
      mode: "Online",
      bannerColor: "bg-slate-700",
      icon: LuGitBranch,
      spots: "Open",
    },
    {
      id: 8,
      title: "Smart India Hackathon",
      organizer: "Govt. of India",
      type: "hackathon",
      date: "2026-08-20",
      location: "Multiple Cities",
      mode: "Hybrid",
      bannerColor: "bg-blue-600",
      icon: LuCpu,
      spots: "10k+ teams",
    },
  ];

  const filters = [
    "All Events",
    "Hackathons",
    "Workshops",
    "Competitions",
    "Fests",
    "Upcoming",
  ];

  // Featured Event (first item)
  const featured = eventsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-sm text-gray-500 mt-1">
            Hackathons, workshops, and competitions
          </p>
        </div>
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

      {/* Featured Event */}
      <div className="mb-8 relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 text-white">
        <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/20 pointer-events-none"></div>
        <div className="relative z-10">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wide bg-white/20 text-white px-3 py-1 rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            {featured.title}
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
            India's largest student hackathon with ₹50L+ in prizes. Build
            solutions for healthcare, education, agriculture, and smart cities.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <LuCalendar size={16} /> Jul 15-17, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <LuMapPin size={16} /> Online + 10 Cities
            </span>
            <span className="flex items-center gap-1.5">
              <LuUsers size={16} /> 10,000+ Participants
            </span>
          </div>
          <button className="mt-5 inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-85 transition">
            Register Now <LuArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsData.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
