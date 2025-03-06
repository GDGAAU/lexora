import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import {
  BiHomeAlt,
  BiLogIn,
  BiLogOut,
  BiUserPlus,
  BiBook,
  BiRestaurant,
} from "react-icons/bi";
import { FaBook } from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex w-full px-5 md:px-10 py-3 fixed dark:bg-[#1B232B] bg-white top-0 opacity-95 z-10">
      <div className="flex-1">
        <NavLink to="#" className="text-xl font-bold cursor-pointer flex ">
          <FaBook className="mr-3" /> Lexora
        </NavLink>
      </div>

      <div className="navbar bg-base-100">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="#" className="btn btn-ghost">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="btn btn-ghost">
                Courses
              </Link>
            </li>

            <li>
              <Link to="#" className="btn btn-ghost">
                 Exams
              </Link>
            </li>
            <li>
              <Link to="#" className="btn btn-ghost">
                Notes
              </Link>
            </li>
            <li>
              <Link to="#" className="btn btn-ghost">
                <BiLogOut className="mr-2" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

