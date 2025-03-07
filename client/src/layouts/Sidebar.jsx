"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Book, Award, ChevronDown, ChevronRight, Menu } from "lucide-react"
import { cn } from "../lib/utils"

export function Sidebar({ className }) {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedMenus, setExpandedMenus] = useState({
    courses: false,
    certificates: false,
  })

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button - visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5 text-gray-700" />
      </button>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar} aria-hidden="true" />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          className,
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-orange-500">LEX</span>ORA
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-4 px-3">
          <ul className="space-y-2">
            {/* Courses */}
            <li>
              <button
                onClick={() => toggleMenu("courses")}
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Book className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ml-3 flex-1 text-left whitespace-nowrap">Departments</span>
                {expandedMenus.courses ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
              {expandedMenus.courses && (
                <ul className="py-2 space-y-2 pl-11">
                  <li>
                    <Link
                      to="/courses/cs-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      Computer Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/chem-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                     Applied Chemistry
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/courses/Bio-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      Applied Biology
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/courses/phy-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                     Applied Physics
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/courses/maths-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      Applied Maths
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/courses/stat-courses"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                    Statistics
                    </Link>
                  </li>
                </ul>
              )}
            </li>




{/* 
            Certificates
            <li>
              <button
                onClick={() => toggleMenu("certificates")}
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Award className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ml-3 flex-1 text-left whitespace-nowrap">Certificates</span>
                {expandedMenus.certificates ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
              {expandedMenus.certificates && (
                <ul className="py-2 space-y-2 pl-11">
                  <li>
                    <Link
                      to="/certificates/my-certificates"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      My Certificates
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/certificates/available-certificates"
                      className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      Available Certificates
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}





          </ul>
        </nav>
      </aside>
    </>
  )
}

