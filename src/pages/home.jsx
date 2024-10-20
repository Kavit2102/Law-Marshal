import React from "react";
import Marque from "../components/home/marque";
import Features from "../components/home/features";
import EfficientDebtCollection from "../components/home/efficientDebtCollection";
import { Link } from "react-router-dom";
import Industries from "../components/home/industries";

const Home = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="flex relative items-center overflow-hidden py-32 min-h-[100vh]">
        <video
          src="/backgrounds/hero.mp4"
          className="hero-bg opacity-60 object-cover w-full min-h-full"
          autoPlay
          loop
          muted
        ></video>
        <div className="container block px-6 md:px-12 md:flex w-screen justify-between items-center py-16">
          {/* Hero Text */}
          <div className="w-full mx-auto flex flex-col items-center md:items-start gap-10 leading-[25px] relative">
            <h1 className="flex flex-col gap-2 md:block md:text-left text-3xl sm:text-5xl font-black dark:text-white text-gray-800">
              <span className="leading-loose">
                Experience seamless automation,
              </span>
              <span>enhanced productivity, and </span>
              <span>smarter decision-making</span>
            </h1>
            <p className="w-full flex flex-col md:block md:text-left text-base sm:text-2xl text-gray-700 md:max-w-3xl dark:text-white">
              <span className="leading-relaxed">
                We streamline workflows, boost efficiency, and drive growth with
                tailored
              </span>
              <span>solutions designed to optimize your operations</span>
            </p>
            <div className="md:text-left flex items-center justify-center gap-3">
              <Link
                to="/"
                className="uppercase py-2 px-4 rounded-lg bg-[#63e] dark:text-white hover:bg-[#261653] hover:text-white text-md"
              >
                Get started
              </Link>
              <Link
                to="/"
                className="uppercase py-2 px-4 rounded-lg bg-[#63e] dark:text-white hover:bg-[#261653] hover:text-white text-md"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Marque />
      <Features />
      <Industries />
      <EfficientDebtCollection />
    </section>
  );
};

export default Home;
