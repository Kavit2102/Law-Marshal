import React from "react";
import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaChartLine, 
  FaHandshake, 
  FaUniversity, 
  FaFileInvoiceDollar, 
  FaCreditCard,
  FaShieldAlt,
  FaChartBar,
  FaHome, 
  FaCar, 
  FaIndustry, 
  FaClock, 
  FaPhoneAlt 
} from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <Icon className="text-yellow-400 text-3xl flex-shrink-0" />
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

const loanTypes = [
  {
    icon: FaUniversity,
    title: "Personal & Business Loans",
    description: "Comprehensive management of personal and business financing solutions"
  },
  {
    icon: FaHome,
    title: "Home & Education Loans",
    description: "Specialized handling of mortgage and educational financing"
  },
  {
    icon: FaCar,
    title: "Vehicle & Auto Loans",
    description: "Efficient processing of automotive and commercial vehicle financing"
  },
  {
    icon: FaHandshake,
    title: "Asset-Backed Lending",
    description: "Secure loans against property, securities, and fixed deposits"
  },
  {
    icon: FaIndustry,
    title: "MSME & Agricultural Loans",
    description: "Tailored solutions for small businesses and agricultural sector"
  },
  {
    icon: FaCreditCard,
    title: "Digital Products & BNPL",
    description: "Modern financial solutions including Buy Now, Pay Later services"
  }
];

const bucketTypes = [
  {
    icon: FaClock,
    title: "PDD Management",
    description: "Proactive engagement for pre and post due date accounts"
  },
  {
    icon: FaChartBar,
    title: "Bucket 1-3 Handling",
    description: "Structured approach for different delinquency stages"
  },
  {
    icon: FaShieldAlt,
    title: "NPA Prevention",
    description: "Strategic management to prevent and handle non-performing assets"
  }
];

const FinancialServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 via-blue-900 to-gray-900 text-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/path-to-your-finance-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-blue-900/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Financial Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light mb-8 text-gray-200"
          >
            Elevating financial institutions with cutting-edge solutions and regulatory excellence
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#services" className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>

       
      </section>

      {/* Services Grid */}
<section id="services" className="py-20 px-6 md:px-12">
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <motion.h2
      variants={fadeInUp}
      className="text-4xl md:text-5xl font-bold text-center mb-8"
    >
      Enhanced Financial Services Framework
    </motion.h2>
    <motion.p
      variants={fadeInUp}
      className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
    >
      Supporting financial institutions with efficiency and compliance in managing diverse loan products
    </motion.p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loanTypes.map((service, index) => (
        <FeatureCard key={index} {...service} />
      ))}
    </div>
  </motion.div>
</section>

      {/* Bucket-Based Account Management Section */}
<section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-900 to-indigo-900">
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <motion.h2
      variants={fadeInUp}
      className="text-4xl font-bold text-center mb-16"
    >
      Bucket-Based Account Management
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {bucketTypes.map((bucket, index) => (
        <FeatureCard key={index} {...bucket} />
      ))}
    </div>
  </motion.div>
</section>

{/* Customer Engagement Section */}
<section className="py-20 px-6 md:px-12">
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <motion.h2
      variants={fadeInUp}
      className="text-4xl font-bold text-center mb-16"
    >
      Customer Engagement and Recovery Support
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      <FeatureCard
        icon={FaPhoneAlt}
        title="Dues Recovery"
        description="Personalized approach to encourage timely repayments through strategic communication"
      />
      <FeatureCard
        icon={FaChartLine}
        title="Payment Hygiene Maintenance"
        description="Fostering consistent, on-time payments to reduce delinquency rates"
      />
    </div>
  </motion.div>
</section>
      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 to-blue-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join leading institutions that trust Law Marshal for their financial operations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;