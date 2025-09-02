import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/" className="hover:text-pink-500 transition-colors">Home</a>
      </li>
      <li>
        <a href="/course" className="hover:text-pink-500 transition-colors">Course</a>
      </li>
      <li>
        <a href="/contact" className="hover:text-pink-500 transition-colors">Contact</a>
      </li>
      <li>
        <a href="/cart" className="hover:text-pink-500 transition-colors">Cart</a>
      </li>
    </>
  );

  return (
    <>
      <div
  className={`fixed top-0 left-0 right-0 z-50 m-0 p-0 border-0 transition-all duration-300 ${
    sticky
      ? "backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      : "bg-transparent"
  }`}
      >
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar py-3">
            {/* Left Section */}
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-lg w-52"
                >
                  {navItems}
                </ul>
              </div>
              <a className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                bookStore
              </a>
            </div>

            {/* Center Section */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-4 font-medium">
                {navItems}
              </ul>
            </div>

            {/* Right Section */}
            <div className="navbar-end space-x-3">
              {/* Search Bar */}
              <div className="hidden md:block">
                <label className="px-3 py-2 border rounded-full flex items-center gap-2 bg-white/70 dark:bg-slate-700/70 backdrop-blur-md">
                  <input
                    type="text"
                    className="grow outline-none rounded-md px-2 bg-transparent dark:text-white text-sm"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>

              {/* Theme Switcher */}
              <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller hidden" />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-6 h-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-6 h-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05Z" />
                </svg>
              </label>

              {/* Auth Buttons */}
              {authUser ? (
                <Logout />
              ) : (
                <div>
                  <a
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:opacity-90 duration-300 cursor-pointer shadow-md"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </a>
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
