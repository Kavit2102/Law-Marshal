import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaDesktop, FaCogs } from 'react-icons/fa';

const infrastructureData = [
  { 
    icon: <FaBuilding className="text-5xl text-blue-500" />,
    title: 'Spacious Office',
    description: '3000 sq. ft. of modern workspace in Indore, designed to foster creativity and collaboration among teams.',
  },
  { 
    icon: <FaDesktop className="text-5xl text-green-500" />,
    title: 'Scalable Systems',
    description: '100 computer systems, expandable to 300, ensuring seamless operations and future readiness.',
  },
  { 
    icon: <FaCogs className="text-5xl text-yellow-500" />,
    title: 'Cutting-Edge Technology',
    description: 'State-of-the-art infrastructure for optimal efficiency, leveraging the latest advancements in technology.',
  },
];

const Infrastructure = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delayChildren: 0.3,
        staggerChildren: 0.3 
      }
    }
  };

  return (
    <section id="infrastructure" className="bg-gradient-to-r from-indigo-100 to-blue-300 transition-all-200 py-28">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 font-heading">
          Our Infrastructure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> 
          {infrastructureData.map((item, index) => (
            <motion.div
              key={index}
              ref={ref} 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.2 } }
              }} 
              className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 relative border-t-4 border-blue-500" 
            > 
              <div className="flex items-center mb-6"> 
                <span className="mr-4">{item.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 font-heading">
                  {item.title}
                </h3>
              </div>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, delay: index * 0.2 + 0.3 } }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;