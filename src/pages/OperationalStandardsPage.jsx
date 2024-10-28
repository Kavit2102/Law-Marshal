import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired, FaChartLine, FaCloud, FaLock, FaShieldAlt, FaServer, FaUserShield, FaArrowRight, FaCog, FaChartBar } from "react-icons/fa";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.2 }
  }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02, translateY: -5 }}
    className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
  >
    <div className="flex justify-center mb-6">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="text-3xl text-white" />
      </div>
    </div>
    <h4 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
      {title}
    </h4>
    <p className="text-gray-300 leading-relaxed text-center">{description}</p>
  </motion.div>
);

const StatCard = ({ icon: Icon, title, value }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-white/5 p-6 rounded-xl border border-white/10"
  >
    <div className="flex justify-center mb-4">
      <Icon className="text-cyan-400 text-3xl" />
    </div>
    <h4 className="text-xl font-semibold text-center text-white mb-2">{title}</h4>
    <p className="text-2xl font-bold text-center text-cyan-400">{value}</p>
  </motion.div>
);

const OperationalStandardsPage = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center py-32 px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              Innovation • Excellence • Security
            </span>
          </motion.div>

          <motion.h1
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
>
  Advanced Operational
  <br />
  Standards & Controls
</motion.h1>

<motion.p
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
>
  Pioneering technological excellence with robust security measures and operational efficiency
</motion.p>
        </motion.div>
      </section>

      {/* GSM Gateway Section */}
      <section className="py-24 px-6 relative bg-gradient-to-br from-slate-900/50 to-purple-900/50">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          >
            Enhanced Connectivity Solutions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaNetworkWired}
              title="GSM Gateway"
              description="Advanced gateway integration for seamless connectivity across networks."
            />
            <FeatureCard
              icon={FaServer}
              title="Infrastructure"
              description="Robust infrastructure ensuring 99.9% uptime and reliability."
            />
            <FeatureCard
              icon={FaCloud}
              title="Cloud Solutions"
              description="Scalable cloud architecture for flexible operations."
            />
          </div>
        </motion.div>
      </section>

      {/* Analytics & Automation Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Advanced Analytics & Automation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  <StatCard
    icon={FaChartBar}
    title="Real-Time Analytics"
    value="99.9%"
  />
  <StatCard
    icon={FaShieldAlt}
    title="Fraud Prevention"
    value="100%"
  />
  <StatCard
    icon={FaNetworkWired}
    title="Network Uptime"
    value="99.99%"
  />
  <StatCard
    icon={FaUserShield}
    title="Compliance Rate"
    value="100%"
  />
</div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={FaChartLine}
              title="Predictive Analytics"
              description="Advanced analytics for intelligent decision-making and forecasting."
            />
            <FeatureCard
              icon={FaCog}
              title="Smart Automation"
              description="Automated workflows reducing manual intervention and errors."
            />
          </div>
        </motion.div>
      </section>

      {/* Add this entire section */}
<section className="py-24 px-6 bg-gradient-to-br from-slate-900/50 to-blue-900/50">
  <motion.div
    variants={containerVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
      Training & Education
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={FaUserShield}
        title="Employee Training"
        description="Comprehensive fraud awareness and prevention training for all staff."
      />
      <FeatureCard
        icon={FaShieldAlt}
        title="Customer Education"
        description="Proactive customer education on security best practices and fraud prevention."
      />
      <FeatureCard
        icon={FaLock}
        title="Security Protocols"
        description="Regular updates on latest security measures and compliance requirements."
      />
    </div>
  </motion.div>
</section>

      {/* Security & Compliance Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/50 to-slate-900/50">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16  bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Fraud Prevention & Compliance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={FaUserShield}
              title="Fraud Detection"
              description="AI-powered systems for real-time fraud detection and prevention."
            />
            <FeatureCard
              icon={FaLock}
              title="Compliance"
              description="Strict adherence to regulatory standards and compliance requirements."
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Experience Operational Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our innovative solutions can elevate your business performance.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Contact Us
            <FaArrowRight className="text-sm" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default OperationalStandardsPage;