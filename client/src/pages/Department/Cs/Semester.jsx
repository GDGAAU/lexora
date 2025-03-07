import CourseCard from "../../../components/common/SemisterCard";
import { Link, useParams } from "react-router-dom";

const coursesData = {
  cs: {
    year2: {
      semester1: [
        { name: "Introduction to Programming", code: "CS101" },
        { name: "Discrete Mathematics", code: "CS102" },
        {name:"Global Trends",code:"GlTr1012_"},
        {name:"Introduction to Linear Algebra",code:"Math2191"},
        
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
  const { department, year } = useParams();
  const courses = coursesData[department]?.[year] || {};

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="ml-4 text-gray-500">Unlock Your Future</p>
      </div>

      <div className="grid grid-cols-2">
        {Object.keys(courses).map((semester) => (
          <Link key={semester} to={`/${department}/${year}/${semester}/courses`}>
            <CourseCard
              semester={semester}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
