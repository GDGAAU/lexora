"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase/Firebase"; // Import Firebase auth
import {
  Book,
  ChevronDown,
  ChevronRight,
  Menu,
  User,
  LogOut,
} from "lucide-react"; // Add LogOut icon
import { FaGraduationCap } from "react-icons/fa";
import { cn } from "../lib/utils";

export function Sidebar({ className }) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({ courses: false });
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle user logout and redirect to login page
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      setUser(null); // Remove user from state
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-indigo-500 text-white shadow-md md:hidden"
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-300 text-white transition-transform duration-300 ease-in-out",
          "bg-gradient-to-r from-indigo-200 to-purple-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          className
        )}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-gray-300 bg-gradient-to-r from-indigo-300 to-purple-300">
            <Link to="/" className="flex items-center space-x-2">
              <FaGraduationCap className="text-2xl text-indigo-700" />
              <h1 className="text-2xl font-bold text-gray-900">LEXORA</h1>
            </Link>
          </div>

          {/* Navigation (Grow to push profile to bottom) */}
          <nav className="py-4 px-3 flex-grow">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => toggleMenu("courses")}
                  className="flex items-center w-full p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-400 hover:text-white group transition"
                >
                  <Book className="w-6 h-6 text-gray-700 group-hover:text-white" />
                  <span className="ml-3 flex-1 text-left whitespace-nowrap">
                    Departments
                  </span>
                  {expandedMenus.courses ? (
                    <ChevronDown className="w-5 h-5 text-gray-700 group-hover:text-white" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white" />
                  )}
                </button>

                {/* Dropdown */}
                {expandedMenus.courses && (
                  <ul className="py-2 space-y-2 pl-11">
                    {[
                      {
                        path: "/courses/cs-courses",
                        label: "Computer Science",
                      },
                      {
                        path: "/courses/chem-courses",
                        label: "Applied Chemistry",
                      },
                      {
                        path: "/courses/Bio-courses",
                        label: "Applied Biology",
                      },
                      {
                        path: "/courses/phy-courses",
                        label: "Applied Physics",
                      },
                      {
                        path: "/courses/maths-courses",
                        label: "Applied Maths",
                      },
                      { path: "/courses/stat-courses", label: "Statistics" },
                    ].map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="flex items-center p-2 font-medium text-gray-900 rounded-lg hover:bg-indigo-400 hover:text-white transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* User Profile Section (Always at the Bottom) */}
          {user && (
            <div className="mt-auto p-4 border-t border-gray-300 text-gray-900 bg-white flex items-center space-x-3">
              <User className="w-8 h-8 text-indigo-500" />
              <div>
                <p className="font-semibold">{user.displayName || "User"}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
