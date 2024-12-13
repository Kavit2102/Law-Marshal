import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { 
  FaBuilding, 
  FaNetworkWired, 
  FaCloud, 
  FaShieldAlt, 
  FaDesktop, 
  FaHeadset, 
  FaChartLine, 
  FaLeaf,
  FaGraduationCap 
} from 'react-icons/fa';

const infrastructureData = [
  { 
    icon: <FaBuilding className="text-5xl text-blue-500" />,
    title: 'Modern Office Layouts',
    description: 'Ergonomic workstations, strategically divided zones, and relaxation areas designed for efficiency and employee comfort.',
  },
  { 
    icon: <FaNetworkWired className="text-5xl text-green-500" />,
    title: 'Advanced Telecommunication',
    description: 'PBX, VoIP, IVR, and ACD systems ensuring crystal-clear communication and optimized service delivery.',
  },
  { 
    icon: <FaCloud className="text-5xl text-purple-500" />,
    title: 'Cutting-Edge IT Infrastructure',
    description: 'Cloud-based platforms, CRM tools, and analytics software for scalable, secure, and insightful operations.',
  },
  { 
    icon: <FaShieldAlt className="text-5xl text-red-500" />,
    title: 'Reliable Networking & Security',
    description: 'Redundant internet connections, advanced firewalls, VPNs, and biometric access to safeguard data and ensure consistent operations.',
  },
  { 
    icon: <FaDesktop className="text-5xl text-yellow-500" />,
    title: 'Comprehensive Hardware',
    description: 'Noise-canceling headsets, high-performance computers, interactive displays, and automated dialers.',
  },
  { 
    icon: <FaHeadset className="text-5xl text-indigo-500" />,
    title: 'Omnichannel Integration',
    description: 'Seamless support across voice, email, chat, and social media with AI-powered chatbots and unified customer journey dashboards.',
  },
  { 
    icon: <FaChartLine className="text-5xl text-teal-500" />,
    title: 'Compliance & Data Privacy',
    description: 'Strict adherence to GDPR, PCI DSS with encrypted data storage and real-time compliance monitoring.',
  },
  { 
    icon: <FaLeaf className="text-5xl text-green-600" />,
    title: 'Backup & Sustainability',
    description: 'Uninterrupted Power Supply, backup generators, and energy-efficient systems with a focus on environmental consciousness.',
  },
  { 
    icon: <FaGraduationCap className="text-5xl text-orange-500" />,
    title: 'Training & Development',
    description: 'Fully equipped training rooms, continuous learning programs, and regular performance reviews.',
  },
];

const InfrastructureCard = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 relative border-t-4 border-blue-500" 
    > 
      <div className="flex items-center mb-6"> 
        <span className="mr-4">{item.icon}</span>
        <h3 className="text-2xl font-bold text-gray-800 font-heading">
          {item.title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="bg-gradient-to-r from-indigo-100 to-blue-300 py-28">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 font-heading">
          Our Infrastructure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          {infrastructureData.map((item, index) => (
            <InfrastructureCard 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;