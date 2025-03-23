import CourseCard from "../../../../components/common/CourseCard";
import { Link } from "react-router-dom";
import Layout from "../../../../layouts/Layout";
export default function MyCourses() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
          <p className="ml-4 text-gray-500">Unlock Your Future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/Biology/year2/semester">
            <CourseCard
              year="Year 2"
              imageSrc="https://source.unsplash.com/400x300/?chemistry,laboratory"
              altText="Year 2 Biology"
            />
          </Link>
          <Link to="/Biology/year3/semester">
            <CourseCard
              year="Year 3"
              imageSrc="https://source.unsplash.com/400x300/?science,study"
              altText="Year 3Biology"
            />
          </Link>
          <Link to="/Biology/year4/semester">
            <CourseCard
              year="Year 4"
              imageSrc="https://source.unsplash.com/400x300/?students,books"
              altText="Year 4 Biology"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
