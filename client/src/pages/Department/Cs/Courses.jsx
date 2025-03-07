import SemiCourseCard from "../../../components/common/SemiCoursesCard";
import { Link, useParams } from "react-router-dom";

// Mock data for courses (replace this with actual data fetching logic)
const coursesData = {
  cs: {
    year2: {
      semester1: [
        { name: "Introduction to Programming", code: "CS101" },
        { name: "Discrete Mathematics", code: "CS102" },
        { name: "Global Trends", code: "GlTr1012_" },
        { name: "Introduction to Linear Algebra", code: "Math2191" },
      ],
      semester2: [
        { name: "Data Structures", code: "CS201" },
        { name: "Algorithms", code: "CS202" },
      ],
    },
    year3: {
      semester1: [
        { name: "Operating Systems", code: "CS301" },
        { name: "Database Systems", code: "CS302" },
      ],
      semester2: [
        { name: "Computer Networks", code: "CS401" },
        { name: "Software Engineering", code: "CS402" },
      ],
    },
  },
  chem: {
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
  const { department, year } = useParams(); // Extract department and year from the URL

  // Get courses for the selected department and year
  const courses = coursesData[department]?.[year] || {};

  // If no courses are found, display a message
  if (Object.keys(courses).length === 0) {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold">My Courses</h1>
          <p className="ml-4 text-gray-500">Unlock Your Future</p>
        </div>
        <p className="text-red-500">
          No courses found for {department} {year}.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="ml-4 text-gray-500">Unlock Your Future</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {Object.keys(courses).map((semester) => (
          <Link
            key={semester}
            to={`/${department}/${year}/${semester}/Materials`}
          >
            <SemiCourseCard
            name={courses[semester].name}
              courses={courses[semester]} 
              imageSrc="https://via.placeholder.com/96" 
              altText={semester}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}


