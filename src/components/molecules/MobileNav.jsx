import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between p-4 bg-gray-900">
        <div className="hamburger-icon space-y- lg:hidden">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="block p-2 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="gray"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isNavOpen && (
        <div className="absolute top-full right-0 p-4 h-screen w-60  bg-gray-900 shadow z-50 transition duration-1000 translate-y- translate-x-16 lg:hidden">
          <button
            onClick={() => setIsNavOpen(false)}
            className="close-icon items-center text-red-600 animate-pulse"
          >
            <svg
              className="h-8 w-20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="menu-links-mobile mt-2 text-center ">
            <li className="my-2 mb-2 text-gray-100">
              <Link
                to="/"
                className="block font-semibold hover:bg-white hover:text-gray-900 p-2 rounded transition duration-300 w-full"
              >
                HOME
              </Link>
            </li>
            <li className="my-2 mb-2 text-gray-100">
              <Link
                to="/sobre"
                className="block font-semibold hover:bg-white hover:text-gray-900 p-2 rounded transition duration-300 w-full"
              >
                SOBRE
              </Link>
            </li>
            <li className="my-2 mb-2 text-gray-100">
              <Link
                to="/cursos"
                className="block font-semibold hover:bg-white hover:text-gray-900 p-2 rounded transition duration-300 w-full"
              >
                CURSO
              </Link>
            </li>
            <li className="my-2 mb-2 text-gray-100">
              <Link
                to="/login"
                className="block font-semibold hover:bg-white hover:text-gray-900 p-2 rounded transition duration-300 w-full"
              >
                LOGIN
              </Link>
            </li>
          </ul>
          <div className="flex absolute inset-x-12 bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <span className="p-2 text-gray-200 font-semibold">ULearn</span>
          </div>
        </div>
      )}
    </div>
  );
}
