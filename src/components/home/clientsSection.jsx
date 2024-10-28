import React from "react";
import Marquee from "react-fast-marquee";
import { clients } from "../../../utils/clients";
import { motion } from "framer-motion";

const ClientsSection = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-24">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className={`mx-10 text-black md:${
                index === 4 || index === 5 ? `col-span-2 my-5` : `col-span-1`
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-full bg-transparent border-none">
                <div className="flex items-center justify-center h-full p-0">
                  <img
                    src={client.sourceImage}
                    alt="N/A"
                    width={300}
                    className="mx-10 text-black object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;

// <div className="text-black py-16 md:py-32">
//   <motion.h1
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="text-4xl font-bold mb-8 md:mb-16 text-center"
//   >
//     Our Clients
//   </motion.h1>
//   <Marquee speed={75} className="pt-16">
//     {clients.map((client, index) => {
//       return (
//         <motion.img
//           key={client.id}
//           className="mx-10 text-black"
//           src={client.sourceImage}
//           alt="N/A"
//           width={300}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         />
//       );
//     })}
//   </Marquee>
// </div>
