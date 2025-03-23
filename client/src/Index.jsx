import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import {
  FaBook,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import image from "../src/assets/hero.jpg";
import courseImage from "../src/assets/hero.jpg";
import bookImage from "../src/assets/notes.jpeg";
import quizImage from "../src/assets/exam.jpg";
import whyImage from "../src/assets/student.jpeg"; 

function Index() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSignUp, setIsSignUp] = useState(true); // Toggle SignUp/SignIn
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar Toggle

  useEffect(() => {
    if (user) {
      navigate("/home"); 
    }
  }, [user, navigate]);

  return (
    <div className="relative w-full h-screen">
      <div className="flex flex-col">
        <nav className="hidden md:flex justify-between items-center bg-gray-900 text-white px-8 py-4 fixed top-0 w-full z-10">
          <h1 className="text-2xl font-bold">Lexora</h1>
          <ul className="flex space-x-6">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h2 className="text-5xl font-bold mb-4">
            Welcome to Lexora Learning
          </h2>
          <p className="text-lg max-w-2xl">
            Access courses from Addis Ababa University, test yourself with
            quizzes, and expand your knowledge with books and references.
          </p>
          <div className="mt-6 flex space-x-4">
            <button
              className={`px-6 py-3 rounded-lg text-lg transition ${
                isSignUp ? "bg-blue-600" : "bg-gray-500"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              Create An Account
            </button>
            <button
              className={`px-6 py-3 rounded-lg text-lg transition ${
                !isSignUp ? "bg-blue-600" : "bg-gray-500"
              }`}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Why Lexora Section */}
        <section className="bg-gray-100 py-16 px-8 md:px-16 mt-96 pt-64">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose Lexora?
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={whyImage}
                alt="Why Lexora"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg mb-4">
                Lexora provides access to top-notch educational resources, from
                university courses to interactive quizzes and books. Whether
                you're preparing for exams or looking to expand your knowledge,
                we have everything you need in one platform.
              </p>
              <p className="text-lg">
                Join us today and take your learning experience to the next
                level!
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-white py-16 px-8 md:px-16">
          <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="w-full md:w-1/3 text-center">
              <img
                src={courseImage}
                alt="Courses"
                className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">University Courses</h4>
              <p>
                Access a wide range of university courses across multiple
                disciplines at Addis Ababa University.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <img
                src={quizImage}
                alt="Quizzes"
                className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">
                Interactive Quizzes
              </h4>
              <p>
                Test your knowledge with interactive quizzes based on your
                courses and subjects.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <img
                src={bookImage}
                alt="Books"
                className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Books & References</h4>
              <p>
                Expand your learning with textbooks and academic references
                available on the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 py-16 px-8 md:px-16">
          <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-700 text-3xl" />
              <p className="text-lg">info@lexoralearning.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-gray-700 text-3xl" />
              <p className="text-lg">+251 987654321</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-blue-600 text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 text-3xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 text-3xl">
              <FaInstagram />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
