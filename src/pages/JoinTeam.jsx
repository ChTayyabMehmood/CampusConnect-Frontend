import { IoArrowBack } from "react-icons/io5";
import { FaUsers, FaEnvelope, FaUser, FaComment } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { teamsData, getTeambyId } from "../utils/fakeData";
const JoinTeam = () => {
  const { id } = useParams(); // Get the team ID from the URL
  const team = getTeambyId(id); // Fetch the team data based on the ID

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link
        to="/teams"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition mb-6"
      >
        <IoArrowBack className="w-4 h-4" />
        Back to Teams
      </Link>

      {/* Main Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-[-0.02em]">
            Join Team
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Request to join{" "}
            <span className="font-medium text-gray-700">{team.title}</span>
          </p>
        </div>

        {/* Team Info Summary */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-700">
              Team currently has <strong>{team.members}</strong> members,
              looking for <strong>{team.needed}</strong> more
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {team.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs font-semibold bg-white text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              Full Name *
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              Email Address *
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>
          </div>

          {/* Role/Interest */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              What role are you interested in? *
            </label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition appearance-none">
              <option value="">Select a role...</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="ml">Machine Learning Engineer</option>
              <option value="devops">DevOps Engineer</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
              Why do you want to join this team? *
            </label>
            <div className="relative">
              <FaComment className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                rows="4"
                placeholder="Tell them about your skills, experience, and why you'd be a great fit..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition resize-y"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f06543] text-white font-semibold text-sm py-3 rounded-lg hover:opacity-85 transition shadow-sm"
          >
            Send Join Request
          </button>

          <p className="text-xs text-gray-400 text-center">
            The team leader will review your request and get back to you via
            email.
          </p>
        </form>
      </div>
    </div>
  );
};

export default JoinTeam;
