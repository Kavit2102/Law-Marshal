import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneCall, Database, Award, Users, Check, Star } from "lucide-react";

const OurPartnersPage = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const partnersRef = useRef(null);

  const scrollToPartners = (e) => {
    e.preventDefault();
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Success metrics data
  const successMetrics = [
    { label: "Recovery Rate", value: "85%", icon: Award },
    { label: "Client Satisfaction", value: "95%", icon: Star },
    { label: "Active Partners", value: "50+", icon: Users },
  ];

  const partners = [
    {
      name: "Bank of Baroda",
      description: "Handling Bucket X for Agri Business with inbound/outbound calling.",
      icon: "🏦",
      successStory: {
        title: "Agricultural Business Collections Excellence",
        metrics: "Achieved improvement in recovery rates",
        details: "Successfully implemented specialized collection strategies for agricultural business loans, resulting in significant improvement in recovery rates and customer satisfaction.",
      }
    },
    {
      name: "Axis Bank",
      description: "Write Off collection calling, Hygiene checks calling, FCU functions.",
      icon: "💳",
      successStory: {
        title: "Enhanced Due Diligence",
        metrics: "accuracy in hygiene checks",
        details: "Implemented comprehensive FCU functions and hygiene checks, leading to improved data accuracy and reduced risk exposure.",
      }
    },
    {
      name: "Hinduja Leyland Finance Ltd.",
      description: "Managing Bucket X, 1, 2, 3 & NPA.",
      icon: "🚚",
      successStory: {
        title: "Streamlined NPA Management",
        metrics: "Delivered exceptional value through strategic initiatives",
        details: "Developed and executed effective strategies for managing non-performing assets, resulting in a significant reduction in NPA levels and improved recovery processes.",
      }
    },
    {
      name: "Hero Fincorp Ltd.",
      description: "Handling Bucket X and NPA.",
      icon: "🦸",
      successStory: {
        title: "Effective Bucket Management",
        metrics: "Contributed greatly to overall operational efficiency",
        details: "Implemented targeted collection strategies for Bucket X and NPA accounts, leading to a marked increase in recovery rates and enhanced customer engagement.",
      }
    },
    {
      name: "International Asset Reconstruction Co. (IARC)",
      description: "Managing NPA accounts.",
      icon: "🌐",
      successStory: {
        title: "Optimized NPA Recovery",
        metrics: "Significantly enhanced asset recovery efforts",
        details: "Utilized advanced analytics and targeted outreach to optimize the recovery of non-performing assets, resulting in a substantial improvement in recovery metrics.",
      }
    },
    {
      name: "Tata Play",
      description: "Providing customer support and service management.",
      icon: "📺",
      successStory: {
        title: "Enhanced Customer Support",
        metrics: "Added significant value to customer interactions",
        details: "Revamped customer support processes, leading to improved service management and a significant increase in customer satisfaction ratings.",
      }
    },
    {
      name: "OLX",
      description: "Assisting with customer inquiries and platform support.",
      icon: "🛒",
      successStory: {
        title: "Improved User Experience",
        metrics: "Elevated the quality of customer engagement",
        details: "Implemented a new inquiry management system that streamlined responses and improved overall user experience on the platform.",
      }
    },
    {
      name: "Bajaj Finserv",
      description: "Offering financial services support and customer assistance.",
      icon: "💼",
      successStory: {
        title: "Increased Financial Literacy",
        metrics: "Provided invaluable support to customers",
        details: "Conducted financial literacy workshops and provided personalized assistance, significantly enhancing customer understanding of financial products and services.",
      }
    },
  ];
  

  const PartnerCard = ({ partner, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="p-8">
        <div className="text-4xl mb-4">{partner.icon}</div>
        <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
        <p className="text-gray-300 mb-4">{partner.description}</p>
        <button
          onClick={() => onClick(partner)}
          className="text-purple-400 hover:text-purple-300 font-semibold"
        >
          View Success Story →
        </button>
      </div>
    </motion.div>
  );
  const MetricCard = ({ metric }) => (
    <div className="bg-white/5 rounded-lg p-6 text-center">
      <metric.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
      <h4 className="text-3xl font-bold mb-2">{metric.value}</h4>
      <p className="text-gray-400">{metric.label}</p>
    </div>
  );

  const PartnerModal = ({ partner, onClose }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-3xl font-bold mb-4 text-white">{partner.name}</h3>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          {partner.description}
        </p>
        <button
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 bg-gradient-to-r from-purple-700 to-indigo-800 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Building Stronger Partnerships
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              At Law Marshal BPO, we believe that collaboration is the key to
              delivering exceptional service. Our partners share our commitment
              to excellence, innovation, and customer satisfaction.
            </p>
            <button
              onClick={scrollToPartners}
              className="inline-block bg-purple-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Our Partners
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/jpg/whywhyreal.jpg"
              alt="Partnership Illustration"
              className="rounded-lg shadow-2xl"
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
        </div>
      </section>

      {/* Success Metrics Section - New */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>
        </div>
      </section>

     

      {/* Partners Showcase Section - Enhanced with success stories */}
      <section ref={partnersRef} className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                partner={partner}
                onClick={setSelectedPartner}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-indigo-800 to-purple-700"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join us in delivering unparalleled service to our clients. Contact
            us today!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    {/* Modal for success stories */}
    {selectedPartner && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedPartner.successStory.title}</h3>
            <p className="text-purple-400 text-xl mb-4">{selectedPartner.successStory.metrics}</p>
            <p className="text-gray-300 mb-6">{selectedPartner.successStory.details}</p>
            <button
              onClick={() => setSelectedPartner(null)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurPartnersPage;