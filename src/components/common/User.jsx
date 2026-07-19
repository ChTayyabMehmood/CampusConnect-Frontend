import React from "react";

const User = ({ avatar, name, bio }) => {
  return (
    <div className="flex items-center gap-4 mt-4 cursor-pointer">
      <img
        src={avatar}
        alt="User Avatar"
        className="w-10 h-10 shrink-0 rounded-full object-cover ring-2 ring-gray-100"
      />
      <div className="flex flex-col min-w-0">
        <h3 className="font-medium text-gray-900 text-md leading-tight">
          {name}
        </h3>
        <p className="text-sm text-gray-500 truncate">{bio}</p>
      </div>
    </div>
  );
};

export default User;
