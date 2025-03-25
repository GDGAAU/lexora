import React from "react";
import Layout from "../../layouts/Layout";
const CourseCard = ({ semester }) => {
  return (
    <Layout>
      <button
        className="w-full border bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 justify-between"
        onClick={() => toggleSemester(semester)}
      >
        <h2 className="text-lg font-semibold">{semester}</h2>
      </button>
    </Layout>
  );
};

export default CourseCard;
