import { NavLink } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside and body scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleNavbar && !event.target.closest("nav")) {
        setToggleNavbar(false);
      }
    };

    if (toggleNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [toggleNavbar]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-light-background dark:bg-dark-background z-50 transition-all duration-300 px-6 md:px-7 lg:px-10 py-2 md:py-3 lg:py-4 ${
          scrolled ? "shadow" : ""
        }`}
      >
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-light-primary-text dark:text-dark-primary-text">
              Far
              <span className="font-light text-light-secondary-text dark:text-dark-secondary-text">
                han.
              </span>
            </h1>
          </div>
          <div className="flex items-center font-medium gap-10">
            <div className="hidden md:flex items-center gap-10 uppercase text-md text-light-primary-text dark:text-dark-primary-text">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }
              >
                home
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }
              >
                work
              </NavLink>
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }
              >
                certificates
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }
              >
                about
              </NavLink>
            </div>
            <div className="flex gap-0">
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                onClick={() => setDarkMode(!darkMode)}
              >
                <i
                  className={
                    darkMode
                      ? "ri-sun-fill text-light-primary-text dark:text-dark-primary-text"
                      : "ri-moon-fill text-light-primary-text dark:text-dark-primary-text"
                  }
                ></i>
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card transition-colors md:hidden"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                <i
                  className={`${
                    toggleNavbar ? "ri-close-line" : "ri-menu-3-line"
                  } text-light-primary-text dark:text-dark-primary-text text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-light-background/90 dark:bg-dark-background/90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            toggleNavbar ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "60px" }}
        >
          <div className="flex flex-col items-center gap-10 pt-10 uppercase text-xl font-medium text-light-primary-text dark:text-dark-primary-text">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark ${
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }`
              }
              onClick={() => setToggleNavbar(false)}
            >
              home
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `transition-colors hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark ${
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }`
              }
              onClick={() => setToggleNavbar(false)}
            >
              work
            </NavLink>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `transition-colors hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark ${
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }`
              }
              onClick={() => setToggleNavbar(false)}
            >
              certificates
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark ${
                  isActive
                    ? "text-color-primary-text-light dark:text-color-primary-text-dark"
                    : ""
                }`
              }
              onClick={() => setToggleNavbar(false)}
            >
              about
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
