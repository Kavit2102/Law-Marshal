import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CompanyOverview = () => (
  <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        Our Story
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         <div className="bg-white p-8 rounded-2xl shadow-xl relative">
    <FaQuoteLeft className="text-4xl text-blue-200 absolute top-4 left-4 transform -translate-y-1/2" />
    <p className="mb-6 text-lg text-gray-700 leading-relaxed font-light italic">
        Founded in 2018, Law Marshal has rapidly emerged as a premier Business Process Outsourcing (BPO) and Contact Center headquartered in Indore, Madhya Pradesh, India. We specialize in delivering comprehensive inbound and outbound call center solutions, catering to a wide range of sectors including banking, insurance, telecom, and e-commerce.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed font-light italic">
        With our state-of-the-art infrastructure, advanced technologies, and a highly skilled workforce, we ensure exceptional service quality for our clients. Our unwavering commitment to excellence and innovation has consistently enabled us to deliver outstanding results, positioning Law Marshal as a trusted partner for businesses seeking reliable customer engagement and operational support.
    </p>
    <FaQuoteRight className="text-4xl text-blue-200 absolute bottom-4 right-4 transform translate-y-1/2" />
</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <img
              src="/jpg/office.jpg"
              alt="Law Marshal Office"
              className="rounded-2xl shadow-2xl z-10 relative"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full z-0"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyOverview;
