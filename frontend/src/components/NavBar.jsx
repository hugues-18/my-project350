import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
          E-learning system
        </h1>

        {/* Links */}
        <div className="flex gap-4">

          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Home
          </Link>

          <Link
            to="/modules"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Modules
          </Link>

          <Link
            to="/exam"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Exam
          </Link>

          <Link
            to="/aboutus"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            About Us
          </Link>
          <Link
            to="/list-modules"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            List Modules
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;