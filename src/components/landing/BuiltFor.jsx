import BuiltForCard from "./BuiltForCard";
const BuiltFor = () => {
  const dataObj = [
    {
      icon: "",
      header: "Year 1-2",
      color: "bg-red-500",
      title: "For First & Second Year Students",
      description:
        "Discover your first hackathon, join coding clubs, and build your initial portfolio. Perfect for students at FAST, NUST, and other universities starting their tech journey.",
      points: [
        "Beginner-friendly hackathons and workshops",
        "Access to coding clubs and communities",
        "Guidance on building your first portfolio",
      ],
    },
    {
      icon: "",
      color: "bg-blue-500",
      header: "Year 3-4",
      title: "For Third & Final Year Students",
      description:
        "Land internships at top companies, participate in international competitions, and build a portfolio that stands out to recruiters.",
      points: [
        "Opportunities to intern at top companies",
        "Participation in international competitions",
        "Guidance on building a standout portfolio",
      ],
    },
    {
      icon: "",
      color: "bg-purple-500",
      header: "Clubs",
      title: "For Club Leaders & Organizers",
      description:
        "Lead your coding club, organize events, and connect with other student leaders across the university.",
      points: [
        "Leadership opportunities in coding clubs",
        "Access to resources for event planning",
        "Networking with other club organizers",
      ],
    },
    {
      icon: "",
      header: "Global",
      color: "bg-green-500",
      title: "For International Students",
      description:
        "Connect with students from around the world, participate in global hackathons, and expand your network beyond campus.",
      points: [
        "Opportunities to participate in international hackathons",
        "Networking with students from different countries",
        "Access to global resources and learning materials",
      ],
    },
  ];

  return (
    <div>
      <div className="py-24 px-6 text-center">
        <h3 className="text-sm text-text font-bold ">For Everyone</h3>
        <h2 className="text-5xl font-bold mt-6">
          Built for every type of student.
        </h2>
        <p className="text-text text-lg mt-5 max-w-2xl mx-auto  text-normal">
          Whether you're a first-year finding your path or a final-year landing
          <br />
          internships, CampusConnect adapts to your journey.
        </p>
      </div>

      <div className="flex flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {dataObj.map((item, index) => (
          <BuiltForCard
            key={index}
            icon={item.icon}
            header={item.header}
            title={item.title}
            description={item.description}
            points={item.points}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default BuiltFor;
