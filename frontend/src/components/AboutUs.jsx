import React, { useState } from "react";
import Navbar from "./NavBar";

function AboutUs() {
  const [like, setLike] = useState(0);

  const handlelikes = () => {
    setLike(like + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <Navbar />

      {/* Center Card */}
      <div className="flex items-center justify-center py-20 px-4">

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            About Us
          </h1>

          <p className="text-gray-600 mb-6">
            GS Gihogwe E-Learning System is designed to improve digital learning
            and help students manage their academic activities easily.
          </p>

          {/* Likes */}
          <div className="mb-4">
            <p className="text-gray-700 text-lg">
              ❤️ Likes: <span className="font-bold">{like}</span>
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handlelikes}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            👍 Click to Like
          </button>

        </div>

      </div>
    </div>
  );
}

export default AboutUs;