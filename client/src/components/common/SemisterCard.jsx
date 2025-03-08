import React from "react";

const CourseCard = ({ semester }) => {
  return (
    <button
      className="w-full border bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 justify-between"
      onClick={() => toggleSemester(semester)}
    >
      <h2 className="text-lg font-semibold">{semester}</h2>
    </button>
  );
};

export default CourseCard;
