// utils/colors.js

export const typeColors = {
  Hackathon: "bg-red-50 text-red-600 border-red-200",
  Internship: "bg-blue-50 text-blue-600 border-blue-200",
  Workshop: "bg-purple-50 text-purple-600 border-purple-200",
  Scholarship: "bg-teal-50 text-teal-600 border-teal-200",
  Fellowship: "bg-rose-50 text-rose-600 border-rose-200",
  Competition: "bg-amber-50 text-amber-600 border-amber-200",
  Mentorship: "bg-indigo-50 text-indigo-600 border-indigo-200",
  Conference: "bg-violet-50 text-violet-600 border-violet-200",
};

export const statusColors = {
  Online: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Offline: "bg-gray-50 text-gray-600 border-gray-200",
  Hybrid: "bg-amber-50 text-amber-600 border-amber-200",
  Virtual: "bg-emerald-50 text-emerald-600 border-emerald-200",
  InPerson: "bg-gray-50 text-gray-600 border-gray-200",
  Live: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Closed: "bg-gray-100 text-gray-400 border-gray-200",
};

export const statusDotColors = {
  Online: "bg-green-500",
  Virtual: "bg-green-500",
  Live: "bg-green-500",
  Hybrid: "bg-amber-500",
  Closed: "bg-gray-400",
  Offline: "bg-gray-500",
  InPerson: "bg-gray-500",
};

export const tagColors = {
  // Tech Tags
  Web3: "bg-blue-50 text-blue-600 border-blue-200",
  "AI/ML": "bg-purple-50 text-purple-600 border-purple-200",
  "Open Innovation": "bg-orange-50 text-orange-600 border-orange-200",
  React: "bg-cyan-50 text-cyan-600 border-cyan-200",
  "Node.js": "bg-green-50 text-green-600 border-green-200",
  MongoDB: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Python: "bg-blue-50 text-blue-600 border-blue-200",
  JavaScript: "bg-yellow-50 text-yellow-600 border-yellow-200",
  TypeScript: "bg-blue-50 text-blue-600 border-blue-200",
  Tailwind: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Figma: "bg-pink-50 text-pink-600 border-pink-200",
  "Design Systems": "bg-indigo-50 text-indigo-600 border-indigo-200",
  Prototyping: "bg-amber-50 text-amber-600 border-amber-200",
  Research: "bg-slate-50 text-slate-600 border-slate-200",
  STEM: "bg-cyan-50 text-cyan-600 border-cyan-200",
  International: "bg-violet-50 text-violet-600 border-violet-200",

  // Domain Tags
  SWE: "bg-blue-50 text-blue-600 border-blue-200",
  Product: "bg-purple-50 text-purple-600 border-purple-200",
  Design: "bg-pink-50 text-pink-600 border-pink-200",
  FinTech: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Social Impact": "bg-rose-50 text-rose-600 border-rose-200",
  "Open Source": "bg-orange-50 text-orange-600 border-orange-200",
  ML: "bg-purple-50 text-purple-600 border-purple-200",
  "Signal Processing": "bg-indigo-50 text-indigo-600 border-indigo-200",

  // Scholarship Tags
  "Merit-based": "bg-yellow-50 text-yellow-600 border-yellow-200",
  "Need-based": "bg-orange-50 text-orange-600 border-orange-200",
  "UG/PG": "bg-green-50 text-green-600 border-green-200",
};

export const deadlineColors = {
  closing: "text-red-600",
  normal: "text-gray-500",
  closed: "text-gray-400",
};

// Helper functions
export const getDeadlineColor = (deadline) => {
  if (!deadline) return deadlineColors.normal;
  if (deadline === "Closed") return deadlineColors.closed;
  if (deadline.includes("left") || deadline === "Tomorrow")
    return deadlineColors.closing;
  return deadlineColors.normal;
};

export const getTypeColor = (type) => {
  return typeColors[type] || "bg-gray-100 text-gray-600 border-gray-200";
};

export const getStatusColor = (status) => {
  return statusColors[status] || "bg-gray-100 text-gray-600 border-gray-200";
};

export const getTagColor = (tag) => {
  return tagColors[tag] || "bg-gray-100 text-gray-600 border-gray-200";
};

export const getStatusDotColor = (status) => {
  return statusDotColors[status] ?? "bg-green-500";
};
