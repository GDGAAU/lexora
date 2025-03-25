import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import CsCourses from "./pages/Department/Cs/MyCourses";
import ChemCourses from "./pages/Department/Chemistry/Courses/MyCourses";
import PhyCourses from "./pages/Department/Physics/Courses/MyCourses";
import StatCourses from "./pages/Department/Statistics/Courses/MyCourses";
import BioCourses from "./pages/Department/Biology/Courses/MyCourses";
import MathsCourses from "./pages/Department/Maths/Courses/MyCourses";
import Materials from "./components/Materials";
import Semester from "./components/common/Semester";
import FileList from "./pages/Department/Physics/Courses/phynotes";
import Homepage from "./pages/Homepage/home";
import login from './pages/Auth/login';
import signup from './pages/Auth/signup';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses/cs-courses" element={<CsCourses />} />
          <Route path="/courses/chem-courses" element={<ChemCourses />} />
          <Route path="/courses/phy-courses" element={<PhyCourses />} />
          <Route path="/courses/bio-courses" element={<BioCourses />} />
          <Route path="/courses/stat-courses" element={<StatCourses />} />
          <Route path="/courses/maths-courses" element={<MathsCourses />} />
          <Route path="/:department/:year/:semester" element={<Semester />} />
          <Route
            path="/:department/:year/:semester/:course"
            element={<Materials />}
          />
          <Route path="/organicchemistry" element={<FileList />} />
          <Route path="/login" element={<login />} />
          <Route path="/signup" element={<signup />} />
        
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
