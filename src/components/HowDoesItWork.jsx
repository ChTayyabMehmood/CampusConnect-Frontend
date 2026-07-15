const HowDoesItWork = () => {
  return (
    <div>
      <h3 className="text-center font-semibold text-sm text-text ">
        How Does It Work?
      </h3>
      <h2 className="text-5xl font-bold text-center text-black mt-9">
        Get started in minutes and unlock opportunities <br></br> across
        colleges.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
        <div className="flex flex-col justify-center items-center mt-9">
          <div className="text-xl font-bold text-center text-white px-4 py-2 rounded-full bg-black mt-9">
            1
          </div>

          <h3 className="text-xl font-bold text-center text-black mt-9">
            Create your profile
          </h3>

          <p className="text-center text-text text-md font-normal mt-4">
            Sign up with your college email. Add your skills, projects, and
            interests to build your professional identity.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-9">
          <div className="text-xl font-bold text-center text-white px-4 py-2 rounded-full bg-black mt-9">
            2
          </div>

          <h3 className="text-xl font-bold text-center text-black mt-9">
            Discover & connect
          </h3>

          <p className="text-center text-md font-normal text-text mt-4">
            Browse opportunities, find teammates, and join communities. Save
            what interests you and apply directly.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-9">
          <div className="text-xl font-bold text-center text-white px-4 py-2 rounded-full bg-black mt-9">
            3
          </div>

          <h3 className="text-xl font-bold text-center text-black mt-9">
            Grow & succeed
          </h3>

          <p className="text-center text-md font-normal text-text mt-4">
            Participate in events, build projects, and grow your network.
            Showcase your achievements and land opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
