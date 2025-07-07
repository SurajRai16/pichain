"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
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
    <nav className=" ">
      {/* Desktop Navbar */}
      <div className="section-width  ">
        <div className="flex items-center justify-between h-16 bg-[#9D9D9D17] rounded-full px-3 sm:px-6 mt-5 sm:mt-10 sm:py-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Left Dashboard"
                width={150}
                height={150}
                className=" mt-3"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-5 xl:space-x-20">
              <a
                href="#whoarewe"
                className="text-white hover:text-pink-400 transition-colors text-sm xl:text-base duration-200 whitespace-nowrap"
                // onClick={handleSmoothScroll}
              >
                About Us
              </a>
              <a
                href="#features"
                className="text-white hover:text-pink-400 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
                // onClick={handleSmoothScroll}
              >
                Features
              </a>
              <a
                href="#whychoose"
                className="text-white hover:text-pink-400 transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                // onClick={handleSmoothScroll}
              >
                Why Realm
              </a>
              <a
                href="#blogs"
                className="text-white hover:text-pink-400 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
                // onClick={handleSmoothScroll}
              >
                Blogs
              </a>
            </div>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:block flex-shrink-0">
            <button className="bg-[linear-gradient(180deg,_#484848_0%,_#878787_100%)] text-white px-2 2xl:px-4 py-2 2xl:py-2 rounded-xl transition-all duration-200">
              <a
                href="#contact"
                className="text-white transition-colors duration-200 font-light text-sm 2xl:text-base whitespace-nowrap"
              >
                Request a Demo{" "}
              </a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color="white"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border border-gray-800 mx-5 rounded-xl mt-5">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#whoarewe"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#features"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#whychoose"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Realm
            </a>
            <a
              href="#blogs"
              className="block text-white hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
            <div className="pt-4">
              <button className="w-full bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full hover:border-pink-400 hover:text-pink-400 transition-all duration-200 font-medium text-sm">
                <a
                  href="#contact"
                  className="text-white hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                  onClick={() => setIsMenuOpen(false)}
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
