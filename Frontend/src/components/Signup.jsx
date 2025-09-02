import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { User, Mail, Lock } from "lucide-react"; // modern SVG icons

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-pink-200 px-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex items-center justify-center bg-pink-50 p-10">
          <img
            src="https://i.pinimg.com/736x/ee/4b/c5/ee4bc57a902a987437665e2c672fc61e.jpg"
            alt="Signup Illustration"
            className="w-4/5"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Create Account</h3>
            <Link
              to="/"
              className="text-gray-500 hover:text-pink-500 transition text-xl"
            >
              ✕
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Fullname */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
                  {...register("fullname", { required: true })}
                />
              </div>
              {errors.fullname && (
                <p className="text-sm text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-md"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-pink-500 underline hover:text-pink-600"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
            </p>
            <Login />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
