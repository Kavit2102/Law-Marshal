import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, Server, Cloud, Shield } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ProductCarousel from "./productcarousel.jsx";
import { Link } from "react-router-dom";
import CTASection from "./ctaSection.jsx";
import { testimonials } from "../../utils/products.js";
import Marquee from "react-fast-marquee";

const ProductCard = ({ title, description, icon: Icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-gray-700"
    >
      <div className="bg-blue-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-blue-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-blue-300 font-serif">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 font-light">{description}</p>
      <motion.button
        className="text-blue-300 font-semibold flex items-center group"
        whileHover={{ x: 5 }}
      >
        Learn More
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>
    </motion.div>
  );
};

const FeaturedProduct = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  lastItem = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
      className={`relative ${reverse ? "bg-gray-800" : "bg-gray-900"} ${
        lastItem ? "pb-0" : "pb-16"
      } pt-16`}
    >
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div
          className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
            reverse ? "lg:col-start-2" : ""
          }`}
        >
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-blue-300 font-serif">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-300 text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div
            className={`-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0 ${
              reverse ? "lg:right-0" : "lg:left-0"
            }`}
          >
            <img
              alt={imageAlt}
              loading="lazy"
              width={647}
              height={486}
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
              style={{ color: "transparent" }}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = ({ tech }) => (
  <motion.div
    className="bg-black bg-opacity-70 p-6 rounded-lg shadow-neon m-4 w-64 backdrop-blur-sm"
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4FD1C5" }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center justify-center mb-4">{tech.icon}</div>
    <h4 className="font-bold text-cyan-400 mb-2">{tech.name}</h4>
    <p className="text-sm text-gray-300">{tech.description}</p>
  </motion.div>
);

const Testimonial = ({ quote, author, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-800 italic mb-4">"{quote}"</p>
    <p className="font-bold text-gray-900">{author}</p>
    <p className="text-gray-600">{company}</p>
  </div>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const productsRef = useRef(null);

  const techStack = [
    {
      id: 1,
      name: "Automated Systems",
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      description: "Efficient outreach and communication management",
    },
    {
      id: 2,
      name: "security",
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      description: "Robust protection for sensitive data and operations",
    },
  ];

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-900 text-white py-32 min-h-screen px-4 md:px-12 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 text-blue-300 font-serif">
            Innovative Solutions for Modern Business Challenges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Discover our cutting-edge products and services designed to enhance
            your operations and customer relationships.
          </p>
          <motion.button
            className="bg-white text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300"
            whileHover={{ y: -5 }}
            onClick={scrollToProducts}
          >
            Explore Our Products
          </motion.button>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <section
        ref={productsRef}
        className="relative overflow-hidden bg-gray-800 pb-20    "
      >
        <FeaturedProduct
          title="Collections as a Service"
          description="Our Collections as a Service (CaaS) offers end-to-end collections management, blending advanced technology and skilled manual intervention. Automated processes drive efficiency, while expert agents handle complex cases, ensuring faster recovery and improved customer experience."
          imageSrc="/jpg/cas.jpg"
          imageAlt="Collections as a Service"
        />
        <FeaturedProduct
          title="Customer Service Provider"
          description="Our Customer Service Solutions combine automated systems with personalized support to enhance efficiency while building strong customer relationships. We streamline interactions with AI-driven tools, ensuring quick resolutions and fostering lasting customer loyalty."
          imageSrc="/jpg/ccp.jpg"
          imageAlt="Customer Service Provider"
          reverse
          lastItem={true}
        />
      </section>

      {/* Product Cards Section */}
      <ProductCarousel />

      {/* Technology Stack Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 px-4 md:px-12 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] bg-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technology to deliver innovative
              solutions that keep you ahead in the digital age.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TechStack tech={tech} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients
              who have experienced the Law Marshal BPO difference.
            </p>
          </motion.div>
          <div className="flex">
            <Marquee speed={25}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Testimonial {...testimonial} />
                </motion.div>
              ))}
            </Marquee>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
};

export default Products;
