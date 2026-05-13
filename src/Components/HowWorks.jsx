import React from 'react';

const HowWorks = () => {
     const steps = [
    "Create Account",
    "Browse Skills",
    "Book a Session",
    "Learn & Review"
  ];
    return (
        <div>
             
           <div className=" bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 mx-auto flex flex-col items-center justify-center mt-2 pt-2 space-y-5 pb-8 rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {index + 1}
            </div>
            <p className="font-medium">{step}</p>
          </div>
        ))}

      </div>
    </div>
        </div>
    );
};

export default HowWorks;