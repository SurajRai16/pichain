"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const IndustryUseCases = () => {
  const industries = [
    {
      id: 1,
      title: "Financial Services",
      description: "Loan Management, eKYC,\nCustomer & Partner Onboarding",
      image: "/images/Financial.svg",
    },
    {
      id: 2,
      title: "Real Estate",
      description:
        "Property Management, Contracts,\nTenant & Buyer Verification",
      image: "/images/Real.svg",
    },
    {
      id: 3,
      title: "Retail & E-commerce",
      description: "Supply Chain, Inventory,\nCustomer Authentication",
      image: "/images/Retail.svg",
    },
  ];

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
      <div className="relative z-10 flex justify-between items-center sm:pb-3">
        <p className="bg-[#03050D] text-[#3753D2] px-4 py-2 rounded-full border border-[#1C1E25]">
          PiChain is for Your Industry
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 mb-5 sm:mb-10 gap-4">
          <h2 className="bg-gradient-to-r from-[#7D7D7D] via-[#FEFEFE] to-[#717171] bg-clip-text text-transparent">
            Industry-Specific Use Cases
          </h2>
          <button className="bg-gradient-to-b from-[#545454] to-[#828282] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-light shadow-lg shadow-[#828282] 2xl:text-base lg:text-sm text-xs whitespace-nowrap">
            Book a Demo
          </button>
        </div>

        {/* Mobile Swiper - Show only on small screens */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              bulletClass: "industry-bullet",
              bulletActiveClass: "industry-bullet-active",
            }}
            loop={true}
            speed={600}
            className="industry-swiper !pb-12"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                <div className="px-2">
                  <div className="group relative bg-center bg-cover h-[350px] rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${industry.image})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-10">
                      <h6 className="mb-2 font-medium">{industry.title}</h6>
                      <p className="text-[#A0A1A2] text-sm whitespace-pre-line">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom CSS for Industry Swiper styling */}
          <style jsx global>{`
            .industry-swiper .swiper-pagination {
              bottom: 0 !important;
            }

            .industry-swiper .industry-bullet {
              width: 8px !important;
              height: 8px !important;
              background-color: rgba(255, 255, 255, 0.6) !important;
              opacity: 1 !important;
              transition: all 0.3s ease !important;
              margin: 0 4px !important;
              border: none !important;
              border-radius: 50% !important;
              display: inline-block !important;
            }

            .industry-swiper .industry-bullet-active {
              background-color: #3753d2 !important;
              width: 24px !important;
              height: 8px !important;
              border-radius: 4px !important;
            }
          `}</style>
        </div>

        {/* Desktop Grid - Hide on small screens */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative bg-center bg-cover h-[350px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              style={{
                backgroundImage: `url(${industry.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-10">
                <h6 className="mb-2">{industry.title}</h6>
                <p className="text-[#A0A1A2] whitespace-pre-line">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow effects */}
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default IndustryUseCases;
