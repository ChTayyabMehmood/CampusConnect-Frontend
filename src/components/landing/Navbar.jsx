import logo from "../../assets/campusConnect.png";
const Navbar = () => {
  return (
    <div className=" h-16 px-10 font-primary flex justify-between items-center ">
      <img src={logo} alt="CampusConnect Logo" className="h-8" />

      <div>
        <ul className="flex gap-6 font-medium text-sm text-text ">
          <li>Feed</li>
          <li>Teams</li>
          <li>Clubs</li>
          <li>Events</li>
          <li>Mentors</li>
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
