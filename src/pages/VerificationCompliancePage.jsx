import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  FileCheck,
  Scan,
  Clock,
  Fingerprint,
  CheckCircle,
  ArrowRightCircle,
  Database,
  Lock,
  RefreshCcw
} from 'lucide-react';

// Service Card Component
const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
  >
    <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
      <div className="flex items-center justify-between mb-4">
        <service.icon className="w-10 h-10" />
        <ArrowRightCircle className="w-6 h-6 opacity-70" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-sm opacity-80">{service.description}</p>
    </div>
    <div className="border-t border-gray-200 p-4 bg-gray-50">
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Process Step Component
const ProcessStep = ({ step, index, totalSteps }) => (
  <div className="relative">
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg">
      <step.icon className="w-12 h-12 text-green-400 mb-4 mx-auto" />
      <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
      <p className="text-gray-300 text-center">{step.description}</p>
    </div>
    {index < totalSteps - 1 && (
      <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-green-500/20 transform translate-x-1/2">
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <ArrowRightCircle className="w-6 h-6 text-green-500 transform rotate-90" />
        </div>
      </div>
    )}
  </div>
);

// Main Component
const VerificationCompliancePage = () => {
  // Detailed Services Configuration
  const services = [
    {
      title: "Credit Processing",
      description: "Advanced credit information processing and verification systems",
      icon: FileCheck,
      features: [
        "Real-time credit assessment",
        "Automated verification workflows",
        "Multi-source validation",
        "Instant decision support"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Data Authentication",
      description: "Comprehensive data verification and validation services",
      icon: Fingerprint,
      features: [
        "Document verification",
        "Identity validation",
        "Address confirmation",
        "Employment verification"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Compliance Management",
      description: "End-to-end regulatory compliance and risk management",
      icon: Shield,
      features: [
        "Regulatory monitoring",
        "Compliance reporting",
        "Risk assessment",
        "Audit support"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Real-time Processing",
      description: "Instant verification and processing solutions",
      icon: Clock,
      features: [
        "Instant verification",
        "Automated processing",
        "Real-time updates",
        "Status tracking"
      ],
      color: "from-teal-500 to-teal-700"
    }
  ];

  // Detailed Process Steps Configuration
  const processSteps = [
    {
      icon: Scan,
      title: "Data Collection",
      description: "Secure gathering of required information"
    },
    {
      icon: Database,
      title: "Verification",
      description: "Multi-source authentication process"
    },
    {
      icon: Lock,
      title: "Validation",
      description: "Comprehensive accuracy checks"
    },
    {
      icon: RefreshCcw,
      title: "Processing",
      description: "Real-time decision processing"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-gray-200">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Verification & Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced data verification solutions ensuring accuracy, security, and regulatory compliance for your business operations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Verification Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={step.title} 
                  step={step} 
                  index={index} 
                  totalSteps={processSteps.length} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Accuracy Rate", value: "99.9%" },
              { label: "Processing Speed", value: "<30s" },
              { label: "Compliance Rate", value: "100%" },
              { label: "Clients Served", value: "500+" }
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your Verification Process?</h2>
          <p className="text-lg text-gray-200 mb-8">Contact us today to schedule a consultation and discover how we can help you.</p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VerificationCompliancePage;