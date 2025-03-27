import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import Layout from "../layouts/Layout";

function Materials() {
  const { department, course } = useParams();
  const [expandedMenus, setExpandedMenus] = useState({ courses: false });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <Layout>
      <div className="relative w-full min-h-screen bg-gray-50">
        {/* Header */}
        <div className="w-full h-42 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-12 border-b shadow-md">
          <h2 className="text-3xl font-semibold">Learning Materials</h2>
        </div>

        {/* Content */}
        <div className="bg-white w-full max-w-6xl mx-auto my-10 p-8 rounded-lg shadow-lg border">
          <h2 className="font-semibold text-2xl text-gray-800">
            {department} : {course}
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions...
          </p>

          {/* Course Materials Button */}
          <div className="bg-indigo-100 p-4 rounded-lg">
            <button
              onClick={() => toggleMenu("courses")}
              className="flex items-center justify-between w-full text-lg font-semibold text-indigo-700 hover:text-indigo-900 transition-all duration-300"
            >
              <span>Course Materials</span>
              {expandedMenus.courses ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Course Materials Dropdown */}
          {expandedMenus.courses && (
            <div className="mt-4 space-y-3">
              <Link
                to="/organicchemistry"
                className="flex items-center bg-white border p-4 rounded-lg shadow-sm hover:bg-indigo-50 transition"
              >
                <PiExamFill className="text-indigo-500 mr-3" />
                <span className="text-gray-800 font-medium">Notes</span>
              </Link>
              <Link
                to="/exams"
                className="flex items-center bg-white border p-4 rounded-lg shadow-sm hover:bg-indigo-50 transition"
              >
                <PiExamFill className="text-indigo-500 mr-3" />
                <span className="text-gray-800 font-medium">Exams</span>
              </Link>
              <Link
                to="/exercises"
                className="flex items-center bg-white border p-4 rounded-lg shadow-sm hover:bg-indigo-50 transition"
              >
                <FaQuestionCircle className="text-indigo-500 mr-3" />
                <span className="text-gray-800 font-medium">Exercises</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Materials;
