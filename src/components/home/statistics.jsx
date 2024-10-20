import React from "react";

const StatItem = ({ number, description }) => (
  <div className="text-center flex flex-col gap-2 p-4 text-[#63e]">
    <h2 className="text-4xl md:text-5xl font-bold mb-2">{number}</h2>
    <p className="text-sm md:text-base mx-auto font-medium">{description}</p>
  </div>
);

const Statistics = () => {
  const stats = [
    {
      number: "40+",
      description: "Top FIs in India using Law Marshal's products",
    },
    {
      number: "50k +",
      description: "Monthly Business Generated for Clients",
    },
    {
      number: "1 Lakh+",
      description: "Customer touchpoints every month",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-16 hero-bg2 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-25"
      >
        <source src="/backgrounds/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;