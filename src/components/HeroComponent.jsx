import React from "react";
import HeroBadge from "../components/HeroBadge";
import Button from "../components/common/Button";
import { FaArrowRight } from "react-icons/fa";
import HeroProduct from "../components/common/HeroProduct";
import { LuGraduationCap } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { LuShield } from "react-icons/lu";
import StatCard from "../components/common/StatCard";

const HeroComponent = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center  mt-18">
      <HeroBadge
        text="Trusted by students from NUST, LUMS, FAST, IBA & 200+ colleges"
        border={true}
      />

      <h1 className="font-primary text-8xl font-semibold text-center mt-5">
        Discover opportunities
        <br /> beyond your campus <br /> bubble.
      </h1>

      <p className="font-primary text-text text-center mt-7 text-lg">
        The all-in-one platform for college students to find hackathons,
        <br />
        internships, and collaborative projects. Connect with peers from FAST,
        <br />
        NUST, LUMS, IBA, and universities worldwide.
      </p>
      <div className="flex items-center justify-center gap-4 mt-8 mb-4">
        <Button text="Get Started Free" icon={FaArrowRight} black={true} />
        <Button text="View Opportunities" black={false} />
      </div>

      <HeroBadge
        text="10,000+ students already connected · 500+ new opportunities weekly"
        border={false}
      />

      <div className="flex items-center justify-center gap-20 mt-10 mb-10">
        <HeroProduct
          icon={<LuGraduationCap />}
          title="Student"
          color="#D91A45"
          iconBg="#E74C6D"
        />

        <HeroProduct
          icon={<LuBrain />}
          title="Student"
          color="#7633E5"
          iconBg="#9762F1"
        />

        <HeroProduct
          icon={<RxPeople />}
          title="Student"
          iconBg="#5181EE"
          color="#215AE3"
        />

        <HeroProduct
          icon={<LuShield />}
          title="Student"
          color="#12AB9B"
          iconBg="#43C5B8"
        />
      </div>

      {/* Trusted By Universities */}
      <div className=" mt-15 border-y border-gray-300 w-screen flex flex-col items-center justify-center py-15">
        <p className="text-[#AFB3B9] text-sm font-semibold">
          Students from top universities trust CampusConnect
        </p>
        <ul className="flex items-center justify-center  text-[#AFB3B9] gap-10 mt-5 text-lg font-semibold">
          <li>NUST</li>
          <li>LUMS</li>
          <li>FAST</li>
          <li>IBA</li>
          <li>GIKI</li>
          <li>Comsats</li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-10 mb-10">
        <StatCard title="10K+" desc="Active Students" color="#E53146" />
        <StatCard title="500+" desc="Weekly Opportunities" color="#7430E2" />
        <StatCard title="200+" desc="Partner Universities" color="#2462EA" />
        <StatCard title="15+" desc="Countries" color="#0EB7BC" />
      </div>
    </div>
  );
};

export default HeroComponent;
