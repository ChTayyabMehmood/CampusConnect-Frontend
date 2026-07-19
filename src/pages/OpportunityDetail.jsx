import Button from "../components/common/Button";
const OpportunityDetail = () => {
  return (
    <div className="w-7xl mx-auto px-30 border-2 border-black">
      <h1 className="text-4xl font-bold ">Build for India Hackathon 2026</h1>
      <p>by SIH & Partners</p>

      <Button text="Apply Now" black={true} css="border-lg w-30" />
    </div>
  );
};

export default OpportunityDetail;
