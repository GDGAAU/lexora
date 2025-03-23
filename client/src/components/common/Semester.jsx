import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../layouts/Layout";
const coursesData = {
  ComputerScience: {
    year2: {
      semester1: [
        { name: "Computer Programming II", code: "CoSc2111" },
        { name: "Fundamnetals of Computer Science", code: "CoSc2011" },
        { name: "Global Trends", code: "GlTr1012_" },
        { name: "Introduction to Linear Algebra", code: "Math2191" },
        { name: "Introduction to Statistics", code: "Stat2181" },
        {
          name: "Fundamentals of Electricity and Digital Electronics",
          code: "ECEG1351",
        },
        { name: "Calculus I", code: "Math2021" },
      ],
      semester2: [
        { name: "Calculus II", code: "Math2022" },
        { name: "Object Oriented Programming", code: "CoSc2212" },
        { name: "Introduction to Probability Theroty", code: "Stat2182" },
        { name: "Inclusiveness", code: "SNIE1011" },
        { name: "Fundameentals of Database", code: "CoSc3051" },
        {
          name: "Computer Organization and Assembly Language",
          code: "CoSc2012",
        },
      ],
    },
    year3: {
      semester1: [
        {
          name: "Computer Networking and Data Communication",
          code: "CoSc3211",
        },
        { name: "INtroduction to Software Engineering", code: "CoSc3311" },
        { name: "Advanced Database Systems", code: "CoSc3011" },
        { name: "Applied Numerical Analysis", code: "Math3321" },
        { name: "Data Structures and Algorithms", code: "CoSc3111" },
        { name: "Discrete Mathematics and Combinatory", code: "Math2231" },
      ],
      semester2: [
        { name: "Operating Systems", code: "CS301" },
        { name: "Computer Networks", code: "CS401" },
        { name: "Software Engineering", code: "CS402" },
      ],
    },
  },
  Chemistry: {
    year2: {
      semester1: [
        { name: "Organic Chemistry", code: "CHEM101" },
        { name: "Inorganic Chemistry", code: "CHEM102" },
      ],
      semester2: [
        { name: "Physical Chemistry", code: "CHEM201" },
        { name: "Analytical Chemistry", code: "CHEM202" },
      ],
    },
  },
  Biology: {
    year2: {
      semester1: [
        { name: "Organic Chemistry", code: "CHEM101" },
        { name: "Inorganic Chemistry", code: "CHEM102" },
      ],
      semester2: [
        { name: "Physical Chemistry", code: "CHEM201" },
        { name: "Analytical Chemistry", code: "CHEM202" },
      ],
    },
  },
  Physics: {
    year2: {
      semester1: [
        { name: "Organic Chemistry", code: "CHEM101" },
        { name: "Inorganic Chemistry", code: "CHEM102" },
      ],
      semester2: [
        { name: "Physical Chemistry", code: "CHEM201" },
        { name: "Analytical Chemistry", code: "CHEM202" },
      ],
    },
  },
  Maths: {
    year2: {
      semester1: [
        { name: "Organic Chemistry", code: "CHEM101" },
        { name: "Inorganic Chemistry", code: "CHEM102" },
      ],
      semester2: [
        { name: "Physical Chemistry", code: "CHEM201" },
        { name: "Analytical Chemistry", code: "CHEM202" },
      ],
    },
  },
  Statistics: {
    year2: {
      semester1: [
        { name: "Organic Chemistry", code: "CHEM101" },
        { name: "Inorganic Chemistry", code: "CHEM102" },
      ],
      semester2: [
        { name: "Physical Chemistry", code: "CHEM201" },
        { name: "Analytical Chemistry", code: "CHEM202" },
      ],
    },
  },
};

export default function Semester() {
  const { department, year } = useParams();
  const courses = coursesData[department]?.[year] || {};
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (semester) => {
    setExpandedSemester(expandedSemester === semester ? null : semester);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">My Courses</h1>
          <p className="text-lg text-gray-500">Unlock Your Future</p>
        </div>
        <div className="flex gap-4">
          {Object.keys(courses).map((semester) => (
            <div key={semester} className="flex-1">
              <button
                className="w-full h-12 border  bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-2xl font-semibold flex items-center justify-center"
                onClick={() => toggleSemester(semester)}
              >
                {semester.toUpperCase()}
              </button>
              {expandedSemester === semester && (
                <div className="mt-3 p-6 border bg-gray-50 rounded-lg shadow-lg">
                  {courses[semester].map((course) => (
                    <Link
                      key={course.code}
                      to={`/${department}/${year}/${semester}/${course.name}`}
                    >
                      <div className="p-4 mb-3 border border-gray-300 rounded-xl bg-white shadow hover:bg-blue-50 transition duration-300 ease-in-out flex items-center gap-4">
                        <div>
                          <p className="text-lg font-semibold text-blue-600">
                            {course.name}
                          </p>
                          <p className="text-sm text-gray-500">{course.code}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
