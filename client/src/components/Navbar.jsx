import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import Card from "./Card";
import {BiLogIn} from "react-icons/bi";

const Navbar = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  const handleIsNavMenuOpened = () => {
    setIsNavMenuOpened(true);
  };

  const handleIsNavMenuClosed = () => {
    setIsNavMenuOpened(false);
  };

  return (
    <>
      <div className="flex w-full items-center px-5 md:px-10 py-2 fixed dark:bg-[#111827] bg-gradient-to-r from-black to-green-300 top-0 opacity-95 z-10 text-white">
        <div className="flex-1">
          <NavLink to="/" className="flex gap-2">
            <p className="text-xl font-bold flex">
              <FaBook className="mr-3" />
              Lexora
            </p>
          </NavLink>
        </div>
        <div className="hidden md:flex w-full items-center pl-72">
          {/* Centered Navigation Links */}
          <ul className="flex justify-center space-x-6">
            <NavLink to="#">
              <li className="py-2 px-4 hover:bg-green-400 rounded-md cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink to="#">
              <li className="py-2 px-4 hover:bg-green-400 rounded-md cursor-pointer">
                Courses
              </li>
            </NavLink>
            <NavLink to="#">
              <li className="py-2 px-4 hover:bg-green-400 rounded-md cursor-pointer">
                Exams
              </li>
            </NavLink>
            <NavLink to="#">
              <li className="py-2 px-4 hover:bg-green-400 rounded-md cursor-pointer">
                Notes
              </li>
            </NavLink>
          </ul>

          {/* Login Button Aligned to the Right */}
          <div className="ml-auto">
            <NavLink to="#">
              <li className="py-2 px-4 hover:bg-green-400 rounded-md cursor-pointer flex items-center">
                Login <BiLogIn className="ml-2" />
              </li>
            </NavLink>
          </div>
        </div>

        <div className="md:hidden">
          {!isNavMenuOpened ? (
            <div
              onClick={handleIsNavMenuOpened}
              className="cursor-pointer flex flex-row gap-2 border border-gray-300 rounded-full py-2 px-3 items-center"
            >
              <FaRegUser className="font-bold text-xl" />
              <RiMenu3Line className="font-bold text-xl" />
            </div>
          ) : (
            <div
              onClick={handleIsNavMenuClosed}
              className="cursor-pointer flex flex-row gap-2 border border-gray-300 rounded-full py-2 px-3 items-center"
            >
              <FaRegUser className="font-bold text-xl" />
              <IoMdClose className="font-bold text-xl" />
            </div>
          )}
        </div>
      </div>

      {isNavMenuOpened && (
        <div className="flex p-0 m-0 md:hidden">
          <div
            onClick={handleIsNavMenuClosed}
            className="h-screen w-full bg-black fixed top-0 z-10 opacity-60 transition-all ease-in-out duration-1000"
          ></div>
          <Card cardStyle="fixed right-5 top-15 bg-white dark:bg-gray-800 shadow-sm w-50 z-10">
            <ul>
              <NavLink to="#">
                <li
                  onClick={handleIsNavMenuClosed}
                  className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100"
                >
                  Home
                </li>
              </NavLink>
              <div onClick={handleIsNavMenuClosed}>
                <li className="flex justify-between py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Courses
                </li>
              </div>
              <div onClick={handleIsNavMenuClosed}>
                <li className="flex justify-between py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Exams
                </li>
              </div>
              <div onClick={handleIsNavMenuClosed}>
                <li className="flex justify-between py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Notes
                </li>
              </div>
              <hr className="border-[lightgray]" />
              <NavLink to="#">
                <li
                  onClick={handleIsNavMenuClosed}
                  className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100"
                >
                  Log In
                </li>
              </NavLink>

              <NavLink to="#">
                <li
                  onClick={handleIsNavMenuClosed}
                  className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100"
                >
                  Register
                </li>
              </NavLink>
              <hr className="border-[lightgray]" />
              <li
                onClick={handleIsNavMenuClosed}
                className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100"
              >
                Help
              </li>
            </ul>
          </Card>
        </div>
      )}
    </>
  );
};

export default Navbar;
