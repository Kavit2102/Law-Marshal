import React, { useState } from "react";
import { HeartPulse, PiggyBank, SatelliteIcon, Shield } from "lucide-react";
import { industries } from "../../../utils/industries";
import { motion } from "framer-motion";

const DashboardCard = ({ icon: Icon, title, description, index }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`h-72 bg-white rounded-lg shadow-md flex flex-col items-center justify-evenly text-center transition-all duration-300 ease-in-out text-black ${
        hoveredCard === index ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="bg-[#63e] rounded-full mb-4 p-5">
        <Icon className="w-20 h-20 text-white" />
      </div>
      <h3 className="font-semibold text-center text-base">{title}</h3>
    </motion.div>
  );
};

const Industries = () => {
  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-6 md:px-12 py-32">
      <div className="mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-8 md:mb-16 text-center"
        >
          Our Industries ....
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {industries.map((industry, index) => {
            return (
              <DashboardCard
                key={industry.id}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
