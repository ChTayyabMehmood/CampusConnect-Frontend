import ReviewCard from "./ReviewCard";
const Testimonials = () => {
  const dataObj = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer at TechCorp",
      review:
        "CampusConnect has been a game-changer for me. The platform is user-friendly and has helped me connect with amazing opportunities.",
      rating: 5,
      color: "bg-purple-500",
      initials: "AH",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Marketing Specialist at MarketMinds",
      review:
        "I found my dream internship through CampusConnect. The platform made the application process seamless and efficient.",
      rating: 5,
      color: "bg-blue-500",
      initials: "JS",
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Data Analyst at DataWorks",
      review:
        "CampusConnect's networking features allowed me to connect with industry professionals and gain valuable insights.",
      rating: 5,
      color: "bg-green-500",
      initials: "MJ",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer at DesignHub",
      review:
        "The resources and guidance provided by CampusConnect helped me prepare for interviews and land my first job.",
      rating: 5,
      color: "bg-red-500",
      initials: "ED",
    },
    {
      id: 5,
      name: "David Wilson",
      designation: "Software Developer at CodeCrafters",
      review:
        "CampusConnect's mentorship program connected me with experienced professionals who guided me through my career journey.",
      rating: 5,
      color: "bg-yellow-500",
      initials: "DW",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      designation: "Product Manager at InnovateX",
      review:
        "I highly recommend CampusConnect to any student looking to explore career opportunities and build a strong professional network.",
      rating: 5,
      color: "bg-pink-500",
      initials: "SM",
    },
  ];

  return (
    <div>
      <div className="text-sm font-bold text-text mt-12 mb-3 text-center">
        Stories
      </div>
      <h2 className="text-5xl font-bold text-center mt-6">
        Loved by students across Pakistan.
      </h2>
      <p className="text-lg text-text mt-4 text-center mx-auto font-normal mb-4">
        See how CampusConnect is helping students discover <br /> opportunities
        and build their careers.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {dataObj.map((item) => (
          <ReviewCard
            key={item.id}
            name={item.name}
            designation={item.designation}
            review={item.review}
            rating={item.rating}
            color={item.color}
            initials={item.initials}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
