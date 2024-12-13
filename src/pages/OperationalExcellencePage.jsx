import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Gauge,
  Cloud,
  Network,
  Lock,
  CheckCircle,
  ArrowUpRight,
  Monitor,
  HeadphonesIcon,
  Settings,
  BarChart,
  Users,
  RefreshCw,
  Zap,
  TrendingUp,
  Target
} from "lucide-react";

const OperationalExcellencePage = () => {
  const services = [
    {
      title: "Technology Infrastructure",
      description: "State-of-the-art technology backbone ensuring seamless operations",
      icon: Server,
      features: [
        "Cloud-based solutions",
        "24/7 system monitoring",
        "Disaster recovery",
        "Scalable architecture"
      ],
      gradient: "from-blue-500 via-indigo-600 to-purple-700"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control and performance monitoring",
      icon: Gauge,
      features: [
        "Real-time monitoring",
        "Performance metrics",
        "Quality audits",
        "Continuous improvement"
      ],
      gradient: "from-green-500 via-teal-600 to-emerald-700"
    },
    {
      title: "Security Protocols",
      description: "Advanced security measures protecting your business assets",
      icon: Shield,
      features: [
        "Data encryption",
        "Access control",
        "Threat detection",
        "Compliance monitoring"
      ],
      gradient: "from-red-500 via-rose-600 to-pink-700"
    },
    {
      title: "Network Solutions",
      description: "Robust networking infrastructure for reliable connectivity",
      icon: Network,
      features: [
        "High availability",
        "Load balancing",
        "Network security",
        "Performance optimization"
      ],
      gradient: "from-purple-500 via-indigo-600 to-blue-700"
    }
  ];

  const technologies = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions"
    },
    {
      icon: Lock,
      title: "Security Systems",
      description: "Advanced protection protocols"
    },
    {
      icon: Monitor,
      title: "Monitoring Tools",
      description: "24/7 system oversight"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Systems",
      description: "Round-the-clock assistance"
    }
  ];

  const performanceMetrics = [
    { 
      icon: Server, 
      label: "System Uptime", 
      value: "99.99%",
      color: "text-blue-500"
    },
    { 
      icon: Settings, 
      label: "Automation Rate", 
      value: "85%",
      color: "text-green-500"
    },
    { 
      icon: BarChart, 
      label: "Efficiency Gain", 
      value: "45%",
      color: "text-purple-500"
    },
    { 
      icon: Users, 
      label: "User Satisfaction", 
      value: "98%",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Operational Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Advanced infrastructure and operational standards delivering superior performance and reliability.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300
                }}
                className={`bg-gradient-to-br ${service.gradient} p-8 rounded-3xl shadow-2xl transform transition-all hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-6">
                  <service.icon className="w-12 h-12 text-white" />
                  <ArrowUpRight className="w-6 h-6 text-white/70" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                <div className="border-t border-white/20 pt-6">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-white/90">
                        <Zap className="w-5 h-5 mr-3 text-white/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Performance Metrics Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Performance Metrics
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {performanceMetrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg shadow-xl"
                >
                  <metric.icon className={`w-16 h-16 mx-auto mb-6 ${metric.color}`} />
                  <h3 className="text-4xl font-bold mb-2 text-white">{metric.value}</h3>
                  <p className="text-gray-300">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg group hover:bg-white/20 transition-all duration-300 shadow-md"
                >
                  <tech.icon className="w-12 h-12 text-orange-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Continuous Improvement Cycle</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Monitor", description: "Real-time system monitoring" },
                { title: "Analyze", description: "Performance analysis" },
                { title: "Improve", description: "Implementation of improvements" },
                { title: "Validate", description: "Results verification" }
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg text-center shadow-md">
                    <RefreshCw className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
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
            className="bg-gradient-to-r from-orange-500 to-red-500 p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let us help you achieve operational excellence with our advanced infrastructure and expertise.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-semibold"
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

export default OperationalExcellencePage;