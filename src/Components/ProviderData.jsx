import React from 'react';

const ProviderData = ({provider}) => {
    const { providerName, rating, category, image } = provider;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-50 p-4 object-cover"
          src={image}
          alt={providerName}
        />

        {/* Category Badge */}
        <span className="absolute top-5 left-5 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {category || "Provider"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 text-center">

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800">
          {providerName}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating}
        </p>

        {/* Button */}
        {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
          View Details
        </button> */}
           {/* Extra Info */}
        <div className="flex justify-center gap-3 flex-col md:flex-row text-sm text-gray-600">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Top Rated
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Available
          </span>

        </div>

      </div>
    </div>
    );
};

export default ProviderData;