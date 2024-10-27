import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCogs, FaDatabase, FaUserShield, FaArrowRight } from "react-icons/fa";

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
    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
      <Icon className="text-2xl text-white" />
    </div>
    <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
      {title}
    </h4>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const DataVerificationPage = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section - Updated content */}
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
              Streamlined Credit Processing Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          >
            Precision in Data Verification
            <br />
            & Credit Processing
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Enhancing financial institutions with accuracy-driven verification and streamlined credit processing solutions
          </motion.p>
        </motion.div>
      </section>

      {/* Features Grid - Updated content */}
      <section className="py-24 px-6 relative">
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
            Why Choose Law Marshal for Data Verification?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaUserShield}
              title="Expertise at Your Service"
              description="Dedicated team of trained data verification specialists ensuring accuracy and compliance."
            />
            <FeatureCard
              icon={FaCogs}
              title="Innovative Technology"
              description="Advanced automation reducing processing times and eliminating human error."
            />
            <FeatureCard
              icon={FaDatabase}
              title="Customized Solutions"
              description="Tailored credit processing solutions meeting your specific industry requirements."
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Enhanced Decision Making"
              description="Precise data verification enabling faster, more informed credit decisions."
            />
          </div>
        </motion.div>
      </section>

      {/* Process Section - New Addition */}
     {/* Process Section */}
<section className="py-24 px-6 relative">
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
      Our Verification Process
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard
        icon={FaShieldAlt}
        title="Authentication"
        description="Advanced data authentication and validation ensuring accuracy and reliability"
      />
      <FeatureCard
        icon={FaCogs}
        title="Real-time Processing"
        description="Instant credit information processing for quick decision making"
      />
      <FeatureCard
        icon={FaDatabase}
        title="Compliance"
        description="Automated compliance checking against regulatory requirements"
      />
      <FeatureCard
        icon={FaUserShield}
        title="Security"
        description="Secure document verification with enterprise-grade protection"
      />
    </div>
  </motion.div>
</section>

      {/* CTA Section - Updated content */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Ready for Tailored Credit Processing Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you optimize your verification processes and enhance your credit decisions.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Contact Us for Tailored Solutions
            <FaArrowRight className="text-sm" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default DataVerificationPage;