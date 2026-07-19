import User from "./common/User";
const mentors = [
  {
    id: 1,
    name: "Kashif Anwar",
    bio: "Senior React Native developer with 8 years of experience building cross-platform mobile apps for fintech startups.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Kashif&backgroundColor=b6e3f4",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    bio: "UX/UI designer and product strategist. Specializes in designing accessible, user-centric interfaces for ed-tech platforms.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&backgroundColor=ffdfbf",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    bio: "Backend architect and AWS expert. Passionate about building scalable microservices and mentoring junior engineers.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&backgroundColor=d1d4f9",
  },
  {
    id: 4,
    name: "Fatima Khan",
    bio: "Data scientist turned AI educator. Loves teaching machine learning fundamentals to students from non-CS backgrounds.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=c0aede",
  },
  {
    id: 5,
    name: "Vikram Singh",
    bio: "Full-stack developer and open-source contributor. Actively mentors students in hackathons and code sprints.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=ffdfbf",
  },
];

const RecommendedMentors = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-lg font-semibold">Recommended Mentors</h2>
        <p className="text-blue-400 font-medium"> View All</p>
      </div>
      {/* profile + fullName + bio */}
      {mentors.map((mentor) => (
        <User
          key={mentor.id}
          avatar={mentor.avatar}
          name={mentor.name}
          bio={mentor.bio}
        />
      ))}
      {/* end */}
    </div>
  );
};

export default RecommendedMentors;
