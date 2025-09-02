import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Decorative Top SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.23-168.06-17.39-250.45-.39C413.63,30.1,327.12,74.52,246.93,95.83c-70.05,18.34-146.53,19.16-217.44.54C19.12,89.07,9.57,85.92,0,82.74V0H1200V27.35C1120.88,58.63,1052.34,112,985.66,92.83Z"
            className="fill-pink-200"
          ></path>
        </svg>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-screen-lg container mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Get in <span className="text-pink-500">Touch</span>
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
          Have a question, feedback, or just want to say hello? We’d love to
          hear from you!
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">bookstore@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">
                123 Book Street, Knowledge City, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
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
  );
};

export default Contact;
