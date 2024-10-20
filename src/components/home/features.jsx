import React, { useState } from "react";
import { ChartNoAxesColumn, Check, CheckCircle, Rotate3D } from "lucide-react";
import CardSlider from "./cardslider";

const Tab = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active ? "bg-[#63e] text-white" : "text-gray-600 hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
//       <div className="bg-white p-2 rounded-lg"></div>
//       <div className="flex flex-col items-center w-full">
//         <h3 className="font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

const Features = () => {
  const [activeTab, setActiveTab] = useState("Analytics & ML");

  const features = [
    "We operate ethically and professionally, ensuring that all interactions with debtors are conducted with respect and without harassment",
    "Adhere to client-specific guidelines and policies regarding communication tone and approach",
    "We aims to maintain positive relationships with debtors while pursuing the ultimate goal of debt recovery",
  ];

  const featureCards = [
    {
      icon: Rotate3D,
      title: "Connect",
      description:
        "Customer contactability enhanced on the back of API-based integrations",
    },
    {
      icon: ChartNoAxesColumn,
      title: "Recommendation Guru",
      description: "Machine-recommended dynamic allocation engine",
    },
    {
      icon: CheckCircle,
      title: "Spocto Score",
      description: "Early warning signals that save credit losses",
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-32">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full flex flex-col gap-8 md:gap-12 md:w-1/2 text-black">
          <h2 className="text-3xl font-bold mb-4">
            Why Law Marshal &#63;&#63;
          </h2>
          <ul className="space-y-4 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          {/* <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex space-x-2 mb-6">
              {[
                "Analytics & Machine Learning",
                "Optimized Workflow",
                "Seamless Orchestration",
                "Compliance",
              ].map((tab) => (
                <Tab
                  key={tab}
                  label={tab}
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                />
              ))}
            </div>

            <div className="space-y-4">
              {featureCards.map((card, index) => (
                <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-lg">
                    <card.icon color="#63e" />
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <h3 className="font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Features;