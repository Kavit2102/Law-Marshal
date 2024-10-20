import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    title: "Collections",
    description: "Our end-to-end collections activity optimizes technology and manual intervention for higher recovery rates.",
    icon: "📊",
  },
  {
    title: "Customer Service",
    description: "Quick, friendly automated solutions to enhance customer relationships.",
    icon: "🤝",
  },
  {
    title: "Debt Recovery",
    description: "Advanced solutions leveraging technology for effective communication and collections.",
    icon: "💰",
  },
  {
    title: "Payment Processing",
    description: "Secure systems to facilitate smooth transactions.",
    icon: "💳",
  },
  {
    title: "Compliance",
    description: "Tools to help organizations maintain compliance in debt collection.",
    icon: "✅",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  
    return (
      <section className="relative overflow-hidden pt-12 bg-gradient-to-br from-gray-900 to-blue-900 pt-0 pb-20"> {/* Removed top padding */}
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-white mb-8">What We Provide</h1>
          <div className="relative h-[24rem] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6" // Reduced padding
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{products[currentIndex].icon}</div> {/* Reduced icon size */}
                <h2 className="text-3xl font-bold mb-3 text-gray-800">{products[currentIndex].title}</h2> {/* Reduced font size */}
                <p className="text-lg text-gray-600 max-w-md">{products[currentIndex].description}</p> {/* Reduced font size and max width */}
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevProduct}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200" // Reduced padding
            aria-label="Previous product"
          >
            <ChevronLeft size={24} className="text-gray-800" /> {/* Reduced icon size */}
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200" // Reduced padding
            aria-label="Next product"
          >
            <ChevronRight size={24} className="text-gray-800" /> {/* Reduced icon size */}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`} // Reduced button size
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
