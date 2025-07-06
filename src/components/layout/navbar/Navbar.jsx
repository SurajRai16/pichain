"use client";
import React, { useState } from "react";
import Image from "next/image";
// import ScrollSmoother from "gsap/ScrollSmoother";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleSmoothScroll = (e) => {
  //   e.preventDefault();
  //   const target = e.currentTarget.getAttribute("href");
  //   const smoother = ScrollSmoother.get();
  //   if (smoother && target) {
  //     smoother.scrollTo(target, true);
  //   }
  // };

  return (
    <nav className=" w-full bg-[#0A0A0A]">
      {/* Desktop Navbar */}
      <div className="section-width  ">
        <div className="flex items-center justify-between h-16 bg-[#9D9D9D17] rounded-full px-3 sm:px-6 mt-5 sm:mt-10">
          {/* Logo and Navigation Links Container */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Left Dashboard"
                width={1000}
                height={1000}
                className="w-[120px] sm:w-[120px] sm:h-[40px] lg:w-[150px] lg:h-[100px] object-contain ml-2 sm:ml-6 mt-3 flex-shrink-0"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block pl-8 xl:pl-24">
              <div className="flex items-baseline space-x-6 xl:space-x-20">
                <a
                  href="#whoarewe"
                  className="text-white hover:text-pink-400 transition-colors text-sm xl:text-base duration-200 font-medium whitespace-nowrap"
                  // onClick={handleSmoothScroll}
                >
                  About Us
                </a>
                <a
                  href="#features"
                  className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  // onClick={handleSmoothScroll}
                >
                  Features
                </a>
                <a
                  href="#whychoose"
                  className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  // onClick={handleSmoothScroll}
                >
                  Why Realm
                </a>
                <a
                  href="#blogs"
                  className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  // onClick={handleSmoothScroll}
                >
                  Blogs
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button className="bg-[linear-gradient(180deg,_#484848_0%,_#878787_100%)] border border-gray-600 text-white px-4 xl:px-4 py-2 rounded-xl hover:border-pink-400 hover:text-pink-400 transition-all duration-200 font-medium text-sm xl:text-base">
              <a
                href="#contact"
                className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                Request a Demo{" "}
              </a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-400 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <img
                  src="/images/hero/close-bg.png"
                  alt="Close menu"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              ) : (
                <img
                  src="/images/hero/hamburger.png"
                  alt="Open menu"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#whoarewe"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              About Us
            </a>
            <a
              href="#features"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Why Realm
            </a>
            <a
              href="#blogs"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Blogs
            </a>
            <div className="pt-4">
              <button className="w-full bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full hover:border-pink-400 hover:text-pink-400 transition-all duration-200 font-medium text-sm">
                <a
                  href="#contact"
                  className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  // onClick={handleSmoothScroll}
                >
                  Get in Touch
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
