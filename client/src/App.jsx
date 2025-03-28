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
import FileList from "./pages/Department/Cs/csnotes";
import Homepage from "./pages/Homepage/home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ProtectedRoute from "./pages/Auth/ProtectedRoute"; 
import Notfound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protect routes that require authentication */}
          <Route
            path="/courses/cs-courses"
            element={<ProtectedRoute element={<CsCourses />} />}
          />
          <Route
            path="/courses/chem-courses"
            element={<ProtectedRoute element={<ChemCourses />} />}
          />
          <Route
            path="/courses/phy-courses"
            element={<ProtectedRoute element={<PhyCourses />} />}
          />
          <Route
            path="/courses/bio-courses"
            element={<ProtectedRoute element={<BioCourses />} />}
          />
          <Route
            path="/courses/stat-courses"
            element={<ProtectedRoute element={<StatCourses />} />}
          />
          <Route
            path="/courses/maths-courses"
            element={<ProtectedRoute element={<MathsCourses />} />}
          />
          <Route
            path="/:department/:year/:semester"
            element={<ProtectedRoute element={<Semester />} />}
          />
          <Route
            path="/:department/:year/:semester/:course"
            element={<ProtectedRoute element={<Materials />} />}
          />

          <Route path="/organicchemistry" element={<FileList />} />
          <Route path="/not-found" element={<Notfound/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
