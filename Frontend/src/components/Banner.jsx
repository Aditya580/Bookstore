import React from "react";
import banner from "../../public/book-png.png";

function Banner() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-indigo-50 via-pink-50 to-purple-50 overflow-hidden">
        {/* Decorative SVG blobs */}
        <svg
          className="absolute top-0 left-0 w-64 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path
            fill="#f472b6"
            d="M39.6,-68.4C49.3,-60.6,55.9,-48.1,61.7,-36C67.5,-23.9,72.6,-11.9,72.4,0.1C72.1,12,66.4,24,58.2,34.6C50.1,45.3,39.4,54.7,27.1,60.2C14.9,65.7,0.9,67.2,-13,68.2C-26.9,69.2,-40.7,69.7,-53.4,63.2C-66.1,56.8,-77.6,43.4,-81.5,28.3C-85.3,13.2,-81.5,-3.6,-75.8,-19C-70.2,-34.3,-62.7,-48.1,-50.8,-55.4C-38.9,-62.7,-22.5,-63.5,-7.7,-57.9C7.1,-52.3,14.2,-40.3,39.6,-68.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="relative z-10 max-w-screen-2xl container mx-auto flex flex-col md:flex-row items-center px-6 md:px-20 py-16 md:py-28">
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Discover new knowledge daily with exciting lessons, curated
              resources, and interactive learning experiences that make study
              feel effortless.
            </p>

            {/* Input Box */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 w-64 md:w-80 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              <button className="px-5 py-2 rounded-lg bg-pink-500 text-white font-medium shadow hover:bg-pink-600 transition">
                Subscribe
              </button>
            </div>

            {/* CTA Button */}
            <button className="btn mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
              Get Started 🚀
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src={banner}
              className="w-72 sm:w-96 md:w-[500px] drop-shadow-2xl animate-bounce-slow"
              alt="Book Banner"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
