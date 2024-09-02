import { useState } from "react";
import { Link } from "react-scroll";
import { NAVITEMS } from "../dataSheet";
import useDarkMode from "../hooks/useDarkmode";
const Navbar = () => {
  const [active, setActive] = useState("About");
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-md md:block hidden">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="About"
          spy
          smooth
          duration={500}
          offset={-100}
          prefix="500"
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <span className="self-center text-2xl dark:font-semibold font-bold whitespace-nowrap dark:text-white text-gray-900">
            Portfolio
          </span>
        </Link>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden"
          id="navbar-sticky"
        >
          <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {NAVITEMS.map(({ title }) => (
              <Link
                key={title}
                activeClass="active"
                to={title}
                spy
                smooth
                duration={500}
                offset={-250}
                onSetActive={() => setActive(title)}
                className={`block rounded-md px-2 py-1 cursor-pointer ${active === title ? "active" : "dark:text-white text-gray-900"}`}
              >
                {title}
              </Link>
            ))}
            <button onClick={toggleDarkMode}>{isDarkMode ? "☀️" : "🌙"}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
