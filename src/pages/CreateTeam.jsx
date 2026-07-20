import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import CreateTeamCard from "../components/CreateTeamCard";

const CreateTeam = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link
        to="/feed/teams"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition mb-6"
      >
        <IoArrowBack className="w-4 h-4" />
        Back to Teams
      </Link>

      {/* Create Team Form */}
      <CreateTeamCard />
    </div>
  );
};

export default CreateTeam;
