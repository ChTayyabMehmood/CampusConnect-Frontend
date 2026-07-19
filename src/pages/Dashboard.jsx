import Label from "../components/common/Label";
import { CATEGORIES } from "../utils/constant";
import FeedContainer from "../components/FeedContainer";
import { opportunities } from "../utils/constant";
import RecommendedMentors from "./../components/RecommendedMentors";
const Dashboard = () => {
  return (
    <div className="w-7xl mx-auto mt-20 flex gap-3">
      {/* div Left dashbaord content + right sidebar(recommed mentor + trending + quick links) */}

      {/* left side */}
      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">Discover</h1>
            <p className="text-lg text-gray-600 mt-3">
              Opportunities curated for you
            </p>
          </div>
          <span className="text-sm text-gray-500 mr-12">8 opportunities</span>
        </div>
        <div className="flex gap-3  mt-5">
          {CATEGORIES.map((category, index) => (
            <Label key={index}>{category}</Label>
          ))}
        </div>

        <div>
          {opportunities.map((opportunity) => (
            <FeedContainer key={opportunity.id} props={opportunity} />
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="w-1/4 h-full">
        <RecommendedMentors />
      </div>
    </div>
  );
};

export default Dashboard;
