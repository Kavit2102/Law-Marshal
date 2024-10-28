import React from "react";
import {
  Facebook,
  Instagram,
  Locate,
  LucideLinkedin,
  LucideYoutube,
  MailIcon,
  MapPin,
  Phone,
  PhoneIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-16">
      <div className="w-full px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] items-center lg:flex-row md:px-10">
          <div className="w-full md:w-[516px] flex flex-col items-center">
            <p className="text-[18px] font-medium text-white"></p>
            <h1 className="text-white font-extrabold flex flex-col md:flex-row items-center gap-2">
              <img
                src="/svg/law_marshal_logo.svg"
                alt=""
                width={40}
                height={40}
              />
              <span className="text-3xl">Law Marshal</span>
            </h1>
            <p />
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              We aim to build long term relationships by exceeding customer
              expectations through our business dealings
            </p>
            <div className="mt-[18px] flex items-center justify-center gap-4">
              <Link to={"/"} className="hover:scale-110" target="_blank">
                <Facebook />
              </Link>
              <Link to={"/"} className="hover:scale-110" target="_blank">
                <LucideLinkedin />
              </Link>
              <Link to={"/"} className="hover:scale-110" target="_blank">
                <Instagram />
              </Link>
              <Link to={"/"} className="hover:scale-110" target="_blank">
                <Twitter />
              </Link>
              <Link to={"/"} className="hover:scale-110" target="_blank">
                <LucideYoutube />
              </Link>
            </div>
          </div>
          <div className="my-10 flex flex-col items-center lg:items-start">
            <div className="mt-[23px] flex items-center">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <PhoneIcon />
              </div>
              <div className="ml-[18px]">
                <Link
                  to={"/"}
                  href="tel:+911800123444"
                  className="font-Inter text-[9px] md:text-[14px] font-medium text-white"
                >
                  +91 9407354276
                </Link>
              </div>
            </div>
            <div className="mt-[23px] flex items-center">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <MailIcon />
              </div>
              <div className="ml-[18px]">
                <Link
                  to={"/"}
                  href="mailto:help@lorem.com"
                  className="font-Inter text-[9px] md:text-[14px] font-medium text-[#fff]"
                >
                  admin@lawmarshal.in &#44; hr_admin@lawmarshal.in
                </Link>
              </div>
            </div>
            <div className="mt-[23px] flex items-center">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <MapPin />
              </div>
              <div className="ml-[18px]">
                <Link
                  to={"/contact"}
                  className="font-Inter text-[9px] md:text-[14px] font-medium text-[#fff]"
                >
                  10-111, Swadesh Bhawan, Press Complex, A.B Road, Indore,
                  Madhya Pradesh
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col items-center justify-between text-white sm:flex-row md:mt-0 md:max-w-[201px]">
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-deutziawhite font-inter text-[18px] font-medium">
                Download the app
              </p>
              <div className="flex gap-4 sm:flex-col">
                <Link to={"/"} target="_blank">
                  <img
                    alt="facebook icon"
                    loading="lazy"
                    width={168}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://www.englishyaari.com/img/google-store.svg"
                  />
                </Link>
                <Link to={"/"} target="_blank">
                  <img
                    alt="facebook icon"
                    loading="lazy"
                    width={168}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="https://www.englishyaari.com/img/apple-store.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[12px] font-normal text-white md:text-[14px]">
            &copy; Copyright 2024 , All Rights Reserved by{" "}
            <span className="font-bold">
              Law Marshal&#46; Pvt&#46; Ltd&#46;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
