import Button from "./common/Button";
import { LuCheck } from "react-icons/lu";

const PricingCard = ({ pricing }) => {
  // if id=2 there is popular tag on top of the card
  const { title, price, duration, description, features, buttonText } = pricing;
  return (
    <div className="w-110 p-10 border shadow-lg rounded-3xl border-text relative">
      {pricing.id === 2 && (
        <div className="bg-black text-white text-sm font-bold py-2  w-30 rounded-full text-center mb-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
          Popular
        </div>
      )}
      <div className="text-2xl font-bold mb-4">{title}</div>
      <span className="text-3xl font-semibold mr-1">{price}</span>
      <span className="text-md text-text">{duration}</span>

      <p className="text-text text-sm mt-4 mb-6 text-medium">{description}</p>
      <ul className="text-dark text-md mb-6 list-disc list-inside space-y-2">
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[0]}
        </li>
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[1]}
        </li>
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[2]}
        </li>
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[3]}
        </li>
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[4]}
        </li>
        <li className="flex items-center">
          <LuCheck className="text-black mr-2" />
          {features[5]}
        </li>
      </ul>

      <Button text={buttonText} black={pricing.id === 2 ? true : false} />
    </div>
  );
};

export default PricingCard;
