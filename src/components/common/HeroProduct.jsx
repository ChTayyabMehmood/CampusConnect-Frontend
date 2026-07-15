const HeroProduct = ({ icon, title, color, iconBg }) => {
  return (
    <div
      className="w-40 h-30 rounded-4xl flex flex-col items-center justify-center gap-2"
      style={{ backgroundColor: color }}
    >
      <div
        className="w-11 h-11 px-2 rounded-lg flex items-center justify-center text-white text-md"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <h3 className="font-primary text-sm font-semibold text-white">{title}</h3>
    </div>
  );
};

export default HeroProduct;
