// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import {
//   FaBook,
//   FaChalkboardTeacher,
//   FaQuestionCircle,
//   FaEnvelope,
//   FaPhone,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import image from "../../../src/assets/hero.jpg";
// import courseImage from "../../../src/assets/hero.jpg";
// import bookImage from "../../../src/assets/notes.jpeg";
// import quizImage from "../../../src/assets/exam.jpg";
// import whyImage from "../../../src/assets/student.jpeg"; 

// function Index() {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const [isSignUp, setIsSignUp] = useState(true); // Toggle SignUp/SignIn
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar Toggle

//   useEffect(() => {
//     if (user) {
//       navigate("/home"); 
//     }
//   }, [user, navigate]);

//   return (
//     <div className="relative w-full h-screen">
//       <div className="flex flex-col">
//         <nav className="hidden md:flex justify-between items-center bg-gray-900 text-white px-8 py-4 fixed top-0 w-full z-10">
//           <h1 className="text-2xl font-bold">Lexora</h1>
//           <ul className="flex space-x-6">
//             <li className="hover:text-blue-400 cursor-pointer">Home</li>
//             <li className="hover:text-blue-400 cursor-pointer">Services</li>
//             <li className="hover:text-blue-400 cursor-pointer">Contact</li>
//           </ul>
//         </nav>

//         {/* Hero Section */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
//           <h2 className="text-5xl font-bold mb-4">
//             Welcome to Lexora Learning
//           </h2>
//           <p className="text-lg max-w-2xl">
//             Access courses from Addis Ababa University, test yourself with
//             quizzes, and expand your knowledge with books and references.
//           </p>
//           <div className="mt-6 flex space-x-4">
//           <button
//             className={`px-6 py-3 rounded-lg text-lg transition ${isSignUp ? "bg-blue-600" : "bg-gray-500"}`}
//             onClick={() => {
//                 setIsSignUp(true);
//                 navigate("/signup"); // Navigate to signup
//             }}
//             >
//             Create An Account
//             </button>
//             <button
//             className={`px-6 py-3 rounded-lg text-lg transition ${!isSignUp ? "bg-blue-600" : "bg-gray-500"}`}
//             onClick={() => {
//                 setIsSignUp(false);
//                 navigate("/login"); // Navigate to login
//             }}
//             >
//             Sign In
//             </button>
//           </div>
//         </div>

//         {/* Why Lexora Section */}
//         <section className="bg-gray-100 py-16 px-8 md:px-16 mt-96 pt-64">
//           <h3 className="text-3xl font-bold text-center mb-8">
//             Why Choose Lexora?
//           </h3>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             {/* Image Section */}
//             <div className="w-full md:w-1/2">
//               <img
//                 src={whyImage}
//                 alt="Why Lexora"
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//             {/* Text Section */}
//             <div className="w-full md:w-1/2 text-center md:text-left">
//               <p className="text-lg mb-4">
//                 Lexora provides access to top-notch educational resources, from
//                 university courses to interactive quizzes and books. Whether
//                 you're preparing for exams or looking to expand your knowledge,
//                 we have everything you need in one platform.
//               </p>
//               <p className="text-lg">
//                 Join us today and take your learning experience to the next
//                 level!
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Courses Section */}
//         <section className="bg-white py-16 px-8 md:px-16">
//           <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
//           <div className="flex flex-col md:flex-row justify-center gap-8">
//             <div className="w-full md:w-1/3 text-center">
//               <img
//                 src={courseImage}
//                 alt="Courses"
//                 className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
//               />
//               <h4 className="text-xl font-semibold mb-2">University Courses</h4>
//               <p>
//                 Access a wide range of university courses across multiple
//                 disciplines at Addis Ababa University.
//               </p>
//             </div>
//             <div className="w-full md:w-1/3 text-center">
//               <img
//                 src={quizImage}
//                 alt="Quizzes"
//                 className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
//               />
//               <h4 className="text-xl font-semibold mb-2">
//                 Interactive Quizzes
//               </h4>
//               <p>
//                 Test your knowledge with interactive quizzes based on your
//                 courses and subjects.
//               </p>
//             </div>
//             <div className="w-full md:w-1/3 text-center">
//               <img
//                 src={bookImage}
//                 alt="Books"
//                 className="w-full h-56 object-cover rounded-lg shadow-lg mb-4"
//               />
//               <h4 className="text-xl font-semibold mb-2">Books & References</h4>
//               <p>
//                 Expand your learning with textbooks and academic references
//                 available on the platform.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="bg-gray-100 py-16 px-8 md:px-16">
//           <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
//           <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
//             <div className="flex items-center space-x-4">
//               <FaEnvelope className="text-gray-700 text-3xl" />
//               <p className="text-lg">info@lexoralearning.com</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FaPhone className="text-gray-700 text-3xl" />
//               <p className="text-lg">+251 987654321</p>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex justify-center space-x-6 mt-6">
//             <a href="#" className="text-blue-600 text-3xl">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-blue-400 text-3xl">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-pink-500 text-3xl">
//               <FaInstagram />
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Index;










//new trial from AI
"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {
  FaBook,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaGraduationCap,
  FaLaptop,
  FaUsers,
} from "react-icons/fa"
import { motion } from "framer-motion"
import image from "../../../src/assets/hero.jpg"
import courseImage from "../../../src/assets/hero.jpg"
import bookImage from "../../../src/assets/notes.jpeg"
import quizImage from "../../../src/assets/exam.jpg"
import whyImage from "../../../src/assets/student.jpeg"

function Index() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isSignUp, setIsSignUp] = useState(true)
  const [activeTab, setActiveTab] = useState("courses")
  const [isVisible, setIsVisible] = useState({
    why: false,
    services: false,
    contact: false,
  })

  useEffect(() => {
    if (user) {
      navigate("/home")
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [user, navigate])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="text-2xl" />
            <h1 className="text-2xl font-bold">Lexora</h1>
          </div>

          <ul className="hidden md:flex space-x-8">
            <li className="hover:text-indigo-200 cursor-pointer transition-colors duration-300">Home</li>
            <li className="hover:text-indigo-200 cursor-pointer transition-colors duration-300">About</li>
            <li className="hover:text-indigo-200 cursor-pointer transition-colors duration-300">Services</li>
            <li className="hover:text-indigo-200 cursor-pointer transition-colors duration-300">Contact</li>
          </ul>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg bg-white text-indigo-600 hover:bg-indigo-100 transition-colors duration-300 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 rounded-lg bg-indigo-800 text-white hover:bg-indigo-900 transition-colors duration-300 font-medium"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 md:pt-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Elevate Your Learning Journey with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Lexora</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-10"
          >
            Access premium courses from Addis Ababa University, test yourself with interactive quizzes, and expand your
            knowledge with comprehensive resources.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-4 rounded-lg text-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-lg text-lg bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Sign In
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-indigo-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-indigo-200">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-indigo-200">Instructors</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Lexora Section */}
      <section id="why" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible.why ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
              Why Choose Us
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transforming Education for the Digital Age
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lexora combines cutting-edge technology with expert-led content to create a learning experience that's
              engaging, effective, and accessible to all.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              animate={isVisible.why ? "visible" : "hidden"}
              variants={fadeIn}
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={whyImage || "/placeholder.svg"} alt="Why Lexora" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible.why ? "visible" : "hidden"}
              variants={staggerChildren}
              className="w-full lg:w-1/2 space-y-8"
            >
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaLaptop className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Interactive Learning</h4>
                  <p className="text-gray-600">
                    Our platform offers interactive courses with real-time feedback, making learning engaging and
                    effective.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaUsers className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Expert Instructors</h4>
                  <p className="text-gray-600">
                    Learn from top professors and industry experts from Addis Ababa University and beyond.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FaBook className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Resources</h4>
                  <p className="text-gray-600">
                    Access a vast library of textbooks, references, and study materials to support your learning
                    journey.
                  </p>
                </div>
              </motion.div>

              <motion.button
                variants={fadeIn}
                onClick={() => navigate("/signup")}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                Join Lexora Today <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
              Our Services
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Everything You Need to Succeed</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of educational services designed to support your academic journey.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "courses"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                University Courses
              </button>
              <button
                onClick={() => setActiveTab("quizzes")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "quizzes"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Interactive Quizzes
              </button>
              <button
                onClick={() => setActiveTab("books")}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "books"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Books & References
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {activeTab === "courses" && (
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img
                      src={courseImage || "/placeholder.svg"}
                      alt="University Courses"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">University Courses</h4>
                    <p className="text-gray-600 mb-6">
                      Access a wide range of university courses across multiple disciplines at Addis Ababa University.
                      Our courses are designed by expert professors and include video lectures, assignments, and
                      interactive content.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Video lectures from top professors
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Practical assignments and projects
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Discussion forums with peers and instructors
                      </li>
                    </ul>
                    <button className="self-start px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Explore Courses
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "quizzes" && (
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img
                      src={quizImage || "/placeholder.svg"}
                      alt="Interactive Quizzes"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Interactive Quizzes</h4>
                    <p className="text-gray-600 mb-6">
                      Test your knowledge with our interactive quizzes designed to reinforce learning and prepare you
                      for exams. Get instant feedback and track your progress over time.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Thousands of practice questions
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Detailed explanations for each answer
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Performance tracking and analytics
                      </li>
                    </ul>
                    <button className="self-start px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Try Quizzes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "books" && (
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img
                      src={bookImage || "/placeholder.svg"}
                      alt="Books & References"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">Books & References</h4>
                    <p className="text-gray-600 mb-6">
                      Access a comprehensive library of textbooks, academic papers, and reference materials to support
                      your studies and research.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Digital textbooks for all courses
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Academic journals and research papers
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        Offline reading and note-taking features
                      </li>
                    </ul>
                    <button className="self-start px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Browse Library
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible.services ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">
              Testimonials
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from students who have transformed their learning experience with Lexora.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">AB</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Abebe Bekele</h5>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Lexora has completely transformed how I study. The interactive quizzes and comprehensive course
                materials have helped me improve my grades significantly."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">MT</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Meron Tadesse</h5>
                  <p className="text-sm text-gray-500">Engineering Student</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The quality of courses on Lexora is exceptional. I especially love the ability to access all my
                textbooks digitally, which has made studying on the go much easier."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">KG</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Kidus Girma</h5>
                  <p className="text-sm text-gray-500">Business Student</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a working student, Lexora has been a game-changer. I can study at my own pace and the mobile app
                makes it easy to learn during my commute."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible.contact ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
              Get In Touch
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning?</h3>
            <p className="max-w-3xl mx-auto text-indigo-100">
              Contact us today to learn more about Lexora and how we can help you achieve your academic goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.contact ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email Us</h4>
              <p className="text-indigo-100">info@lexoralearning.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.contact ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Call Us</h4>
              <p className="text-indigo-100">+251 987654321</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.contact ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-4 rounded-lg text-lg bg-white text-indigo-600 font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              Join Lexora Today <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaGraduationCap className="text-2xl text-indigo-400" />
                <h3 className="text-2xl font-bold">Lexora</h3>
              </div>
              <p className="text-gray-400">
                Transforming education for the digital age with interactive courses, quizzes, and comprehensive
                resources.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    University Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Interactive Quizzes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Books & References
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Study Groups
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-400" />
                  <span className="text-gray-400">info@lexoralearning.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-indigo-400" />
                  <span className="text-gray-400">+251 987654321</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Lexora Learning. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index


