import { LuCheck } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";

const BuildForCard = ({ icon, header, title, description, points, color }) => {
  return (
    <div className="w-150 ">
      <div
        className={`h-12 ${color} rounded-t-4xl p-4 text-white font-bold text-sm flex items-center gap-2`}
      >
        <span>
          <LuSparkles size={20} />
        </span>
        {header}
      </div>
      <div className="h-50 p-4 rounded-b-4xl shadow-md ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm font-normal text-text">{description}</p>

        {/* tick list  */}

        <ul className="mt-4 text-dark text-md font-normal ">
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            {points[0]}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            {points[1]}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black">
              <LuCheck size={20} />
            </span>
            {points[2]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BuildForCard;
