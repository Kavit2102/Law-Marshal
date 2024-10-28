import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PhoneCall,
  Search,
  Phone,
  Handshake,
  Scale,
  Book,
  Server,
  ChevronDown,
  Shield,
  HandHelping,
  CheckCircle,
  Briefcase
} from "lucide-react";

// Import images
import debtRecoveryImg from "/jpg/debtRecovery.jpg";
import legalServicesImg from "/jpg/LegalServices.jpg";
import outboundCallsImg from "/jpg/outbound calls.jpg";
import paymentNegotiationImg from "/jpg/paymentNegosiation.jpg";
import skipTracingImg from "/jpg/SkipTracing.jpg";
import debtorEducationImg from "/jpg/DebtorEducation.jpg";
import TechnologyandCompliance from "/jpg/TechnologyandCompliance.jpg";

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

  const serviceCategories = [
    {
      title: "Debt Collection",
      path: "/services/debt-collection",
      icon: PhoneCall,
    },
    {
      title: "Financial Services",
      path: "/services/financial",
      icon: Briefcase,
    },
    {
      title: "Data Verification",
      path: "/services/data-verification",
      icon: Shield, // You can import Shield from lucide-react
    },
    {
      title: "Operational Standards",
      path: "/services/operational-standards",
      icon: Server, // You can import Server from lucide-react
    },
    {
      title: "Scope of Services",
      path: "/services/scope-of-services",
      icon: HandHelping,
    },
  ];

  const services = [
    {
      icon: PhoneCall,
      title: "Debt Recovery",
      description:
        "We specialize in recovering overdue debts from individuals and businesses. Using advanced techniques and negotiation strategies, we ensure timely payments for our clients.",
      image: debtRecoveryImg,
    },
    {
      icon: Search,
      title: "Skip Tracing",
      description:
        "Our skip tracing services help locate debtors who have moved or changed their contact information, ensuring no debt is left uncollected.",
      image: skipTracingImg,
    },
    {
      icon: Phone,
      title: "Outbound Calls",
      description:
        "We engage in outbound calling to remind debtors of their payments, discuss settlement options, and provide customer support.",
      image: outboundCallsImg,
    },
    {
      icon: Handshake,
      title: "Payment Negotiation",
      description:
        "Our trained professionals are skilled in negotiating payment plans and settlements on behalf of our clients to ensure smooth debt resolution.",
      image: paymentNegotiationImg,
    },
    {
      icon: Scale,
      title: "Legal Services",
      description:
        "We work with a network of legal professionals to initiate legal proceedings when necessary, ensuring compliance and swift debt recovery.",
      image: legalServicesImg,
    },
    {
      icon: Book,
      title: "Debtor Education",
      description:
        "We provide educational resources and guidance to debtors, helping them understand their financial responsibilities and improve debt management.",
      image: debtorEducationImg,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen py-32 px-6 md:px-12 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-radial-at-t from-blue-500/20 via-transparent to-transparent opacity-40"></div>
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-600 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-32 right-16 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white"
          >
            Comprehensive solutions tailored for your business success
          </motion.p>

         {/* Service Category Navigation */}
<div className="flex flex-col items-center gap-8 mb-8">
  {/* Regular Service Categories */}
  <div className="flex flex-wrap justify-center gap-6">
    {serviceCategories
      .filter(category => category.title !== "Scope of Services")
      .map((category, index) => (
        <Link 
          key={index}
          to={category.path}
          className="group relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full hover:bg-white/20 transition duration-300"
          >
            <category.icon className="w-5 h-5" />
            <span>{category.title}</span>
          </motion.div>
        </Link>
    ))}
  </div>

  {/* Scope of Services Button (Enlarged and Separated) */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <Link 
      to="/services/scope-of-services"
      className="group relative"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 rounded-full shadow-lg shadow-orange-500/25 transition duration-300 text-xl font-bold"
      >
        <HandHelping className="w-6 h-6" />
        <span>Scope of Services</span>
      </motion.div>
    </Link>
  </motion.div>

  {/* Original Explore Our Services Button */}
  <motion.a
    href="#services"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
  >
    Explore Our Services
    <ChevronDown className="ml-2" size={20} />
  </motion.a>
</div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section
        id="services"
        className="relative py-20 px-6 md:px-12 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 text-center max-w-3xl mx-auto"
          >
            At Law Marshal BPO, we offer a wide range of business process
            outsourcing solutions to help your organization operate more
            efficiently. Our team of experts provides end-to-end services across
            multiple sectors, ensuring optimal performance and customer
            satisfaction.
          </motion.p>

          {/* Vertical Scrolling Section */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8`}
              >
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                    <service.icon className="text-blue-400 mb-4" size={40} />
                    <h3 className="text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology and Compliance Section */}
      <section
        id="technology"
        className="py-20 px-6 md:px-0 relative overflow-hidden" // Changed to md:px-0 to eliminate side padding
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Technology & Compliance
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-justify mb-6">
                We leverage advanced technology, including automated dialing
                systems and secure CRM software, to optimize efficiency and
                performance. Compliance is our top priority, and we strictly
                follow regulatory guidelines to ensure ethical debt collection
                practices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Server className="text-blue-400 mr-4" size={24} />
                  <span>State-of-the-art infrastructure</span>
                </li>
                <li className="flex items-center">
                  <Shield className="text-blue-400 mr-4" size={24} />
                  <span>Robust data security measures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-400 mr-4" size={24} />
                  <span>Adherence to industry regulations</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center "
              style={{ width: "100%", height: "420px", maxWidth: "500px" }}
            >
              <img
                src={TechnologyandCompliance}
                alt="Technology"
                className="rounded-lg   "
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Looking for a Reliable BPO Partner?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Get in touch with us today to explore how our services can drive
            growth and efficiency for your business.
          </motion.p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-semibold"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
  
    </div>
  );
};

export default ServicesPage;
