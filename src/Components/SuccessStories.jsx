import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const SuccessStories = () => {

  const stories = [
    {
      name: "Rahim",
      role: "Web Development Student",
      text: "I learned web development and got my first freelance job!",
      image: "https://img.icons8.com/?size=100&id=nhjymmETB05X&format=png&color=000000"
    },
    {
      name: "Ayesha",
      role: "English Learner",
      text: "Improved my English speaking confidence in just 2 months.",
      image: "https://img.icons8.com/?size=100&id=108295&format=png&color=000000"
    },
    {
      name: "Karim",
      role: "Guitar Instructor",
      text: "Started teaching guitar and earning side income.",
      image: "https://img.icons8.com/?size=100&id=20751&format=png&color=000000"
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100  rounded-lg">

      {/* Heading */}
      <div className="text-center mb-12 my-2 pt-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Success Stories
        </h2>

        <p className="mt-4 text-gray-600 mx-auto">
          Real learners and instructors sharing their amazing journey with SkillSwap.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-2">

        {
          stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />

              <p className="text-gray-600 leading-relaxed mb-6">
                "{story.text}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={story.image}
                  alt={story.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-lg text-gray-800">
                    {story.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {story.role}
                  </p>
                </div>

              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default SuccessStories;