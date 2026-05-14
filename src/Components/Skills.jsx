import React from 'react';
import { Link, Links } from 'react-router';

const Skills = ({skill}) => {
    const {skillId, skillName, rating, price, image, category } = skill;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* Image */}
      <div className="relative">
        {/* <img
          className="w-full h-56 object-cover "
          src={image}
          alt={skillName}
        /> */}

        {/* Category Badge */}
        {/* <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {category || "Skill"}
        </span> */}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Skill Name */}
        <h3 className="text-xl font-bold text-gray-800">
          {skillName}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-blue-600">
          ${price}
        </p>

        {/* Button */}
        <Link to={`/skill/${skillId}`} className="btn w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
          View Details
        </Link>

      </div>
    </div>
    );
};

export default Skills;