import React from "react";
import Navbar from "./NavBar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
           E-Learning System 🎓
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          A modern digital platform designed to help students and teachers
          manage learning materials, modules, exams, and academic progress
          in one powerful system.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="/modules"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Modules
          </a>

          <a
            href="/aboutus"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Learn More
          </a>
        </div>

      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-16">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">
            📚 Manage Modules
          </h2>
          <p className="text-gray-600">
            Create, update, and organize learning modules easily.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">
            📝 Online Exams
          </h2>
          <p className="text-gray-600">
            Take and manage exams digitally with instant feedback.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">
            👨‍🏫 Easy Learning
          </h2>
          <p className="text-gray-600">
            Access learning materials anytime, anywhere.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;