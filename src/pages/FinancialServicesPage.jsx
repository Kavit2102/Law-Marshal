import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Building,
  CreditCard,
  BookOpen,
  Shield,
  ChartBar,
  AlertTriangle,
  Users,
  Banknote,
  GraduationCap,
  Car,
  Home,
  Factory,
  Tractor,
  ShoppingBag,
  Phone,
  BarChart2,
  ClipboardCheck,
  AlertCircle,
} from "lucide-react";

// New Fraud Management Card Component
const FraudManagementCard = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-900 to-blue-900 p-10 rounded-2xl shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-8">
        <Shield className="w-16 h-16 text-blue-400 mr-6" />
        <h3 className="text-3xl font-bold text-white">Comprehensive Fraud Management Services</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            In today's complex financial ecosystem, protecting your business from fraud requires a multi-dimensional approach. Our Fraud Management Services provide an advanced, proactive framework designed to detect, prevent, and mitigate risks across multiple channels.
          </p>

          <h4 className="text-xl font-semibold text-blue-400 mb-4">Key Protective Measures:</h4>
          <ul className="space-y-3">
            {[
              "Real-time transaction monitoring",
              "AI-driven anomaly detection",
              "Comprehensive risk assessment",
              "Adaptive security protocols"
            ].map((measure, index) => (
              <li 
                key={index} 
                className="flex items-center text-gray-300 bg-white/10 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                <span>{measure}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {[
            {
              icon: AlertCircle,
              color: "text-yellow-400",
              title: "Customer Education",
              description: "Empowering clients with proactive fraud awareness and prevention strategies."
            },
            {
              icon: BarChart2,
              color: "text-green-400",
              title: "Advanced Analytics",
              description: "Leveraging AI and machine learning for predictive threat detection."
            },
            {
              icon: ClipboardCheck,
              color: "text-blue-400",
              title: "Regulatory Compliance",
              description: "Ensuring adherence to global security and financial regulations."
            }
          ].map((service, index) => (
            <div key={index} className="flex items-start bg-white/5 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              <service.icon className={`w-10 h-10 ${service.color} mr-4 mt-1`} />
              <div>
                <h5 className="text-xl font-semibold text-white mb-2">{service.title}</h5>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
// Main Page Component
const FinancialServicesPage = () => {
  const loanTypesManagement = [
    {
      icon: Home,
      title: "Loans Against Property",
      description: "Property-backed loans with flexible terms"
    },
    {
      icon: Car, title: "Commercial Vehicle Loans",
      description: "Financing solutions for commercial vehicles"
    },
    {
      icon: Briefcase,
      title: "Working Capital Loans",
      description: "Business operational funding and cash flow support"
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Comprehensive funding for educational pursuits"
    },
    {
      icon: Banknote,
      title: "Gold Loans",
      description: "Quick and secure loans against gold assets"
    },
    {
      icon: CreditCard,
      title: "Overdraft Facility",
      description: "Flexible credit line for immediate financial needs"
    }
  ];

  // Sector Management Sections
  const sectorManagement = [
    {
      title: "Banking Sector",
      services: [
        "Customer Service and Support",
        "Collections",
        "Loan and Credit Services",
        "Lead Generation and Sales",
        "Fraud Detection and Risk Management",
        "Feedback and Surveys",
        "Compliance and Notifications",
        "Help Desk Services"
      ]
    },
    {
      title: "Telecommunications Sector",
      services: [
        "Customer Support",
        "Billing and Payments",
        "Plan and Service Information",
        "Retention and Win-Back Campaigns",
        "Technical Support",
        "Lead Generation and Upselling",
        "Feedback Collection",
        "Complaint Resolution"
      ]
    },
    {
      title: "FMCG Sector",
      services: [
        "Order Management",
        "Product Support and Information",
        "Complaint Management"
      ]
    }
  ];

  const frameworkFeatures = [
    {
      icon: ChartBar,
      title: "Advanced Analytics",
      features: [
        "Real-time Monitoring",
        "AI-driven Pattern Recognition",
        "Predictive Analysis",
        "Risk Assessment"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      features: [
        "Regulatory Adherence",
        "Compliance Management",
        "Risk Assessment",
        "Security Protocols"
      ]
    }
  ];

  const bucketManagement = [
    {
      icon: Users,
      title: "Customer Engagement",
      items: [
        "PDD Management",
        "Proactive engagement for pre and post due date accounts",
        "Strategic communication",
        "Payment reminder systems"
      ]
    },
    {
      icon: Banknote,
      title: "Recovery Support",
      items: [
        "Dues Recovery",
        "Payment Hygiene Maintenance",
        "Bucket 1-3 Handling",
        "NPA Prevention"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Financial Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elevating financial institutions with cutting-edge solutions and regulatory excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Framework Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Financial Framework</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive financial services infrastructure combines security, analytics, and expert management systems.
            </p>
          </motion.div>

          {/* Updated Financial Framework Layout */}
          <div className="space-y-8">
            {/* Top Row with Two Equal Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {frameworkFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-6">
                    <feature.icon className="w-12 h-12 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li 
                        key={i} 
                        className="text-gray-300 flex items-center bg-white/5 px-4 py-2 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Full Width Fraud Management Card */}
            <FraudManagementCard />
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Loan Types Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to diverse needs and sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {loanTypesManagement.map((loan) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <loan.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{loan.title}</h3>
                <p className="text-gray-300">{loan.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Management Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Sector Management Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized service solutions across multiple industry verticals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectorManagement.map((sector) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{sector.title}</h3>
                <ul className="space-y-2">
                  {sector.services.map((service, index) => (
                    <li 
                      key={index} 
                      className="text-gray-300 flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bucket Management Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w ```jsx
        -7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Bucket Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proactive management of customer engagement and recovery support to maintain financial health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {bucketManagement.map((bucket, index) => (
              <motion.div
                key={bucket.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <bucket.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{bucket.title}</h3>
                <ul className="space-y-2">
                  {bucket.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;