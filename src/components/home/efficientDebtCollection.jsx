import React, { useState } from "react";
import { Lock, MessageCircle, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const EfficientDebtCollection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      text: "A highly effective and streamlined platform for resolving debt digitally",
    },
    {
      text: "Adhering to the strictest compliance standards throughout the entire debt lifecycle",
    },
    {
      text: "Respecting human compassion and dignity in every transaction",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 text-black">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-down"
      >
        Achieving this goal requires efficient, data-driven debt recovery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 animate-fade-in-up delay-300"
      >
        Our BPO plays a crucial role by streamlining debt collections, making
        the process quick, simple, and compassionate through:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`bg-white flex flex-col items-center gap-4 md:p-10 rounded-lg shadow-md transform transition-all duration-300 ease-in-out ${
              hoveredCard === index ? "scale-105 shadow-xl" : ""
            } hover:shadow-xl cursor-pointer`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`flex items-center transition-all duration-300 ${
                hoveredCard === index ? "" : ""
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold">{`Feature ${
                index + 1
              }`}</h3>
            </div>
            <p
              className={`text-sm sm:text-base text-gray-600 transition-all duration-300 ${
                hoveredCard === index ? "" : ""
              }`}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EfficientDebtCollection;
