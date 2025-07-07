"use client";
import React from "react";

const WhyPiChain = () => {
  const features = [
    {
      id: 1,
      title: "Effortless, Automated Onboarding",
      description:
        "Streamline onboarding with custom workflows and automated compliance.",
      image: "images/whypichain/f1.png", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Security & Compliance First",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/f2.png", // Replace with your actual image path
    },
    {
      id: 3,
      title: "Tailored for All Industries",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/f3.png", // Replace with your actual image path
    },
  ];

  return (
    <section className="section-width py-16 lg:py-24">
      <div className="text-center mb-12 lg:mb-16">
        <div>
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(65%100%_at_50%_50%,#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)] leading-tight">
            Why PiChain{" "}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1d1d1d] backdrop-blur-sm  rounded-2xl overflow-hidden  transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image container - no padding, covers full width */}
            <div className="lg:h-56 xl:h-72 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover "
              />
            </div>

            {/* Content with padding */}
            <div className="p-6 lg:p-4 xl:p-10 text-center">
              <h3 className="text-xl lg:text-2xl font-bold tracking-normal text-[#F1F1EF] mb-4 ">
                {feature.title}
              </h3>
              <p className="text-[#ADADAD] leading-relaxed text-sm font-normal lg:text-base">
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
