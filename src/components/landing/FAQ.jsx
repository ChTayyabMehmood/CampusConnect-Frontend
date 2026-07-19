import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
  const faqsData = [
    {
      id: 1,
      question: "Who can use CampusConnect?",
      answer:
        "CampusConnect is built for college students worldwide. Whether you're studying at NUST, LUMS, FAST, IBA, or any other university in Pakistan or internationally, you can join. We verify students through their college email addresses.",
    },
    {
      id: 2,
      question: "Is CampusConnect free to use?",
      answer:
        "Yes! Our Free plan gives you access to unlimited opportunity browsing, basic profile features, and the ability to save up to 20 opportunities. For advanced features like unlimited saves, custom portfolios, and priority mentorship, you can upgrade to Pro for Rs. 499/month.",
    },
    {
      id: 3,
      question: "How do I verify my college identity?",
      answer:
        "Simply sign up with your college email address (e.g., yourname@nust.edu.pk, yourname@lums.edu.pk). We'll send you a verification email to confirm your identity. This ensures that only real students can access the platform.",
    },
    {
      id: 4,
      question: "Can I find international opportunities?",
      answer:
        "Absolutely! CampusConnect lists opportunities from around the world. You'll find global hackathons, remote internships, and international competitions alongside local Pakistani opportunities. We have students from 15+ countries on the platform.",
    },
    {
      id: 5,
      question: "How does team formation work?",
      answer:
        "You can post a team request for a specific hackathon or competition, listing the skills you need. Other students can apply to join your team, or you can invite specific students based on their profiles. Once your team is formed, you get access to real-time chat to coordinate.",
    },
    {
      id: 6,
      question: "Can our college club use CampusConnect?",
      answer:
        "Yes! Our Club plan is designed for student organizations like ACM chapters, IEEE societies, and tech clubs. You get a verified club page, the ability to promote events to all students, member management tools, and analytics. Contact us for a demo.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-16">
        Frequently asked questions.
      </h2>

      <p className="text-center text-text font-normal text-lg mt-4">
        Everything you need to know about CampusConnect.
      </p>

      {/* FAQs accordion */}
      <div className="flex flex-col gap-4 mt-12 w-3/5 mx-auto">
        {faqsData.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="text-lg font-semibold my-1">{faq.question}</h3>

              <button type="button">
                {openId === faq.id ? (
                  <MdOutlineKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
            </div>

            {openId === faq.id && (
              <p className="my-4 text-text">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
