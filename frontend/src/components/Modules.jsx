import React from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

function Modules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-bold text-gray-800">
            Modules Dashboard
          </h1>

          <Link
            to="/CreateModule"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            + New Module
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <h2 className="text-lg font-bold text-blue-600">
              Backend System
            </h2>
            <p className="text-gray-600 mt-2">Module: Backend system.D</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <h2 className="text-lg font-bold text-blue-600">
              Backend App
            </h2>
            <p className="text-gray-600 mt-2">Module: Backend app</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <h2 className="text-lg font-bold text-blue-600">
              Database
            </h2>
            <p className="text-gray-600 mt-2">Module: Database</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <h2 className="text-lg font-bold text-blue-600">
              PHP
            </h2>
            <p className="text-gray-600 mt-2">Module: php</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Modules;