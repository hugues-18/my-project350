import React, { useState } from "react";
import Navbar from "./NavBar";

function Exam() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleClick = () => {
    setDisplayName(name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <Navbar />

      {/* Center Card */}
      <div className="flex items-center justify-center py-20 px-4">

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            📝 Exam Page
          </h1>

          {/* Input */}
          <label className="block text-gray-700 font-medium mb-2">
            Enter your name:
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Type your name..."
          />

          {/* Button */}
          <button
            onClick={handleClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition mb-4"
          >
            Show Name
          </button>

          {/* Output */}
          <div className="text-center">
            <p className="text-gray-600">My name is:</p>
            <h2 className="text-xl font-bold text-gray-800 mt-2">
              {displayName}
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Exam;