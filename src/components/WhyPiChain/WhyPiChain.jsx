"use client";
import React from "react";

const WhyPiChain = () => {
  const features = [
    {
      id: 1,
      title: "Effortless, Automated Onboarding",
      description:
        "Streamline onboarding with custom workflows and automated compliance.",
      image: "images/whypichain/c1.png", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Security & Compliance First",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/c2.png", // Replace with your actual image path
    },
    {
      id: 3,
      title: "Tailored for All Industries",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/c3.png", // Replace with your actual image path
    },
  ];

  return (
    <section className="section-width pb-16 lg:pb-24">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className=" bg-gradient-to-r from-white to-[#717171] bg-clip-text text-transparent">
          Why PiChain{" "}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 relative">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden min-w-[280px] max-w-[600px] mx-auto w-full "
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Background overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-black/5  rounded-2xl"></div> */}

            {/* Empty transparent div to maintain spacing for image area */}
            <div className="relative z-10 h-48 sm:h-56 md:h-32 xl:h-56 mb-6 transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-center mt-6 lg:mt-20">
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white mb-3 lg:mb-4 leading-tight">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base lg:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPiChain;
