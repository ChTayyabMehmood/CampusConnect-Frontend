import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { LuExternalLink } from "react-icons/lu";
import { MdOutlineBookmarkBorder, MdBookmark } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOpportunityById, getRelatedOpportunities } from "../utils/fakeData";

const OpportunityDetail = () => {
  const { id } = useParams(); // Read /:id from the URL
  const navigate = useNavigate(); // For programmatic navigation
  const [isSaved, setIsSaved] = useState(false);

  // Fetch the opportunity data using the ID from URL
  const opportunity = getOpportunityById(parseInt(id));

  // Fetch related opportunities (for the "Similar opportunities" section)
  const relatedOpportunities = getRelatedOpportunities(parseInt(id));

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: opportunity.title,
          text: `Check out this opportunity: ${opportunity.title}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => {});
    }
  };

  // Handle case when opportunity is not found
  if (!opportunity) {
    return (
      <div className="max-w-200 mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Opportunity not found
        </h2>
        <p className="text-gray-500 mt-2">
          The opportunity you're looking for doesn't exist.
        </p>
        <Link
          to="/feed"
          className="inline-block mt-4 text-[#f06543] hover:underline"
        >
          ← Back to Feed
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-200 mx-auto px-6 py-20">
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.04em] bg-[#f06543]/10 text-[#f06543] px-3 py-1 rounded-full">
          {opportunity.type}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.04em] bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
          {opportunity.mode || opportunity.status}
        </span>
        {opportunity.status && opportunity.status !== opportunity.mode && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.04em] bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
            {opportunity.status}
          </span>
        )}
      </div>

      {/* Title & Organizer */}
      <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900">
        {opportunity.title}
      </h1>
      <p className="text-base text-gray-500 mt-1">by {opportunity.organizer}</p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-6">
        <Button
          iconLeft={<LuExternalLink className="w-3.5 h-3.5" />}
          text="Apply now"
          black={true}
          css="rounded-md px-5 py-2.5 text-sm font-semibold"
          onClick={() =>
            navigate(`/feed/opportunity/${opportunity.id}/apply`, {
              state: { opportunityTitle: opportunity.title },
            })
          }
        />

        <Button
          iconLeft={
            isSaved ? (
              <MdBookmark className="w-3.5 h-3.5" />
            ) : (
              <MdOutlineBookmarkBorder className="w-3.5 h-3.5" />
            )
          }
          text={isSaved ? "Saved" : "Save"}
          css="rounded-md px-5 py-2.5 text-sm font-semibold bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 transition"
          onClick={handleSave}
        />

        <Button
          iconLeft={<CiShare2 className="w-3.5 h-3.5" />}
          text="Share"
          css="rounded-md px-5 py-2.5 text-sm font-semibold bg-transparent text-gray-500 border border-gray-200 hover:bg-gray-50 transition"
          onClick={handleShare}
        />
      </div>

      {/* Deadline Alert - only show if daysLeft <= 7 */}
      {opportunity.daysLeft <= 7 && opportunity.daysLeft > 0 && (
        <div className="mt-6 p-4 rounded-lg border border-red-200 bg-red-50 flex items-start gap-3">
          <IoAlertCircleOutline className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-600">Closing soon</p>
            <p className="text-xs text-gray-500">
              Only {opportunity.daysLeft} days left to apply!
            </p>
          </div>
        </div>
      )}

      {/* Deadline Alert - if expired */}
      {opportunity.daysLeft === 0 && (
        <div className="mt-6 p-4 rounded-lg border border-gray-200 bg-gray-50 flex items-start gap-3">
          <IoAlertCircleOutline className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Applications Closed
            </p>
            <p className="text-xs text-gray-500">
              This opportunity is no longer accepting applications.
            </p>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Card
          title="Deadline"
          value={opportunity.deadline}
          sub={
            opportunity.daysLeft > 0
              ? `${opportunity.daysLeft} days left`
              : "Closed"
          }
        />
        <Card
          title="Mode"
          value={opportunity.mode || opportunity.status}
          sub={opportunity.location}
        />
        <Card
          title="Category"
          value={opportunity.type}
          sub={opportunity.participants}
        />
        <Card
          title="Posted by"
          value={opportunity.postedBy || opportunity.organizer}
          sub={opportunity.postedDate || "Recently"}
        />
      </div>

      {/* About Section */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.04em] mb-3">
          About this opportunity
        </p>
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {opportunity.fullDescription || opportunity.description}
        </p>
      </div>

      {/* Skills & Tags */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.04em] mb-3">
          Skills &amp; tags
        </p>
        <div className="flex flex-wrap gap-1.5">
          {opportunity.tags &&
            opportunity.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* How to Apply */}
      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.04em] mb-3">
          How to apply
        </p>
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {opportunity.howToApply ||
            "Register on the official portal. Shortlisted candidates will be notified via email."}
        </p>
      </div>

      {/* Similar Opportunities */}
      {relatedOpportunities && relatedOpportunities.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-900">
            Similar opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {relatedOpportunities.map((relOpp) => (
              <Link
                key={relOpp.id}
                to={`/feed/opportunity/${relOpp.id}`}
                className="block p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-semibold text-gray-900 tracking-[-0.016em]">
                  {relOpp.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{relOpp.organizer}</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                    {relOpp.mode || relOpp.status}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {relOpp.deadline
                      ? new Date(relOpp.deadline).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "TBD"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunityDetail;
