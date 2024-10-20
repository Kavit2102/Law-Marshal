import React from "react";

const Innovation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-32 bg-white text-black">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/api/placeholder/600/400"
          alt="Spocto X Innovation Lab Illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Spocto X Innovation Lab</h2>
        <p className="text-gray-600 mb-6">
          Innovation lies at the heart of everything we do. We are bringing
          together the best minds that are ideating, prototyping and scaling
          advanced analytics for debt collection to craft disruptive solutions
          that are aimed to improving your collections journey.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default Innovation;