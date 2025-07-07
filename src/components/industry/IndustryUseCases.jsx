import React from "react";
import { ShoppingCart, Globe, Building2 } from "lucide-react";

const IndustryUseCases = () => {
  return (
    <div className="section-width bg-black text-white relative overflow-hidden margin-bottom margin-top">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-between items-center pb-3">
        <p className="bg-[#03050D] text-[#3753D2] px-4 py-2 rounded-full border border-[#1C1E25]">
          PiChain is for Your Industry
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 mb-10 gap-4">
          <h2 className="bg-gradient-to-r from-[#7D7D7D] via-[#FEFEFE] to-[#717171] bg-clip-text text-transparent">
            Industry-Specific Use Cases
          </h2>
          <button className="bg-gradient-to-b from-[#545454] to-[#828282] px-6 py-3 rounded-lg font-light shadow-lg shadow-[#828282] 2xl:text-base lg:text-sm text-xs whitespace-nowrap">
            Book a Demo
          </button>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
          {/* Financial Services Card */}
          <div className="group relative bg-[url(/images/Financial.svg)] bg-center bg-cover h-[280px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] rounded-xl overflow-hidden hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-10">
              <h6 className="mb-2 text-[#808080] ">Financial Services</h6>
              <p className="text-[#A0A1A2]">
                Loan Management, eKYC,
                <br />
                Customer & Partner Onboarding
              </p>
            </div>
          </div>

          {/* Real Estate Card */}
          <div className="group relative bg-[url(/images/Real.svg)] bg-center bg-cover h-[280px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] rounded-xl overflow-hidden hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-10">
              <h6 className="mb-2 text-[#808080]">Real Estate</h6>
              <p className="text-[#A0A1A2]">
                Property Management, Contracts,
                <br />
                Tenant & Buyer Verification
              </p>
            </div>
          </div>

          {/* Retail Card */}
          <div className="group relative bg-[url(/images/Retail.svg)] bg-center bg-cover h-[280px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] rounded-xl overflow-hidden hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-10">
              <h6 className="mb-2 text-[#808080]">Retail & E-commerce</h6>
              <p className="text-[#A0A1A2]">
                Supply Chain, Inventory,
                <br />
                Customer Authentication
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effects */}
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default IndustryUseCases;
