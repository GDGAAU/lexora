import React from "react";

const CourseCard = ({ semester }) => {
  return (
    <button className="border p-2 bg-white shadow-sm w-full">
      <div className="flex items-center justify-center h-full">
        <h2 className="font-semibold">{semester}</h2>
      </div>
    </button>
  );
};

export default CourseCard;
