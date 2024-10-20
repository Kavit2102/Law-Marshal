import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative py-24 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extrabold text-white mb-8 leading-tight"
          >
            Ready to Elevate Your Operations?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Explore our cutting-edge solutions and discover how we can help your organization thrive in the digital age.
          </motion.p> <motion.div
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <ArrowRight className="w-6 h-6 mr-2" />
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;