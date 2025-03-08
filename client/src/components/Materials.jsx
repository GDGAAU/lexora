import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { useParams } from "react-router-dom";

function Materials() {
  const { department, course}=useParams();
  const [expandedMenus, setExpandedMenus] = useState({
    courses: false,
    notes: false, // Added state for notes
  });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div>
      <div className="w-full h-42 bg-white py-4 text-2xl pl-12 border">
        <h2>Learning Materials</h2>
      </div>
      <div className="bg-white h-screen w-full my-8 border">
        <div>
          <h2 className="font-semibold text-2xl px-8 py-5">
            {department} : {course}
          </h2>
          <p className="px-8 pb-8">
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même...
          </p>
          <div className="bg-gray-100 w-full h-42 py-4 text-2xl pl-12 border">
            <button
              onClick={() => toggleMenu("courses")}
              className="flex items-center w-full text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group pr-6"
            >
              <span className="ml-3 flex-1 text-left whitespace-nowrap font-semibold">
                Course Materials
              </span>
              {expandedMenus.courses ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          </div>
          {expandedMenus.courses && (
            <div className="py-2 space-y-2 bg-white">
              {/* Notes Dropdown */}
              <button
                onClick={() => toggleMenu("notes")}
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg group bg-white"
              >
                <span className="ml-3 flex-1 text-left whitespace-nowrap bg-white border p-4 flex justify-between">
                  <div className="flex hover:bg-gray-100">
                    <CgNotes className="text-blue-400 mt-1 mx-3" />
                    Notes
                  </div>
                  {expandedMenus.notes ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </span>
              </button>
              {expandedMenus.notes && (
                <div className="pl-8 py-2 space-y-2">
                  <Link
                    to="/notes/chapter-1"
                    className="block p-2 text-gray-900 bg-white border rounded-lg hover:bg-gray-100 mr-2"
                  >
                    Chapter 1
                  </Link>
                  <Link
                    to="/notes/chapter-2"
                    className="block p-2 text-gray-900 bg-white border rounded-lg hover:bg-gray-100 mr-2"
                  >
                    Chapter 2
                  </Link>
                  <Link
                    to="/notes/chapter-3"
                    className="block p-2 text-gray-900 bg-white border rounded-lg hover:bg-gray-100 mr-2"
                  >
                    Chapter 3
                  </Link>
                </div>
              )}
              <Link
                to="/exams"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg group bg-white "
              >
                <span className="ml-3 flex-1 text-left whitespace-nowrap bg-white border p-4 flex hover:bg-gray-100">
                  <PiExamFill className="text-blue-400 mt-1 mx-3" /> Exams
                </span>
              </Link>
              <Link
                to="/exercises"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg group bg-white "
              >
                <span className="ml-3 flex-1 text-left whitespace-nowrap bg-white border p-4 flex hover:bg-gray-100">
                  <FaQuestionCircle className="text-blue-400 mt-1 mx-3" />
                  Exercises
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Materials;
