import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Users, TrendingUp, Target, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { careersTestimonials } from "../../utils/careers";

const CareersPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ApplyNowPopup = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50"
      onClick={() => setShowPopup(false)}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center w-full mb-4">
          <h3 className="text-2xl font-bold text-center text-purple-600">
            Apply Now
          </h3>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="mb-4">
          To apply, please send your resume to{" "}
          <span className="font-semibold">careers@lawmarshalbpo.com</span> along
          with:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>A cover letter</li>
          <li>The position you're interested in</li>
        </ul>
        <p className="mb-4">
          We will review your application and contact you soon regarding the
          next steps in the process.
        </p>
        <p className="text-sm text-gray-600 italic">
          Thank you for your interest in joining Law Marshal BPO. We look
          forward to reviewing your application!
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-purple-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Join Our Vision
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Shape the future of business process outsourcing
          </p>
          <a href="https://www.linkedin.com/company/law-marshal/jobs/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Explore Opportunities
            </motion.button>
          </a>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(109, 40, 217)", stopOpacity: 0.2 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(236, 72, 153)", stopOpacity: 0.2 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z"
              fill="url(#grad1)"
            >
              <animate
                attributeName="d"
                values="M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z;
                               M0,1000 C200,900 400,700 600,800 C800,900 1000,700 1000,500 V0 H0 Z;
                               M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Collaborative",
                description: "Work with diverse, talented individuals",
              },
              {
                icon: TrendingUp,
                title: "Growth-Oriented",
                description: "Continuous learning and development",
              },
              {
                icon: Target,
                title: "Goal-Driven",
                description: "Achieve personal and professional milestones",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                <item.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Employee Stories
          </motion.h2>
          <div className="flex max-h-fit">
            <Marquee speed={25}>
              {careersTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
                >
                  <p className="text-gray-300 mb-6 italic">
                    &#34;{testimonial.quote}&#34;
                  </p>
                  <p className="font-semibold text-purple-400">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-white mb-8"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center text-white mb-12"
          >
            Join us in shaping the future of business process outsourcing
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 mr-2" />
              Apply Now
            </button>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z"
              fill="white"
            >
              <animate
                attributeName="d"
                values="M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z;
                               M0,1000 C200,900 400,700 600,800 C800,900 1000,700 1000,500 V0 H0 Z;
                               M0,1000 C200,800 400,600 600,800 C800,1000 1000,800 1000,600 V0 H0 Z"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-2xl hover:bg-purple-700 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      {/* Apply Now Popup */}
      <AnimatePresence>{showPopup && <ApplyNowPopup />}</AnimatePresence>
    </div>
  );
};

export default CareersPage;
