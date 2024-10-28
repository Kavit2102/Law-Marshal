import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const DebtCollectionPlatform = () => (
  <div className="flex items-center justify-center h-full min-h-[600px] py-12">
    <motion.div 
      className="relative w-96 h-96 text-white" // Increased from w-80 h-80
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 border-8 border-teal-400 rounded-full"></div>
      <div
        className="absolute inset-0 border-8 border-blue-600 rounded-full"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      ></div>
      <motion.div
        className="absolute inset-8 bg-gray-800 rounded-2xl shadow-xl flex flex-col justify-center items-center p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Law Marshal</h2>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>Risk Mitigation</li>
          <li>Data Analysis</li>
          <li>Debt Recovery</li>
        </ul>
      </motion.div>
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white">
          <Lock className="w-8 h-8" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Debt Collection Platform
      </motion.div>
    </motion.div>
  </div>
);

const EfficientDebtCollection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      text: "A streamlined, efficient platform for seamless debt resolution.",
    },
    {
      text: "Ensures top compliance standards across the debt lifecycle.",
    },
    {
      text: "Respects compassion and dignity in every interaction.",
    },
  ];

  return (
    <div className="py-24 px-8 md:px-16 my-16 bg-gray-50 rounded-xl shadow-lg text-blue-900"> {/* Increased padding and margin */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-center" // Increased margin bottom
      >
        Empowering Ethical, Data-Driven Debt Recovery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg sm:text-xl mb-12 text-center text-gray-700 px-4" // Increased margin bottom and added padding
      >
        Our solution transforms debt recovery into a seamless, efficient, and compassionate process:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"> {/* Increased gap */}
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`bg-gray-200 p-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out ${
              hoveredCard === index ? "scale-105 shadow-lg" : ""
            }`} // Increased padding
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-xl font-semibold mb-4">Feature {index + 1}</h3> {/* Increased text size and margin */}
            <p className="text-base text-gray-600">{item.text}</p> {/* Increased text size */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const DebtCollection = () => {
  return (
    <div className="py-24 bg-gray-100 min-h-screen"> {/* Increased padding and minimum height */}
      <main className="container mx-auto px-8 space-y-24"> {/* Increased padding and space between children */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-12"> {/* Increased gap and padding */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left space-y-8"> {/* Increased margin and space between children */}
            <motion.h1 
              className="text-5xl font-bold text-blue-900 mb-8" // Increased text size and margin
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              A Comprehensive Debt Collection Solution
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-12" // Increased text size and margin
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Experience Law Marshal:  Debt collection platform that simplifies and enhances the collection process at every stage. 
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <DebtCollectionPlatform />
          </div>
        </div>
        <EfficientDebtCollection />
      </main>
    </div>
  );
};

export default DebtCollection;
