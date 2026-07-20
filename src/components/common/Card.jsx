const Card = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 flex flex-col justify-center items-center p-4 rounded-lg gap-0.5 text-center">
      <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.04em]">
        Deadline
      </h3>
      <p className="text-base font-semibold text-gray-900">July 31, 2023</p>
      <p className="text-xs text-gray-500">4 days left</p>
    </div>
  );
};

export default Card;
