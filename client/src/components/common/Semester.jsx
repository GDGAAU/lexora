import CourseCard from "./SemisterCard";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
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
};

export default function Semester() {
  const { department, year } = useParams();
  const courses = coursesData[department]?.[year] || {};
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (semester) => {
    setExpandedSemester(expandedSemester === semester ? null : semester);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="ml-4 text-gray-500">Unlock Your Future</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(courses).map((semester) => (
          <div key={semester}>
            <button
              className="w-full border p-2 bg-white shadow-sm"
              onClick={() => toggleSemester(semester)}
            >
              <h2 className="font-semibold">{semester}</h2>
            </button>
            {expandedSemester === semester && (
              <div className="mt-2 border p-3 bg-gray-100">
                {courses[semester].map((course) => (
                  <Link
                    to={`/${department}/${year}/${semester}/${course.name}`}
                  >
                    <div
                      key={course.code}
                      className="p-2 border-b last:border-none"
                    >
                      <p className="font-semibold">{course.name}</p>
                      <p className="text-sm text-gray-500">{course.code}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
