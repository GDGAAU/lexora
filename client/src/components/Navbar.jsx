import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import {BiLogOut} from "react-icons/bi";

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
                  <BiLogOut className="mr-2" /> Log Out
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
