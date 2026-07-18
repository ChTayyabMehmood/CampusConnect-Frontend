import { SKILLS } from "../../utils/constant";
import SkillCard from "./SkillCard";
const Skill = () => {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Select your skills</h2>
        <p className="text-gray-500 mt-2">
          Choose skills that represent your expertise. Select as many as you
          like.
        </p>
        <p className="text-sm text-gray-400 mt-1">0 skills selected</p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {SKILLS.map(({ id, label, icon: Icon }) => (
          <SkillCard key={id} label={label} icon={Icon} />
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
        👆 Click on skills above to select them
      </p>
    </div>
  );
};

export default Skill;
