import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLightbulb, 
  FaNetworkWired, 
  FaCloudUploadAlt, 
  FaChartLine, 
  FaLeaf, 
  FaUserCog 
} from 'react-icons/fa';

const OurVision = () => {
  const [activeSection, setActiveSection] = useState(null);

  const visionPillars = [
    {
      icon: FaLightbulb,
      title: "Innovation-Driven Technology",
      description: "Harnessing cutting-edge AI, cloud computing, and automation to create smarter, faster operational frameworks.",
      color: "bg-blue-100",
      gradient: "from-blue-200 to-blue-400"
    },
    {
      icon: FaNetworkWired,
      title: "Customer-Centric Design",
      description: "Supporting omnichannel communication and real-time adaptability to meet evolving customer needs.",
      color: "bg-green-100",
      gradient: "from-green-200 to-green-400"
    },
    {
      icon: FaCloudUploadAlt,
      title: "Operational Resilience",
      description: "Building robust, secure systems that guarantee uninterrupted service delivery and global compliance.",
      color: "bg-purple-100",
      gradient: "from-purple-200 to-purple-400"
    },
    {
      icon: FaLeaf,
      title: "Sustainability and Scalability",
      description: "Developing eco-friendly, scalable infrastructure that grows with business demands.",
      color: "bg-teal-100",
      gradient: "from-teal-200 to-teal-400"
    },
    {
      icon: FaUserCog,
      title: "Empowering Workforce Efficiency",
      description: "Providing advanced tools and continuous training to maximize productivity and job satisfaction.",
      color: "bg-orange-100",
      gradient: "from-orange-200 to-orange-400"
    },
    {
      icon: FaChartLine,
      title: "Data-Driven Excellence",
      description: "Leveraging analytics to optimize processes and enhance strategic decision-making.",
      color: "bg-red-100",
      gradient: "from-red-200 to-red-400"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Main Vision Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">
            Our Transformative Vision
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            To build an ecosystem that redefines customer engagement and operational excellence through cutting-edge technology, seamless connectivity, and human-centric design.
          </p>
        </motion.div>

        {/* Innovative Layout */}
        <div className="relative flex flex-wrap justify-center items-center space-x-4 space-y-4">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              className={`
                group relative w-72 h-72 rounded-2xl shadow-xl 
                transform transition-all duration-300 
                ${activeSection === index 
                  ? 'scale-110 z-50' 
                  : 'hover:scale-105'}
                ${pillar.color}
              `}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Background Gradient Effect */}
              <div 
                className={`
                  absolute inset-0 opacity-20 
                  bg-gradient-to-br ${pillar.gradient} 
                  rounded-2xl transition-all duration-300
                  ${activeSection === index ? 'opacity-50' : 'opacity-20'}
                `}
              />

              {/* Content */}
              <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center items-center">
                <div className="mb-4 text-indigo-800">
                  <pillar.icon className="w-16 h-16 mx-auto transform transition-transform group-hover:rotate-12" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-3">
                  {pillar.title}
                </h3>
                
                {/* Expanded Description on Hover */}
                <AnimatePresence>
                  {activeSection === index && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="text-sm text-gray-700 mt-2"
                    >
                      {pillar.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Aspiration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            Our Global Aspiration
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            To be the global benchmark for infrastructure excellence in customer engagement, enabling businesses to thrive in an interconnected, customer-first economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;