import React from "react";
import { LuSearch } from "react-icons/lu";
import MentorCard from "../components/MentorCard";

const Mentors = () => {
  const mentorsData = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "SWE @ Google",
      college: "IIT Bombay",
      skills: ["React", "System Design", "Interview Prep"],
      bio: "3 years at Google working on Search. Happy to help with interview prep and system design.",
      availability: "Weekends",
      sessions: 45,
      rating: 4.9,
      avatar: "Priya",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "ML Engineer @ Microsoft",
      college: "IISc Bangalore",
      skills: ["Python", "Machine Learning", "PyTorch"],
      bio: "Working on Azure AI services. Can guide on ML projects and research paper writing.",
      availability: "Evenings",
      sessions: 32,
      rating: 4.8,
      avatar: "Rahul",
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Product Designer @ Flipkart",
      college: "NID Ahmedabad",
      skills: ["UI/UX Design", "Figma", "Design Systems"],
      bio: "Led design for Flipkart Mini. Portfolio reviews and design career guidance.",
      availability: "Flexible",
      sessions: 28,
      rating: 4.9,
      avatar: "Anjali",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Founding Engineer @ Razorpay",
      college: "BITS Pilani",
      skills: ["Node.js", "System Design", "Startups"],
      bio: "Built payment infrastructure from scratch. Happy to discuss startups and backend architecture.",
      availability: "Weekdays",
      sessions: 38,
      rating: 4.7,
      avatar: "Vikram",
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Data Scientist @ Amazon",
      college: "NIT Trichy",
      skills: ["Python", "Machine Learning", "SQL"],
      bio: "Working on recommendation systems. Can help with data science interviews and projects.",
      availability: "Weekends",
      sessions: 22,
      rating: 4.8,
      avatar: "Neha",
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "iOS Developer @ Uber",
      college: "IIIT Hyderabad",
      skills: ["Swift", "iOS", "Mobile Dev"],
      bio: "Building rider experience at Uber. Happy to guide on mobile development and iOS career path.",
      availability: "Evenings",
      sessions: 18,
      rating: 4.6,
      avatar: "Arjun",
    },
    {
      id: 7,
      name: "Kavya Nair",
      role: "SWE @ Atlassian",
      college: "VIT Vellore",
      skills: ["React", "TypeScript", "Frontend"],
      bio: "Working on Jira frontend. Can help with frontend architecture and React best practices.",
      availability: "Flexible",
      sessions: 25,
      rating: 4.9,
      avatar: "Kavya",
    },
    {
      id: 8,
      name: "Aditya Joshi",
      role: "DevOps @ Netflix",
      college: "IIT Delhi",
      skills: ["AWS", "Docker", "Kubernetes"],
      bio: "Scaling streaming infrastructure. Happy to guide on cloud computing and DevOps practices.",
      availability: "Weekends",
      sessions: 30,
      rating: 4.7,
      avatar: "Aditya",
    },
  ];

  const skillsFilter = [
    "All Skills",
    "React",
    "Python",
    "Machine Learning",
    "UI/UX Design",
    "System Design",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mentorship</h1>
        <p className="text-sm text-gray-500 mt-1">
          Connect with seniors and industry professionals for guidance
        </p>
      </div>

      {/* Search Bar + Filter (Static UI) */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex-1 min-w-[280px] relative">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search by name, skill, or company..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
          />
        </div>
        <select className="px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition appearance-none min-w-[160px]">
          {skillsFilter.map((skill) => (
            <option
              key={skill}
              value={skill === "All Skills" ? "" : skill.toLowerCase()}
            >
              {skill}
            </option>
          ))}
        </select>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentorsData.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
