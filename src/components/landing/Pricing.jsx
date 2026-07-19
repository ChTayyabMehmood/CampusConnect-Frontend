import Button from "../common/Button";
import { LuCheck } from "react-icons/lu";

const PricingCard = ({ pricing }) => {
  const { title, price, duration, description, features, buttonText } = pricing;
  return (
    <div className="w-110 p-10 border shadow-lg rounded-3xl border-text relative">
      {pricing.id === 2 && (
        <div className="bg-black text-white text-sm font-bold py-2 w-30 rounded-full text-center mb-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
          Popular
        </div>
      )}
      <div className="text-2xl font-bold mb-4">{title}</div>
      <span className="text-3xl font-semibold mr-1">{price}</span>
      <span className="text-md text-text">{duration}</span>

      <p className="text-text text-sm mt-4 mb-6 text-medium">{description}</p>
      <ul className="text-dark text-md mb-6 list-disc list-inside space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <LuCheck className="text-black mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <Button text={buttonText} black={pricing.id === 2 ? true : false} />
    </div>
  );
};

const Pricing = ({ pricingData }) => {
  return (
    <div>
      <div className="text-sm font-semibold text-center text-text mt-10">
        Pricing
      </div>
      <h2 className="text-5xl font-bold text-center">
        Simple, student-friendly pricing.
      </h2>
      <p className="text-center text-text font-normal text-lg mt-4">
        Start free and upgrade when you need more. No
        <br />
        hidden fees, no surprises.
      </p>

      <div className="flex justify-center gap-8 mt-12">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
