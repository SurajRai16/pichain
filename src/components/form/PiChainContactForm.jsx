"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PiChainContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    company: "",
    email: "",
  });

  const [countryCode, setCountryCode] = useState("+91");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, countryCode });
    // Handle form submission here
  };

  return (
    <div className="section-width">
      <div className=" bg-[url(/images/formBg.png)] bg-center bg-cover text-white relative overflow-hidden rounded-lg margin-bottom margin-top">
        {/* Diagonal lines background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 11px
          )`,
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row p-6 sm:p-8 lg:p-16">
          {/* Left side - Content */}
          <div className="flex-1 flex flex-col justify-center lg:pt-20 mb-8 lg:mb-0">
            <div className="">
              <p className="bg-gradient-to-r from-[#7D7D7D] via-[#FEFEFE] to-[#717171] bg-clip-text text-transparent mb-3 lg:mb-8">
                Building Trust at Every Step
              </p>

              <h2 className="mb-6 lg:mb-8 leading-snug tracking-wide">
                <span className="block">Seamless Onboarding,</span>
                <span className="block">Secure Verification,</span>
                <span className="block bg-gradient-to-t from-[#7D7D7D] to-[#FEFEFE] bg-clip-text text-transparent">
                  Scalable Solutions.
                </span>
              </h2>

              <div className="mt-2 lg:mt-12 xl:mt-20">
                <p className="text-gray-300 mb-4 ">
                  Want to stay updated
                  <br />
                  with PiChain
                </p>

                <p className="text-[#5B5B5B] mb-3 text-xs">
                  Follow us on our socials
                </p>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-auto flex items-start lg:items-center justify-center bg-[#121111] p-6 sm:p-8 lg:p-10 rounded-lg">
            {/* force this inner div to fill its parent on mobile */}
            <div className="w-full">
              <div className="space-y-3 lg:space-y-6">
                {/* Name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors border border-[#323232] text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors border border-[#323232] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div className="relative">
                  <div
                    className="flex focus-within:outline focus-within:outline-white focus-within:outline-offset rounded-lg"
                    tabIndex={0}
                  >
                    <div className="relative">
                      <button
                        type="button"
                        className="flex items-center bg-transparent rounded-l-lg px-1 sm:px-5 py-3 sm:py-4 text-white focus:outline-none transition-colors border border-[#323232] border-r-0 text-xs sm:text-sm"
                      >
                        <span className="mr-1 sm:mr-2">🇮🇳</span>
                        <span className="mr-1 sm:mr-2">{countryCode}</span>
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent rounded-r-lg sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none border border-[#323232] border-l-0 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors border border-[#323232] resize-none text-xs sm:text-sm"
                  />
                </div>

                {/* Company and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-transparent rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors border border-[#323232] text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors border border-[#323232] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div
                  onClick={handleSubmit}
                  className="w-full bg-[#606060] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer text-center text-xs sm:text-sm"
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
