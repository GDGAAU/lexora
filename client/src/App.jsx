import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import Home from "./pages/Home";
import CsCourses from "./pages/Department/Cs/MyCourses";
import ChemCourses from "./pages/Department/Chemistry/Courses/MyCourses";
import PhyCourses from "./pages/Department/Physics/Courses/MyCourses";
import StatCourses from "./pages/Department/Statistics/Courses/MyCourses";
import BioCourses from "./pages/Department/Biology/Courses/MyCourses";
import MathsCourses from "./pages/Department/Maths/Courses/MyCourses";
import Cscourses from "./pages/Department/Cs/Card";
import StatCard from "./pages/Department/Statistics/Courses/Card";
import BiologyCard from "./pages/Department/Biology/Courses/Card";
import ChemCard from "./pages/Department/Chemistry/Courses/Card";
import PhyCard from "./pages/Department/Physics/Courses/Card";
import MathCard from "./pages/Department/Maths/Courses/Card";
import Materials from "./components/Materials";
import Semester from "./pages/Department/Cs/Semester";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Department Courses */}
          <Route path="/courses/cs-courses" element={<CsCourses />} />
          <Route path="/courses/chem-courses" element={<ChemCourses />} />
          <Route path="/courses/phy-courses" element={<PhyCourses />} />
          <Route path="/courses/bio-courses" element={<BioCourses />} />
          <Route path="/courses/stat-courses" element={<StatCourses />} />
          <Route path="/courses/maths-courses" element={<MathsCourses />} />
          <Route path="/:department/:year/:semester" element={<Semester />} />
          <Route path="/cs/:year/exams" element={<Materials />} />
          <Route path="/statistics/:year" element={<StatCard />} />
          <Route path="/biology/:year" element={<BiologyCard />} />
          <Route path="/chemistry/:year" element={<ChemCard />} />
          <Route path="/physics/:year" element={<PhyCard />} />
          <Route path="/maths/:year" element={<MathCard />} />
          <Route path="/:department/:year/:semester/Materials"element={<Materials />}/>
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
