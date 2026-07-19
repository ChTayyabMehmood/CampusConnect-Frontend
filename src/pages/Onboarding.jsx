import Button from "../components/common/Button";
import {
  LuGraduationCap,
  LuUsers,
  LuBrain,
  LuChevronLeft,
  LuChevronRight,
  LuUser,
  LuBuilding,
  LuCalendar,
  LuCode,
  LuPenTool,
  LuDatabase,
  LuCloud,
  LuShield,
  LuTrendingUp,
  LuBriefcase,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";
import PersonalDetails from "./../components/onBoarding/PersonalDetails";
import Skill from "./../components/onBoarding/Skill";
import { useState } from "react";
const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-2xl mx-auto mt-10 ">
      {/* steps 1 + 2 +  3 +4  */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to CampusConnect
      </h1>
      <div className="flex justify-between items-center relative mb-8">
        {/* progress line behind */}
        <div className="absolute left-0 top-4 h-0.5 w-full bg-gray-200 -z-10" />
        <div
          className="absolute left-0 top-4 h-0.5 w-1/4 bg-black -z-10"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        />
        {/* progress fill */}
        {[1, 2, 3, 4].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              ${index < 1 ? "bg-black text-white" : "bg-white text-gray-400 border-2 border-gray-300"}`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-1 text-gray-500">
              {step === 1 && "Role"}
              {step === 2 && "Details"}
              {step === 3 && "Skills"}
              {step === 4 && "Review"}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1 Contents */}

      {currentStep === 1 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12">
            How will you use CampusConnect?
          </h2>
          <p className="text-gray-600">
            Choose your role to personalize your experience.
          </p>

          {/* Card */}

          <div className="flex gap-6 mt-6 justify-center">
            {/* Student Card */}
            <div className="w-56 h-80 rounded-3xl border border-gray-200 bg-white p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:border-blue-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600 text-2xl">
                <LuGraduationCap />
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Student</h3>

                <p className="text-sm leading-6 text-gray-600">
                  Discover opportunities, join project teams, participate in
                  hackathons, and connect with students across campuses.
                </p>
              </div>
            </div>

            {/* Clubs Card */}
            <div className="w-56 h-80 rounded-3xl border border-gray-200 bg-white p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:border-green-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-green-100 text-green-600 text-2xl">
                <LuUsers />
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Club</h3>

                <p className="text-sm leading-6 text-gray-600">
                  Showcase your club, recruit members, organize events, and
                  collaborate with students from universities nationwide.
                </p>
              </div>
            </div>

            {/* Mentor Card */}
            <div className="w-56 h-80 rounded-3xl border border-gray-200 bg-white p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:border-purple-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-100 text-purple-600 text-2xl">
                <LuBrain />
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">Mentor</h3>
                <p className="text-sm leading-6 text-gray-600">
                  Guide students, share industry knowledge, review projects, and
                  help the next generation grow professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page of onboarding */}
      {currentStep === 2 && <PersonalDetails />}

      {/* page 3  */}

      {currentStep === 3 && <Skill />}
      {/* Select your Skills */}

      {/* Page 4  */}
      {currentStep === 4 && (
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Review & Complete
            </h2>
            <p className="text-gray-500 mt-2">
              Verify your details before submitting.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
                <LuUser className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Role
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Not selected
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Name
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  College
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Branch
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Year
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Email
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Location
                </p>
                <p className="text-gray-900 font-medium">—</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-2">
                Skills (0)
              </p>
              <p className="text-gray-400 text-sm">No skills selected</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              By clicking "Complete" you agree to our{" "}
              <a href="#" className="text-black underline hover:no-underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-black underline hover:no-underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-12 mx-auto ">
        {currentStep == 1 && (
          <Button
            text="Continue"
            black={true}
            css="w-full"
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
          />
        )}
        {currentStep >= 2 && (
          <>
            <Button
              text="Back"
              iconLeft={<LuChevronLeft />}
              css="w-full"
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            />
            <Button
              text="Continue"
              black={true}
              css="w-full"
              iconRight={<LuChevronRight />}
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
