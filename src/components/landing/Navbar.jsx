import logo from "../../assets/campusConnect.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" h-16 px-10 font-primary flex justify-between items-center ">
      <Link to="/">
        <img src={logo} alt="CampusConnect Logo" className="h-8" />
      </Link>

      <div>
        <ul className="flex gap-6 font-medium text-sm text-text ">
          <Link to="/feed">Feed</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/clubs">Clubs</Link>
          <Link to="/events">Events</Link>
          <Link to="/mentors">Mentors</Link>
        </ul>
      </div>

      {/* Button */}

      <div className="flex gap-4 font-semibold text-sm ">
        <button className=" font-primary text-text px-4 py-2 rounded">
          Log In
        </button>
        <button className="bg-black text-white rounded-full px-5 py-2 hover:bg-neutral-800 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
