import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marque from "../components/home/marque";
import Features from "../components/home/features";
//import FinancialFramework from "../components/home/FinancialFramework";
import Industries from "../components/home/industries";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-x-hidden">
      <div className="flex relative items-center overflow-hidden py-32 min-h-[100vh]">
        <video
          src="/backgrounds/hero.mp4"
          className="hero-bg opacity-60 object-cover w-full min-h-full"
          autoPlay
          loop
          muted
        ></video>
        
        <div className="container block px-6 md:px-12 md:flex w-screen justify-between items-center py-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mx-auto flex flex-col items-center md:items-start gap-10 leading-[25px] relative"
          >
            <h1 className="flex flex-col gap-2 md:block md:text-left text-3xl sm:text-5xl font-black dark:text-white text-gray-800">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="leading-tight"
              >
                India's Leading Technology Solution
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="leading-tight"
              >
                for Enhanced Collections
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="leading-tight"
              >
                and Customer Service
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="w-full flex flex-col md:block md:text-left text-base sm:text-2xl text-gray-700 md:max-w-3xl dark:text-white"
            >
              <span className="leading-relaxed">
                Serving 40+ top Financial Institutions with
              </span>
              <span>
                50k+ Monthly Business Generated and 1 Lakh+ Customer touchpoints
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="md:text-left flex items-center justify-center gap-3"
            >
              <Link
                to="/contact"
                className="uppercase py-2 px-4 rounded-lg bg-[#63e] dark:text-white hover:bg-[#261653] hover:text-white text-md transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="uppercase py-2 px-4 rounded-lg bg-[#63e] dark:text-white hover:bg-[#261653] hover:text-white text-md transition-all duration-300 hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Marque />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Features />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Industries />
      </motion.div>

 <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <FinancialFramework></FinancialFramework> */}
      </motion.div>
 
     
      
    </section>
    
  );
};

export default Home;