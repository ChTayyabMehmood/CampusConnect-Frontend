import BuildForCard from "./BuildForCard";
const BuiltForComponent = () => {
  return (
    <div>
      <div className="py-24 px-6 text-center">
        <h3 className="text-sm text-text font-bold ">For Everyone</h3>
        <h2 className="text-5xl font-bold mt-6">
          Built for every type of student.
        </h2>
        <p className="text-text text-lg mt-5 max-w-2xl mx-auto  text-normal">
          Whether you're a first-year finding your path or a final-year landing
          <br />
          internships, CampusConnect adapts to your journey.
        </p>
      </div>

      <div className="flex  justify-center gap-6">
        <BuildForCard />
        <BuildForCard />
      </div>
    </div>
  );
};

export default BuiltForComponent;
