// Trusted by students

const HeroBadge = ({ text, border }) => {
  return (
    <div
      className={`rounded-full border ${border ? "border-[#E5E7EB]" : "border-none"} bg-[#F9FAFB] px-4 py-2 flex items-center gap-2   `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#F06543]"></span>{" "}
      <span className="font-primary text-text text-sm text-medium">{text}</span>
    </div>
  );
};

export default HeroBadge;
