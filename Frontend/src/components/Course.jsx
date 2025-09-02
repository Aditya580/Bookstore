import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react"; // SVG icons

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100">
        {/* Decorative SVG Top */}
        <div className="absolute top-0 left-0 w-full h-40 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0V46.29c47.85,22,106,29.05,158,17.39,70.1-15.81,136.84-57.65,207-65.31,72.7-7.91,141.79,27.58,212.2,45.37,71.51,18,141.6,19.16,212,1.7,66.37-16.57,131.19-51.75,197-53.44,63.64-1.64,127.52,29.42,190,53.44V0Z"
              opacity=".25"
              className="fill-pink-400"
            ></path>
            <path
              d="M0,0V15.81C47.85,37.8,106,54.21,158,48c70.1-7.91,136.84-45.37,207-53.44C437.7-13.1,506.79,12.69,577.2,27.6c71.51,15.17,141.6,16.1,212-1.36,66.37-16.57,131.19-47.82,197-49.51,63.64-1.64,127.52,19.49,190,35.34V0Z"
              opacity=".5"
              className="fill-pink-300"
            ></path>
            <path
              d="M0,0V5.63C47.85,18.49,106,31,158,27.6c70.1-3.93,136.84-26.9,207-29.92C437.7-6.14,506.79,7.46,577.2,14.1c71.51,6.89,141.6,7.31,212-1.36,66.37-8.54,131.19-25.04,197-26.73,63.64-1.64,127.52,8.55,190,15.54V0Z"
              className="fill-pink-200"
            ></path>
          </svg>
        </div>

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 pt-28">
          {/* Heading Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <BookOpen className="w-8 h-8 text-pink-500" />
              We're delighted to have you{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked collection of books across multiple
              categories. Whether you’re here for fiction, history, or free
              gems, we’ve got something special waiting for you.
            </p>
            <Link to="/">
              <button className="mt-6 flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md">
                <ArrowLeft size={18} /> Back
              </button>
            </Link>
          </div>

          {/* Books Section */}
          <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Decorative SVG Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -z-10">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.16,172-41.86C621.75,2.07,681.93-2.3,739.26,14.57c52.64,15.6,103.16,41.69,156.21,49.74,51.17,7.72,106.1-.95,157.25-10.75,47.86-9.25,95.93-17.71,147.28-8.73V120H0V93.14C65.76,75.28,131.65,67.4,197.9,64.36,239.22,62.4,280.29,63.24,321.39,56.44Z"
              className="fill-pink-200"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Course;
