import FeatureCard from "./common/FeatureCard";
import { CiSearch, CiChat1 } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import {
  LuHeartHandshake,
  LuMessageCircle,
  LuCalendarCheck,
  LuTrophy,
} from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

const features = [
  {
    title: "Opportunity Discovery",
    description:
      "Discover hackathons, internships, competitions, scholarships, and workshops from universities across Pakistan.",
    color: "#4F46E5", // Indigo
    icon: <CiSearch size={26} />,
  },
  {
    title: "Smart Team Matching",
    description:
      "Find teammates based on skills, interests, and project experience to build stronger teams.",
    color: "#0EA5E9", // Sky
    icon: <RxPeople size={26} />,
  },
  {
    title: "Student Portfolio",
    description:
      "Showcase your skills, projects, GitHub, LinkedIn, certifications, and achievements in one professional profile.",
    color: "#14B8A6", // Teal
    icon: <BsFillSuitcaseLgFill size={26} />,
  },
  {
    title: "College Communities",
    description:
      "Join university clubs and student communities to collaborate, learn, and participate in events.",
    color: "#F59E0B", // Amber
    icon: <LuHeartHandshake size={26} />,
  },
  {
    title: "Verified Student Network",
    description:
      "Connect with verified university students to ensure trusted and meaningful collaboration.",
    color: "#8B5CF6", // Violet
    icon: <LuMessageCircle size={26} />,
  },
  {
    title: "Smart Notifications",
    description:
      "Receive personalized alerts for opportunities, deadlines, and invitations that match your interests.",
    color: "#10B981", // Emerald
    icon: <IoMdNotificationsOutline size={26} />,
  },
  {
    title: "Saved Opportunities",
    description:
      "Bookmark hackathons, internships, and competitions so you never lose track of them.",
    color: "#EF4444", // Red
    icon: <LuCalendarCheck size={26} />,
  },
  {
    title: "Team Chat",
    description:
      "Collaborate with teammates through real-time messaging, resource sharing, and discussions.",
    color: "#06B6D4", // Cyan
    icon: <CiChat1 size={26} />,
  },
  {
    title: "Achievements",
    description:
      "Highlight hackathon wins, certifications, awards, and competition placements to build credibility.",
    color: "#EC4899", // Pink
    icon: <LuTrophy size={26} />,
  },
];

const FeatureComponent = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 text-center">
          Features
        </p>

        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold text-gray-900">
          Everything You Need to Build, Collaborate, and Grow
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-text leading-8">
          CampusConnect helps students discover opportunities, connect with
          talented peers, showcase their work, and collaborate on projects—all
          in one platform.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
