import { LuStar } from "react-icons/lu";
const ReviewCard = ({ name, designation, review, rating, color, initials }) => {
  return (
    <div className="w-100 h-55  shadow-lg rounded-lg p-6 border-0 border-text  bg-white">
      {/* 5 start + Reviews + [icon + Name +destination] */}
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-500 ">
          <LuStar />
          <LuStar />
          <LuStar />
          <LuStar />
          <LuStar />
        </div>
      </div>
      <p className="text-gray-700 mb-4">"{review}"</p>
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-full mr-3 ${color} flex items-center justify-center text-white font-bold`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
