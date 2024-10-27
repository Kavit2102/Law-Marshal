import React from "react";
import { motion } from "framer-motion";
import { FaPhoneSquare, FaClipboardCheck, FaShieldAlt, FaComments, FaArrowRight } from "react-icons/fa";

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

const ServiceCard = ({ icon: Icon, title, description }) => (
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

const ContactCenterProposalPage = () => {
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
        Professional • Compliant • Reliable
      </span>
    </motion.div>

    <motion.h1
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
    >
      Comprehensive Contact
      <br />
      Center Solutions
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
    >
      Law Marshal's integrated contact center operations delivering excellence in customer engagement and regulatory compliance
    </motion.p>
  </motion.div>
</section>

      {/* Scope of Services */}
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
            Scope of Contact Center Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={FaPhoneSquare}
              title="Lead Generation"
              description="Proactively reaching out to potential customers to create leads, fostering connections that drive business growth."
            />
            <ServiceCard
              icon={FaClipboardCheck}
              title="Feedback Collection"
              description="Gathering customer feedback to inform business decisions, ensuring continuous improvement in service quality."
            />
            <ServiceCard
              icon={FaShieldAlt}
              title="Compliance Assurance"
              description="Ensuring all interactions meet regulatory requirements and company standards, safeguarding customer trust."
            />
            <ServiceCard
              icon={FaComments}
              title="Query Resolution"
              description="Efficiently resolving customer inquiries regarding banking products, services, and account-related questions."
            />
          </div>
        </motion.div>
      </section>

      {/* Regulatory Compliance Section */}
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
      Regulatory Excellence & Compliance
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      <ServiceCard
        icon={FaShieldAlt}
        title="Regulatory Compliance"
        description="Strict adherence to all relevant regulations and industry standards, ensuring every interaction meets compliance requirements."
      />
      <ServiceCard
        icon={FaClipboardCheck}
        title="Quality Assurance"
        description="Comprehensive quality monitoring and regular audits to maintain the highest standards of service delivery."
      />
    </div>
  </motion.div>
</section>

      {/* Hygiene Calling Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Hygiene Calling & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={FaShieldAlt}
              title="Hygiene Check Services"
              description="Ensuring high customer satisfaction through structured hygiene calls, addressing concerns, and preventing future issues."
            />
            <ServiceCard
              icon={FaClipboardCheck}
              title="Fraud Prevention"
              description="Utilizing advanced analytics and proactive measures to prevent and address potential fraud."
            />
          </div>
        </motion.div>
      </section>

      {/* Operational Hours Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/50 to-slate-900/50">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Always-On Operations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
  icon={FaPhoneSquare}
  title="Extended Operations"
  description="12-hour daily operational coverage with dedicated teams working in shifts to ensure continuous service delivery."
/>
<ServiceCard
  icon={FaClipboardCheck}
  title="Seven-Day Service Model"
  description="Continuous operations throughout the week including weekends, with service breaks only on specified national holidays."
/>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Discover the Benefits of Our Contact Center Services
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with us today to learn how our dedicated contact center can support your business and improve customer satisfaction.
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

export default ContactCenterProposalPage;