import { LuCheck } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";

const BuildForCard = () => {
  return (
    <div className="w-185 ">
      <div className="h-12 bg-red-500 rounded-t-4xl p-4 text-white font-bold text-sm flex items-center gap-2">
        <span>
          <LuSparkles size={20} />
        </span>
        Year 1-2
      </div>
      <div className="h-50 p-4 rounded-b-4xl shadow-md ">
        <h3 className="text-2xl font-semibold">
          For First & Second Year Students
        </h3>
        <p className="mt-2 text-sm font-normal text-text">
          Discover your first hackathon, join coding clubs, and build your
          initial portfolio. Perfect for students at FAST, NUST, and other
          universities starting their tech journey.
        </p>

        {/* tick list  */}

        <ul className="mt-4 text-dark text-md font-normal ">
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            Beginner-friendly hackathons and workshops
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            Join college tech communities and clubs
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            Find teammates for your first projects portfolio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BuildForCard;
