import CourseCard from "../../../../components/common/CourseCard";
import { Link } from "react-router-dom";
import Image from "../../../../assets/chem.jpg";
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
        <Link to="/Chemistry/year2/semester">
          <CourseCard
            year="Year 2"
            imageSrc={Image}
            altText="Year 2 Chemistry"
          />
        </Link>
        <Link to="/Chemistry/year3/semester">
          <CourseCard
            year="Year 3"
            imageSrc={Image}
            altText="Year 3 Chemistry"
          />
        </Link>
        <Link to="/Chemistry/year4/semester">
          <CourseCard
            year="Year 4"
            imageSrc={Image}
            altText="Year 4 Chemistry"
          />
        </Link>
      </div>
    </div>
    </Layout>
  );
}
