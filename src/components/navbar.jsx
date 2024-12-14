import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../utils/navbar";
import { motion } from "framer-motion";

// Updated service dropdown links to match the provided routes
const serviceDropdownLinks = [
  {
    title: "All Services",
    to: "/services",
    isHighlighted: true,
  },
  {
    title: "Financial Services",
    to: "/services/financial",
  },
  {
    title: "Recovery & Collections",
    to: "/services/recovery",
  },
  {
    title: "Verification & Compliance",
    to: "/services/verification",
  },
  {
    title: "Operational Excellence",
    to: "/services/operational",
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-gray-900 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20 md:h-auto">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/svg/law_marshal_logo.svg" alt="Logo" className="h-10" />
              <span className="font-bold text-2xl ml-2">Law Marshal</span>
            </Link>
          </div>

          {/* Toggle button for mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 transition-all duration-200"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {NavLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                ref={link.title === "Services" ? dropdownRef : null}
                onMouseEnter={() => {
                  if (link.title === "Services") setShowServicesDropdown(true);
                }}
              >
                <Link
                  to={link.to}
                  className="text-base font-medium hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.title}
                </Link>

                {/* Services Dropdown */}
                {link.title === "Services" && showServicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2"
                  >
                    {serviceDropdownLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.to}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 
                          ${service.isHighlighted 
                            ? 'text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600'
                            : 'text-gray-200 hover:bg-gray-700'
                          }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg rounded-md mt-2 z-[9999]"
        >
          <div className="flex flex-col space-y-2 p-4">
            {NavLinks.map((link) => (
              <React.Fragment key={link.id}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.title}
                </Link>
                {link.title === "Services" && (
                  <div className="pl-4 space-y-2">
                    {serviceDropdownLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.to}
                        onClick={() => setIsOpen(false)}
                        className={`block text-sm transition-colors duration-200
                          ${service.isHighlighted 
                            ? 'text-yellow-500 font-semibold'
                            : 'text-gray-300 hover:text-yellow-400'
                          }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;