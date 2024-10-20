import React, { useState } from "react";
import { Lock, MessageCircle, Users, ChevronRight } from "lucide-react";

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
    <div className="py-32 px-6 md:px-12 rounded-xl shadow-lg text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6  animate-fade-in-down">
        Achieving this goal requires efficient, data-driven debt recovery
      </h1>

      <p className="text-base sm:text-lg md:text-xl  mb-6 sm:mb-8 animate-fade-in-up delay-300">
        Our BPO plays a crucial role by streamlining debt collections, making
        the process quick, simple, and compassionate through:
      </p>

      <button className="group bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 mb-8 sm:mb-12 shadow-md text-sm sm:text-base">
        Learn more
        <ChevronRight
          className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
          size={20}
        />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((item, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default EfficientDebtCollection;