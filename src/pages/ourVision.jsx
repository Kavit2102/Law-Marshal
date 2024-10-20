import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake } from 'react-icons/fa';

const OurVision = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-100 to-blue-300 transition-all py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-20 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Vision
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-16 md:space-y-0 md:space-x-16">
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-110">
              <FaLightbulb className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">Continuous Value Creation</h3>
            <p className="text-lg text-gray-700 max-w-lg">
              We strive to continuously create value for our clients and business associates by delivering innovative solutions and exceptional service. Our focus is on sustainable growth and consistent improvement.
            </p>
            <div className="mt-4 border-t-2 border-indigo-600 w-20"></div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-110">
              <FaHandshake className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">Building Long-term Relationships</h3>
            <p className="text-lg text-gray-700 max-w-lg">
              Our mission is to exceed customer expectations and build long-term relationships based on trust and mutual success. We believe in the power of collaboration and shared goals.
            </p>
            <div className="mt-4 border-t-2 border-indigo-600 w-20"></div>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <motion.p
            className="text-xl text-gray-800 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            At the core of our vision is a commitment to innovation and excellence. We aim to lead by example and inspire others to achieve greatness. Join us on this journey as we redefine what is possible.
          </motion.p>
          <div className="mt-8 border-t-2 border-indigo-600 w-40 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;