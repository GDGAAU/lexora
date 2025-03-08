import CourseCard from "../../../components/common/CourseCard";
import { Link } from "react-router-dom";
export default function MyCourses() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="ml-4 text-gray-500">Unlock Your Future</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Link to="/cs/year2/semester">
          <CourseCard
            year="Year 2"
            imageSrc="https://via.placeholder.com/96"
            altText="Year 2"
          />
        </Link>
        <Link to="/cs/year3/semester">
          <CourseCard
            year="Year 3"
            imageSrc="https://via.placeholder.com/96"
            altText="Year 3"
          />
        </Link>
        <Link to="/cs/year4/semester">
          <CourseCard
            year="Year 4"
            imageSrc="https://via.placeholder.com/96"
            altText="Year 4"
          />
        </Link>
      </div>
    </div>
  );
}
