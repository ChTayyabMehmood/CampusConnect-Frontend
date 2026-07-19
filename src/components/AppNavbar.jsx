import logo from "../assets/campusConnect.png";
import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
const AppNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="border-b border-gray-200">
      <div className="w-7xl mx-auto h-20 font-primary flex justify-between items-center ">
        <div className="flex gap-10 items-center ">
          <img src={logo} alt="CampusConnect Logo" className="h-8" />

          <ul className="flex gap-6 font-medium text-md text-gray-700">
            <li className="hover:text-black cursor-pointer transition-colors">
              Feed
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Teams
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Clubs
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Events
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Mentors
            </li>
          </ul>
        </div>

        {/* SearchBar */}
        <div className="relative bg-white rounded-full w-90 border border-gray-200 hover:border-gray-400 transition-colors">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-gray-700 w-full py-2 pl-4 pr-10 placeholder:text-gray-400 focus:outline-none"
          />
          <IoIosSearch
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="bg-black flex items-center gap-2 text-white rounded-full px-5 py-2 hover:bg-neutral-800 transition-colors text-sm font-semibold">
            <LuPlus size={18} />
            Post
          </button>

          <div className="p-2 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all cursor-pointer">
            <FiBookmark size={20} className="text-gray-700" />
          </div>

          <div className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 transition-colors cursor-pointer overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&backgroundColor=b6e3f4"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
