"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const OnboardingSection = () => {
  const [activeTab, setActiveTab] = useState("Lead Management");

  const tabs = [
    "Lead Management",
    "Customer Onboarding",
    "Vendor Onboarding",
    "Employee Onboarding",
  ];

  const tabContent = {
    "Lead Management": {
      problems: [
        "Disorganized Lead Capture",
        "Lack of Prioritization",
        "Manual follow-ups and communication",
      ],
      solutions: [
        "Lead Capture, Streamlined. No lead Missed.",
        "High-value leads, first. Prioritize what matters.",
        "Engagement, automated. Never miss a follow-up.",
      ],
    },
    "Customer Onboarding": {
      problems: ["No structure in onboarding", "Slow onboarding process"],
      solutions: ["Structured onboarding process", "Speedy onboarding flow"],
    },
    "Vendor Onboarding": {
      problems: ["Confusing vendor process", "Inconsistent communication"],
      solutions: ["Clear vendor process", "Automated communication"],
    },
    "Employee Onboarding": {
      problems: ["Slow employee onboarding", "Manual document handling"],
      solutions: ["Faster onboarding process", "Automated document submission"],
    },
  };

  return (
    <div className=" bg-black text-white relative overflow-hidden">
      {/* AI Badge */}
      <div className="relative z-10 flex justify-center pt-16 mb-5 sm:mb-12 bg-[url(/images/Container.svg)] bg-center bg-cover">
        <div className="bg-[#0B112C] border border-[#2E3349]  px-16 py-1 rounded-full absolute top-3 z-50">
          <span className="text-[#3753D2] font-medium">AI</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="relative z-10 flex justify-center mb-8 sm:mb-16 mx-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 2xl:gap-14 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 sm:px-6 sm:py-6 rounded-lg border transition-all duration-300  ${
                activeTab === tab
                  ? "bg-[#0E0E0F] border-none text-sm sm:text-base"
                  : "  bg-[#0E0E0F] hover:text-gray-300 border-[#1D1D1D] text-[#808080] text-sm sm:text-base"
              }`}
              style={{
                boxShadow:
                  activeTab === tab
                    ? "-20px -8px 30px rgb(100 100 100)"
                    : "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="bg-gradient-to-tr from-[#212121] via-[#161617] to-[#232324] border border-[#5A5A5A] rounded-2xl p-4 sm:p-8 mb-6 sm:mb-12">
          <h2 className=" text-center mb-4 md:mb-12">
            Effortless, Automated Onboarding
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 bg-gradient-to-br from-[#2A2A2B] via-[#161617] to-[#1D1D1E] p-4 sm:p-8 rounded-2xl">
            {/* Problems Column */}
            <div>
              <h6 className="mb-3 sm:mb-6 text-gray-300">Problems</h6>
              <div className="space-y-2 sm:space-y-4">
                {tabContent[activeTab].problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h6 className=" mb-3 sm:mb-6 text-gray-300">
                How PiChain Solves It?
              </h6>

              <div className="space-y-2 sm:space-y-4">
                {tabContent[activeTab].solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      <div className="flex justify-center">
        <div className="flex gap-2 items-center">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-1 transition-all duration-500 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#8DA5FC] to-[#3753D2] w-20 rounded-lg"
                  : "bg-[#3753D2] w-10 hover:bg-gray-500 rounded-lg"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;
