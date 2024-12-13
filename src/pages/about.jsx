import React, { useState, useEffect,useRef } from 'react';
import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { FaPhone , FaMoneyBillWave, FaSearchLocation, FaHeadset , FaPhoneVolume, 
  FaPhoneAlt, 
  FaTabletAlt, 
  FaIndustry, 
  FaCode, 
  FaUsers, 
  FaRobot, 
  FaGem  } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { motion ,useAnimation } from 'framer-motion';
import { FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';
import CompanyOverview from './CompanyOverview.jsx';
import Infrastructure from './infrastructure.jsx';
import OurVision from './ourVision.jsx';
const ValueCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.2 }}
      className="text-5xl text-yellow-300 mb-6"
    >
      {icon}
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.4 }}
      className="text-2xl font-bold mb-4 text-white font-sans"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.6 }}
      className="text-blue-100 font-light leading-relaxed"
    >
      {description}
    </motion.p>
  </motion.div>
);

const OurValues = () => (
  <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
    <div className="max-w-6xl mx-auto text-center"> 
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center"
      >
        Our Core Values
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-12">
  <ValueCard
    icon={<FaAward className="mx-auto" />} 
    title="Excellence"
    description="We strive for excellence in every interaction, ensuring the highest standards of service for our clients and their customers."
    delay={0.2}
  />
  <ValueCard
    icon={<FaHandshake className="mx-auto" />}  
    title="Integrity"
    description="We conduct our business with the utmost integrity, maintaining ethical standards and building trust with our clients and their customers."
    delay={0.4}
  />
  <ValueCard
    icon={<FaLightbulb className="mx-auto" />}  
    title="Innovation"
    description="We embrace innovation, continuously improving our processes and leveraging cutting-edge technology to deliver superior results."
    delay={0.6}
  />
  
  {/* Centered Last Two Cards */}
  <div className="md:col-span-3 flex justify-center space-x-12 mt-12">
    <div className="w-full max-w-md"> {/* Added consistent width */}
      <ValueCard
        icon={<FaPhone className="mx-auto" />}  
        title="Reliability"
        description="We are committed to being a reliable partner, ensuring consistent and dependable service for our clients and their customers."
        delay={0.8}
      />
    </div>
    <div className="w-full max-w-md"> {/* Added consistent width */}
      <ValueCard
        icon={<FaMoneyBillWave className="mx-auto" />}  
        title="Execution"
        description="We focus on effective execution, turning strategies into actionable results that drive success for our clients."
        delay={1.0}
      />
    </div>
  </div>
</div>
    </div>
  </section>
);


// Main AboutUs component
const AboutUs = () => {
  const [stats, setStats] = useState({
    topFIs: 0,
    monthlyBusiness: 0,
    customerTouchpoints: 0,
  });

  // Create a reference for the achievements section
  const achievementsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger animation when the section is visible
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Ensure the animation triggers only once
          const intervalId = setInterval(() => {
            setStats((prevStats) => {
              const { topFIs, monthlyBusiness, customerTouchpoints } = prevStats;

              if (topFIs < 40 || monthlyBusiness < 50000 || customerTouchpoints < 100000) {
                return {
                  topFIs: topFIs < 40 ? topFIs + 1 : topFIs,
                  monthlyBusiness: monthlyBusiness < 50000 ? monthlyBusiness + 100 : monthlyBusiness,
                  customerTouchpoints: customerTouchpoints < 100000 ? customerTouchpoints + 200 : customerTouchpoints,
                };
              } else {
                clearInterval(intervalId); // Stop the animation once all values are reached
              }
              return prevStats;
            });
          }, 10);
        }
      },
      { threshold: 0.5 } // Adjust the threshold if needed (how much of the section should be visible)
    );

    // Observe the achievements section
    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [hasAnimated]); 

  return (
    <div className="bg-white text-black overflow-x-hidden">
     {/* Hero Section */}
<section className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white py-40 px-6 md:px-12 overflow-hidden">
  <div className="max-w-6xl mx-auto relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"  
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
        About <span className="text-yellow-300">Law Marshal</span>
      </h1>
      
      {/* Horizontally aligned paragraph with additional margin for spacing */}
      <p className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto">
        Your trusted partner in innovative debt collection solutions, delivering excellence with integrity.
      </p>

      {/* Button container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-indigo-700 transition duration-300 text-lg font-semibold shadow-lg"
        >
          Get in touch
          <ArrowRight className="ml-2" size={24} />
        </Link>
      </motion.div>
    </motion.div>
    
    <motion.div
      className="absolute right-0 bottom-0 opacity-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <svg width="400" height="400" viewBox="0 0 200 200">
        <path
          fill="currentColor"
          d="M44.3,-76.5C55.9,-69.1,63,-54.3,69.9,-39.7C76.8,-25.1,83.5,-10.7,83.3,3.6C83.1,17.9,76,32.1,66.5,43.9C57,55.7,45.1,65.1,31.7,70.9C18.3,76.7,3.4,79,-12.1,77.6C-27.6,76.2,-43.7,71.1,-57.3,62C-70.9,52.9,-82,39.8,-87.5,24.5C-93,9.1,-92.9,-8.4,-87.5,-23.7C-82.1,-39,-71.4,-52,-58.3,-60.7C-45.2,-69.4,-29.7,-73.7,-14.5,-74.4C0.7,-75,15.9,-72,29.8,-76.2C43.7,-80.4,56.3,-91.8,60.6,-88.5C64.8,-85.2,50.8,-67.3,44.3,-76.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  </div>
</section>


      {/* Company Overview */}
      <CompanyOverview />

    {/* Our Team */}
    <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">Meet Our Leadership</h2>
    <p className="text-lg text-gray-600 mb-8">Our team of experts is dedicated to providing exceptional service and guidance to our clients.</p>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-2">Himangi Gandhi</h3>
        <p className="text-gray-600 mb-4">Founder & CEO</p>
        <p>MBA in Finance with over 3 years of experience in the financial sector, leading Law Marshal's strategic vision and operations.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold mb-2">CA. Harsh Vijayvargiya</h3>
        <p className="text-gray-600 mb-4">Legal & Finance Expert</p>
        <p>Chartered Accountant and qualified lawyer, providing expertise in tax, GST, and NCLT matters, enhancing Law Marshal's service offerings.</p>
      </div>
    </div>
  </div>
</section>
      {/* Our Values - Animated with framer-motion */}
      <OurValues />

      {/* Our Achievements */}
      <section ref={achievementsRef}  // Attach ref to the section
        className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-6 flex justify-center items-center">
                <span className="text-white text-5xl font-bold">{stats.topFIs}+</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Top FIs in India</h3>
                <p className="text-gray-600">Using Law Marshal's products</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-6 flex justify-center items-center">
                <span className="text-white text-5xl font-bold">{stats.monthlyBusiness / 1000}k+</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Monthly Business</h3>
                <p className="text-gray-600">Generated for clients</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-6 flex justify-center items-center">
                <span className="text-white text-5xl font-bold">{stats.customerTouchpoints / 1000}k+</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Customer Touchpoints</h3>
                <p className="text-gray-600">Every month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-gray-50 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-heading">
      Our Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card Component */}
      {[
        {
          title: (
            <>
              Inbound <br /> Services
            </>
          ),
          icon: <FaPhoneVolume className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Comprehensive inbound support solutions designed to enhance customer satisfaction and engagement.",
          color: "bg-gradient-to-r from-blue-500 to-blue-800"
        },
        {
          title: (
            <>
              Outbound <br /> Services
            </>
          ),
          icon: <FaPhoneAlt className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Proactive outbound communication strategies to drive sales, follow-ups, and customer retention.",
          color: "bg-gradient-to-r from-green-500 to-green-800"
        },
        {
          title: (
            <>
              Multichannel <br /> Support
            </>
          ),
          icon: <FaTabletAlt className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Seamless customer support across multiple channels including phone, email, chat, and social media.",
          color: "bg-gradient-to-r from-purple-500 to-purple-800"
        },
        {
          title: (
            <>
              Specialized <br /> Industry Services
            </>
          ),
          icon: <FaIndustry className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Tailored solutions for specific industries with deep understanding of unique business requirements.",
          color: "bg-gradient-to-r from-red-500 to-red-800"
        },
        {
          title: (
            <>
              Technology <br /> Integration
            </>
          ),
          icon: <FaCode className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Advanced technological solutions to streamline operations and enhance customer experience.",
          color: "bg-gradient-to-r from-indigo-500 to-indigo-800"
        },
        {
          title: (
            <>
              Workforce <br /> Management
            </>
          ),
          icon: <FaUsers className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Optimizing workforce efficiency through strategic scheduling, training, and performance management.",
          color: "bg-gradient-to-r from-yellow-500 to-yellow-800"
        },
        {
          title: (
            <>
              Automation & <br /> Innovation
            </>
          ),
          icon: <FaRobot className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Leveraging cutting-edge automation and AI technologies to drive efficiency and innovation.",
          color: "bg-gradient-to-r from-teal-500 to-teal-800"
        },
        {
          title: (
            <>
              Value-Added <br /> Services
            </>
          ),
          icon: <FaGem className="w-12 h-12 text-white animate-pulse" />,
          description:
            "Additional services that provide extra value, enhancing overall customer satisfaction and business outcomes.",
          color: "bg-gradient-to-r from-pink-500 to-pink-800"
        }
      ].map((card, index) => (
        <div
          key={index}
          className={`w-full p-6 ${card.color} rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out flex flex-col items-center`}
        >
          <div className="flex justify-center mb-4">{card.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4 font-heading text-center">
            {card.title}
          </h3>
          <p className="text-gray-200 text-center leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



    <Infrastructure></Infrastructure>
    <OurVision></OurVision>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-indigo-100 to-blue-300 transition-all duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg">
          Ready to elevate your customer service?
        </h2>
        
        <p className="mb-8 text-lg text-gray-700 leading-relaxed font-light">
          Partner with Law Marshal for innovative and effective BPO solutions.
        </p>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1"
        >
          Contact Us
          <ChevronRight className="ml-2" size={20} />
        </Link>
        
        {/* Decorative Elements */}
        <div className="mt-10">
          
          <p className="mt-4 text-gray-500 italic">Join our community of satisfied clients!</p>
        </div>
      </div>
    </section>
      
    </div>
  );
};

export default AboutUs;
