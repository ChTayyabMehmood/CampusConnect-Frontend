import React from "react";
import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import FeatureComponent from "../components/FeatureComponent";
import HowDoesItWork from "../components/HowDoesItWork";
import BuiltForComponent from "../components/BuiltForComponent";
import StoriesComponents from "../components/StoriesComponents";
import PricingCard from "../components/PricingCard";
const Landing = () => {
  const PricingObj = [
    {
      id: 1,
      title: "Free",
      price: "Rs. 0",
      duration: "/month",
      description: "Perfect for students just getting started.",
      features: [
        "Unlimited opportunity browsing",
        "Save up to 20 opportunities",
        "Basic profile and portfolio",
        "Join up to 3 communities",
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Pro",
      price: "Rs. 499",
      duration: "/month",
      description: "For serious students looking to maximize opportunities.",
      features: [
        "Everything in Free",
        "Unlimited saved opportunities",
        "Advanced portfolio with custom domain",
        "Priority mentorship matching",
        "Unlimited communities",
        "Email notifications & reminders",
      ],
      buttonText: "Start Pro Trial",
    },
    {
      id: 3,
      title: "Club",
      price: "Rs. 2,999",
      duration: "/month",
      description: "For student clubs and organizations.",
      features: [
        "Everything in Pro",
        "Verified club page",
        "Promote events to all students",
        "Member management dashboard",
        "Analytics and insights",
        "Priority support",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="w-7xl  mx-auto overflow-hidden">
      <Navbar />
      <HeroComponent />
      <FeatureComponent />
      <HowDoesItWork />
      <BuiltForComponent />
      <StoriesComponents />
      <div>
        <div className="text-sm font-semibold text-center text-text mt-10">
          Pricing
        </div>
        <h2 className="text-5xl font-bold text-center ">
          Simple, student-friendly pricing.
        </h2>
        <p className="text-center text-text font-normal text-lg mt-4">
          Start free and upgrade when you need more. No
          <br />
          hidden fees, no surprises.
        </p>

        <div className="flex  justify-center gap-8 mt-12">
          {PricingObj.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </div>

      <div className="mb-111"></div>
    </div>
  );
};

export default Landing;
