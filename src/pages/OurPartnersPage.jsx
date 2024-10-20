import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurPartnersPage = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const partnersRef = useRef(null);

  const scrollToPartners = (e) => {
    e.preventDefault();
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const partners = [
    {
      name: "Bank of Baroda",
      description:
        "Handling Bucket X for Agri Business with inbound/outbound calling.",
      icon: "🏦",
    },
    {
      name: "Axis Bank",
      description:
        "Write Off collection calling, Hygiene checks calling, FCU functions.",
      icon: "💳",
    },
    {
      name: "Hinduja Leyland Finance Ltd.",
      description: "Managing Bucket X, 1, 2, 3 & NPA.",
      icon: "🚚",
    },
    {
      name: "Hero Fincorp Ltd.",
      description: "Handling Bucket X and NPA.",
      icon: "🦸",
    },
    {
      name: "International Asset Reconstruction Co. (IARC)",
      description: "Managing NPA accounts.",
      icon: "🌐",
    },
    {
      name: "Tata Play",
      description: "Providing customer support and service management.",
      icon: "📺",
    },
    {
      name: "OLX",
      description: "Assisting with customer inquiries and platform support.",
      icon: "🛒",
    },
    {
      name: "Bajaj Finserv",
      description:
        "Offering financial services support and customer assistance.",
      icon: "💼",
    },
  ];

  const PartnerCard = ({ partner, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer border border-white/10 flex flex-col justify-between"
      onClick={onClick}
      style={{ height: "100%" }} // Ensure full height for each card
    >
      <div className="p-8 flex-grow">
        {" "}
        {/* Flex-grow to ensure consistent height */}
        <div className="text-4xl mb-4">{partner.icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{partner.name}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {partner.description}
        </p>
      </div>
      <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>{" "}
      {/* Colored line fixed at the bottom */}
    </motion.div>
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
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white font-sans">
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

      {/* Partners Showcase Section */}
      <section
        id="partners"
        ref={partnersRef}
        className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Our Trusted Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                partner={partner}
                onClick={() => setSelectedPartner(partner)}
              />
            ))}
          </div>
        </div>

        {selectedPartner && (
          <PartnerModal
            partner={selectedPartner}
            onClose={() => setSelectedPartner(null)}
          />
        )}
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
    </div>
  );
};

export default OurPartnersPage;
