const SkillCard = ({ Icon, label }) => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border-2
                  bg-white text-gray-700 border-gray-200"
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};

export default SkillCard;
