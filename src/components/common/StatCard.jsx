const StatCard = ({ title, desc, color }) => {
  return (
    <div className="flex flex-col gap-4 w-80 h-40 justify-center items-center bg-white ">
      <div
        className=" w-12 h-1 px-px "
        style={{ backgroundColor: color }}
      ></div>
      <h1 className="font-primary text-4xl font-bold text-center mt-5">
        {title}
      </h1>
      <p className="font-primary text-text text-sm font-normal">{desc}</p>
    </div>
  );
};

export default StatCard;
