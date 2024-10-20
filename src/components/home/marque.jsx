import React from "react";
import Marquee from "react-fast-marquee";
import { clients } from "../../../utils/clients";

const Marque = () => {
  return (
    <div className="text-black py-16 md:py-32">
      <h1 className="text-4xl font-bold mb-8 md:mb-16 text-center">
        Our Clients
      </h1>
      <Marquee speed={75} className="pt-16">
        {clients.map((client, index) => {
          return (
            <img
              key={client.id}
              src={client.sourceImage}
              alt="N/A"
              className="mx-10 text-black"
              width={300}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default Marque;