import React from "react";

const DebtCollectionPlatform = () => (
  <div className="relative w-96 h-96 text-black">
    <div className="absolute inset-0 border-4 border-blue-300 rounded-full"></div>
    <div
      className="absolute inset-0 border-4 border-red-300 rounded-full"
      style={{ clipPath: "inset(0 50% 0 0)" }}
    ></div>
    <div className="absolute inset-8 bg-blue-50 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4">
      <div className="text-xl font-bold mb-4">Law Marshal</div>
      <div className="space-y-2 text-sm text-gray-600">
        <div>Risk Mitigation</div>
        <div>Data Analysis</div>
        <div>Debt Recovery</div>
      </div>
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16"
          />
        </svg>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium">
      Debt Collections Platform
    </div>
  </div>
);

const DebtCollection = () => {
  return (
    <div className="py-12">
      <main className="container md:mx-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-justify flex-col">
            <h1 className="text-4xl text-black font-bold mb-6 text-center md:text-justify">
              An end-to-end debt collections platform, expertly crafted by
              industry veterans, designed specifically to elevate the
              collections industry
            </h1>
            <p className="text-gray-600 mb-8">
              Experience Law Marshal: a seamless, AI-powered debt collections
              platform that simplifies, empowers, and optimizes your collection
              process across the entire debt lifecycle. With best-in-class
              compliance, our solution helps you streamline resources and boost
              collection rates
            </p>
            <button className="px-4 py-2 rounded bg-blue-600">Read More</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <DebtCollectionPlatform />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DebtCollection;