import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Loading from './Loading';
import { toast } from 'react-toastify';

const SkillDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // console.log(id,data);
    const [skillDetails,setSkillDetails]=useState({});
    useEffect(()=>{
        const details = data.find(skill=>skill.skillId == id);
        setSkillDetails(details);
    },[id,data])

     if (!skillDetails) {
    return (
      <div className="text-center mt-10 text-xl">
        <Loading></Loading>
      </div>
    );
}
const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Session Booked Successfully!");

    e.target.reset();
  };
    return (
        <div className="max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-sm overflow-hidden">

      {/* Image */}
      <img
        className=" w-full h-72 object-cover"
        src={skillDetails.image}
        alt={skillDetails.skillName}
      />

      {/* Content */}
      <div className="p-6 space-y-3">

        <h2 className="animate__animated animate__bounce text-3xl font-bold">
          {skillDetails.skillName}
        </h2>

        <p className="text-gray-600">
          {skillDetails.description}
        </p>

        <p>👨‍🏫 Provider: {skillDetails.providerName}</p>
        <p>⭐ Rating: {skillDetails.rating}</p>
        <p>💰 Price: ${skillDetails.price}</p>
        <p>📂 Category: {skillDetails.category}</p>

        {/* Book Session Form */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">
            Book Session
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Book Session
            </button>
            <Link className='btn btn-primary' to={'/'}>Go back home</Link>
          </form>
        </div>

      </div>
    </div>
    );
};

export default SkillDetails;