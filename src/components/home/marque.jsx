import React from "react";
import Marquee from "react-fast-marquee";
import { clients } from "../../../utils/clients";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="text-black py-16 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 md:mb-16 text-center"
      >
        Our Clients
      </motion.h1>
      <Marquee speed={75} className="pt-16">
        {clients.map((client, index) => {
          return (
            <motion.img
              key={client.id}
              src={client.sourceImage}
              alt="N/A"
              className="mx-10 text-black"
              width={300}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default Marque;