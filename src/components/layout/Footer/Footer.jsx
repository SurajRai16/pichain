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
  // Navigation routes configuration
  const navigationRoutes = [
    { label: "Home", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Product", href: "#" },
    { label: "Features", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Blogs", href: "#" },
  ];

  return (
    <footer className="text-white bg-[#0A0A0A] border border-white border-opacity-15 mx-5 md:mx-14 rounded-xl">
      <div className="p-8 sm:p-20">
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-10">
          {/* Logo on Left */}
          <div className="mb-8 2xl:mb-0">
            <Image
              src="/images/logo/logo.png"
              alt="Realm Logo"
              width={200}
              height={200}
              className=" object-contain"
            />
          </div>

          {/* Navigation Links on Right */}
          <nav className="flex flex-col ">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-14">
              {navigationRoutes.map((route, index) => (
                <li key={index}>
                  <a
                    href={route.href}
                    className="text-gray-400 text-xs sm:text-sm  tracking-wider cursor-pointer hover:text-white hover:opacity-80 transition-all duration-300 ease-in-out block py-1"
                    onClick={handleSmoothScroll}
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white border-opacity-15 mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-10 mb-6 md:mb-0">
            <a
              href="#"
              className="flex items-center text-xs xl:text-base text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy{" "}
            </a>
            <a
              href="#"
              className="flex items-center text-xs xl:text-base text-gray-400 hover:text-white transition-colors"
            >
              Terms of Conditions{" "}
            </a>
          </div>

          {/* Right Side - App Store, Google Play, Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center text-xs xl:text-base text-gray-400 hover:text-white transition-colors"
            >
              Pichain, LLC. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
