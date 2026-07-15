const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div
      className="w-full min-h-56 rounded-2xl border-l-2 bg-white p-7 shadow-md flex flex-col gap-4"
      style={{ borderLeftColor: color }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          color,
          backgroundColor: `${color}20`,
        }}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#111111]">{title}</h3>

      <p className="text-text leading-7">{description}</p>
    </div>
  );
};

export default FeatureCard;
