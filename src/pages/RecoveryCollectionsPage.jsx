import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LineChart,
  Search,
  RefreshCw,
  ShieldCheck,
  PhoneCall,
  Scale,
  Clock,
  ArrowUpRight,
  CheckCircle,
  Building2,
  Layers
} from "lucide-react";

const RecoveryCollectionsPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const primaryServices = [
    {
      title: "Debt Recovery Services",
      description: "Expert debt collection solutions with advanced negotiation strategies",
      icon: LineChart,
      features: [
        "Customized recovery strategies",
        "Multi-channel communication",
        "Payment plan facilitation",
        "Real-time recovery tracking"
      ],
      color: "from-indigo-700 to-purple-900"
    },
    {
      title: "Legal Services",
      description: "Comprehensive legal support for complex recovery cases",
      icon: Scale,
      features: [
        "Legal documentation",
        "Compliance adherence",
        "Court representation",
        "Settlement processing"
      ],
      color: "from-red-800 to-pink-900"
    }
  ];

  const skipTracingService = {
    title: "Skip Tracing",
    description: "Advanced locate and connect services",
    icon: Search,
    features: [
      "Advanced search algorithms",
      "Multiple database access",
      "Address verification",
      "Contact information updates"
    ],
    color: "from-teal-600 to-cyan-800"
  };

  const delinquencyService = {
    title: "Delinquency Management",
    description: "Comprehensive approach to managing and mitigating financial risks",
    icon: RefreshCw,
    features: [
      "NPA Management",
      "Write Off Pool Management",
      "Early Delinquency Tracking",
      "Preemptive Customer Engagement"
    ],
    details: [
      {
        title: "Delinquency Segments",
        content: [
          "Retail: 0-90 Days Past Due",
          "Rural Lending: 0-365 Days Past Due"
        ]
      },
      {
        title: "Specialized Calling Strategies",
        content: [
          "Welcome Calling",
          "Preemptive Calling",
          "Microfinance Specialized Calling",
          "Hygiene Calling (Fraud Prevention)"
        ]
      }
    ],
    color: "from-blue-900 to-indigo-900"
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description: "100% adherence to legal and regulatory requirements"
    },
    {
      icon: PhoneCall,
      title: "Professional Approach",
      description: "Diplomatic and results-oriented communication"
    },
    {
      icon: Clock,
      title: "Quick Resolution",
      description: "Efficient processes for faster recovery"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-950 min-h-screen text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/50 backdrop-blur-xl"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Recovery & Collections 
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Expert debt recovery solutions combining advanced technology with professional expertise
              for optimal results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Debt Recovery Services */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className={`bg-gradient-to-br ${primaryServices[0].color} p-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105`}>
              <div className="flex justify-between items-center mb-4">
                {React.createElement(primaryServices[0].icon, { className: "w-10 h-10 text-white" })}
                <ArrowUpRight className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{primaryServices[0].title}</h3>
              <p className="text-xl text-gray-200 mb-4">{primaryServices[0].description}</p>
              <ul className="space-y-2">
                {primaryServices[0].features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/90 text-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Legal Services */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className={`bg-gradient-to-br ${primaryServices[1].color} p-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105`}>
              <div className="flex justify-between items-center mb-4">
                {React.createElement(primaryServices[1].icon, { className: "w-10 h-10 text-white" })}
                <ArrowUpRight className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{primaryServices[1].title}</h3>
              <p className="text-xl text-gray-200 mb-4">{primaryServices[1].description}</p>
              <ul className="space-y-2">
                {primaryServices[1].features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/90 text-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skip Tracing */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className={`bg-gradient-to-br ${skipTracingService.color} p-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105`}>
              <div className="flex justify-between items-center mb-4">
                {React.createElement(skipTracingService.icon, { className: "w-10 h-10 text-white" })}
                <ArrowUpRight className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{skipTracingService.title}</h3>
              <p className="text-xl text-gray-200 mb-4">{skipTracingService.description}</p>
              <ul className="space-y-2">
                {skipTracingService.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/90 text-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Delinquency Management - Now taking full width */}
          <motion.div variants={itemVariants} className="col-span-full">
            <div className={`bg-gradient-to-br ${delinquencyService.color} p-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105`}>
              <div className="flex justify-between items-center mb-4">
                {React.createElement(delinquencyService.icon, { className: "w-10 h-10 text-white" })}
                <ArrowUpRight className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{delinquencyService.title}</h3>
              <p className="text-xl text-gray-200 mb-4">{delinquencyService.description}</p>
              <ul className="space-y-2">
                {delinquencyService.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/90 text-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              {delinquencyService.details && (
                <div className="mt-4 space-y-3">
                  {delinquencyService.details.map((detail) => (
                    <div key={detail.title} className="bg-white/10 p-3 rounded-lg">
                      <h4 className="font-semibold text-xl text-white mb-2">{detail.title}</h4>
                      <ul className="text-gray-300 text-lg">
                        {detail.content.map((item) => (
                          <li key={item} className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-2 text-white/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Performance</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Recovery Rate", value: "85%" },
                { label: "Client Satisfaction", value: "96%" },
                { label: "Cases Resolved", value: "50K+" },
                { label: "Industry Experience", value: "15+ Years" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-xl text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-lg"
                >
                  {React.createElement(benefit.icon, { className: "w-16 h-16 text-purple-400 mb-4 mx-auto" })}
                  <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-xl text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Recovery Process?
            </h2>
            <p className="text-2xl text-white/90 mb-8">
              Let our experts help you maximize recovery rates while maintaining professional standards
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-4 rounded-full hover:bg-gray-100 transition duration-300 text-xl font-semibold"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecoveryCollectionsPage;