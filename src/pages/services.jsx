import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  ArrowUpRight,
  Server,
  Shield,
  CheckCircle,
  LineChart,
  Building,
  FileCheck,
} from "lucide-react";

const ServicesPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const mainCategories = [
    {
      title: "Financial Solutions",
      description:
        "Comprehensive financial services infrastructure and management systems.",
      icon: Briefcase,
      path: "/services/financial",
      features: ["Financial Framework", "Loan Products", "Banking Services"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Recovery & Collections",
      description: "Expert debt recovery and collection management services.",
      icon: LineChart,
      path: "/services/recovery",
      features: ["Debt Recovery", "Delinquency Management", "Skip Tracing"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Verification & Compliance",
      description:
        "Advanced data verification and regulatory compliance solutions.",
      icon: Shield,
      path: "/services/verification",
      features: ["Credit Processing", "Data Authentication", "Compliance Management"],
      color: "from-green-500 to-green-700",
    },
    {
      title: "Operational Excellence",
      description: "State-of-the-art infrastructure and operational standards.",
      icon: Server,
      path: "/services/operational",
      features: ["Technology Infrastructure", "Quality Assurance", "Security Protocols"],
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-28 px-8">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Comprehensive Business Solutions
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our range of specialized services designed to enhance your business operations and drive sustainable growth.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Link to={category.path}>
                  <div
                    className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <category.icon className="w-10 h-10 text-white" />
                      <ArrowUpRight className="w-6 h-6 text-white/80" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                    <p className="text-gray-200 mb-6">{category.description}</p>
                    <div className="border-t border-white/20 pt-4">
                      <ul className="space-y-2">
                        {category.features.map((feature) => (
                          <li key={feature} className="flex items-center text-white/90">
                            <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-8 bg-gray-800/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-6">Why Choose Our Services</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine industry expertise with cutting-edge technology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              {
                icon: Building,
                title: "Industry Expertise",
                description: "Over decades of experience serving diverse sectors.",
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Advanced security protocols and compliance measures.",
              },
              {
                icon: FileCheck,
                title: "Quality Assured",
                description: "Rigorous quality control and performance monitoring.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white/10 p-8 rounded-2xl shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Contact us today to discuss how we can help optimize your operations.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
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

export default ServicesPage;
