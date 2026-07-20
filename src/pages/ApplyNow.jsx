import React, { useState, useRef } from "react";
import { FaCheckCircle, FaPaperclip, FaTimes, FaFile } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { getTitlebyid } from "../utils/fakeData";
const ApplyNow = () => {
  const { id } = useParams();
  const opportunityTitle = getTitlebyid(parseInt(id));
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    projectIdea: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (10MB = 10 * 1024 * 1024 bytes)
    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB limit");
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    // Validate file type (accept PDF, DOC, DOCX, TXT)
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    if (!allowedTypes.includes(file.type)) {
      setFileError("Please upload a PDF, DOC, DOCX, or TXT file");
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    setFileError("");
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with form data including file
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("teamName", formData.teamName);
    formDataToSend.append("projectIdea", formData.projectIdea);
    if (resumeFile) {
      formDataToSend.append("resume", resumeFile);
    }

    // Log the data (for demo purposes)
    console.log("Submitting application with:", {
      ...formData,
      resume: resumeFile ? resumeFile.name : "No file uploaded",
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Success screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-lg w-full text-center shadow-sm">
          <FaCheckCircle className="w-16 h-16 text-[#f06543] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 tracking-[-0.02em]">
            Application Submitted!
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            You've successfully applied for <strong> {opportunityTitle}</strong>
            .
            {resumeFile && (
              <span className="block mt-1 text-xs text-gray-400">
                📎 {resumeFile.name} uploaded
              </span>
            )}
            <br />
            We'll notify you via email about the next steps.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 bg-gray-900 text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:opacity-85 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition mb-6"
        >
          <IoArrowBack className="w-4 h-4" />
          Back
        </button>

        {/* Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900 tracking-[-0.02em]">
              Apply Now
            </h1>
            <p className="text-sm text-gray-500 mt-1">{opportunityTitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>

            {/* Team Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
                Team Name (optional)
              </label>
              <input
                type="text"
                name="teamName"
                placeholder="Your team name"
                value={formData.teamName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition"
              />
            </div>

            {/* Project Idea */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
                Project Idea *
              </label>
              <textarea
                name="projectIdea"
                required
                rows="4"
                placeholder="Briefly describe your solution..."
                value={formData.projectIdea}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#f06543]/30 focus:border-[#f06543] transition resize-y"
              />
            </div>

            {/* File Upload - Resume */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.04em] block mb-1">
                Resume / Documents (optional)
              </label>
              <div className="flex items-center gap-3">
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />

                {/* Custom upload button */}
                {!resumeFile ? (
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                  >
                    <FaPaperclip className="w-4 h-4" />
                    Choose file
                  </label>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#f06543]/30 bg-[#f06543]/5 text-sm text-gray-700 flex-1 min-w-0">
                    <FaFile className="w-4 h-4 text-[#f06543] shrink-0" />
                    <span className="truncate flex-1">{resumeFile.name}</span>
                    <span className="text-xs text-gray-400 shrink-0">
                      {(resumeFile.size / 1024).toFixed(1)} KB
                    </span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-0.5 hover:bg-gray-200 rounded-full transition shrink-0"
                    >
                      <FaTimes className="w-4 h-4 text-gray-400 hover:text-gray-700" />
                    </button>
                  </div>
                )}

                {/* Clear button when file is selected */}
                {resumeFile && (
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="text-xs text-gray-400 hover:text-gray-700 transition underline"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Helper text */}
              <p className="text-xs text-gray-400 mt-1.5">
                Upload PDF, DOC, DOCX, or TXT (Max 10MB)
              </p>

              {/* Error message */}
              {fileError && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                  {fileError}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f06543] text-white font-semibold text-sm py-3 rounded-lg hover:opacity-85 transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By applying, you agree to our terms and conditions.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
