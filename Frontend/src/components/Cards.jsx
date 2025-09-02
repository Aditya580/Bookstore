import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="card max-w-sm bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        {/* Image */}
        <figure className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-t-2xl h-56 w-full object-cover"
          />
          <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            {item.category}
          </span>
        </figure>

        {/* Content */}
        <div className="card-body p-5">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {item.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {item.title}
          </p>

          {/* Footer Actions */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
              ${item.price}
            </span>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
