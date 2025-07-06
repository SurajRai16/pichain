"use client";
import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

const handleSmoothScroll = (e) => {
  e.preventDefault();
  const target = e.currentTarget.getAttribute("href");
  const smoother = ScrollSmoother.get();
  if (smoother && target) {
    smoother.scrollTo(target, true);
  }
};

const Footer = () => {
  return (
    <footer className="text-white bg-[#0A0A0A] padding-bottom border-t-[0.1px] border-white border-opacity-15">
      <div className="section-width py-16 px-12   md:px-0">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          {/* Logo on Left */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/logo/logo.png"
              alt="Realm Logo"
              width={1000}
              height={1000}
              className="w-[140px] h-auto object-contain"
            />
          </div>

          {/* Navigation Links on Right */}
          <div className="flex flex-wrap gap-8 md:gap-20">
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
              <a href="#whoarewe"> About US</a>
            </p>
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
              <a href="#features"> FEATURES</a>
            </p>
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
              <a href="#whychoosebtm">WHY REALM</a>
            </p>
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
              <a href="#blogs"> BLOGS</a>
            </p>
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
              <a href="#contact"> GET IN TOUCH</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white border-opacity-15 mb-14"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-10 mb-6 md:mb-0">
            <span className="text-gray-400 text-sm">
              © Realm 2024. All rights reserved
            </span>

            <a
              href="#"
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-md mr-1">
                <GoDotFill />
              </span>
              Terms of Use
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm text-center flex justify-center items-center hover:text-white transition-colors"
            >
              <span className="text-md mr-1">
                <GoDotFill />
              </span>
              Privacy Policy
            </a>
          </div>

          {/* Right Side - App Store, Google Play, Social Icons */}
          <div className="flex items-center gap-6">
            {/* App Store */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/hero/appstore.png"
                alt="Download on the App Store"
                width={1000}
                height={1000}
                className="sm:h-11 h-12  object-contain w-auto"
              />
            </a>

            {/* Google Play */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/hero/playstore.png"
                alt="Get it on Google Play"
                width={1000}
                height={1000}
                className="sm:h-11 h-12 object-contain w-auto"
              />
            </a>

            {/* Instagram Icon */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/hero/insta.png"
                alt="Get it on Google Play"
                width={1000}
                height={1000}
                className="sm:h-10 h-12 object-contain w-auto"
              />
            </a>

            {/* LinkedIn Icon */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/hero/linkedin.png"
                alt="Get it on Google Play"
                width={1000}
                height={1000}
                className="sm:h-10 h-12 object-contain w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
