"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhyPiChain = () => {
  const features = [
    {
      id: 1,
      title: "Effortless, Automated Onboarding",
      description:
        "Streamline onboarding with custom workflows and automated compliance.",
      image: "images/whypichain/f1.png",
    },
    {
      id: 2,
      title: "Security & Compliance First",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/f2.png",
    },
    {
      id: 3,
      title: "Tailored for All Industries",
      description:
        "PiChain provides secure, compliant encryption and verification.",
      image: "images/whypichain/f3.png",
    },
  ];

  return (
    <section className="section-width py-16 lg:py-24">
      <div className="text-center mb-6 sm:mb-9 lg:mb-16">
        <div>
          <h2 className="text-transparent bg-clip-text bg-[radial-gradient(65%100%_at_50%_50%,#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)] leading-tight">
            Why PiChain{" "}
          </h2>
        </div>
      </div>

      {/* Mobile Swiper - Show only on small screens */}
      <div className="block md:hidden">
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
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          loop={true}
          speed={600}
          className="whypichain-swiper !pb-10"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className="bg-black px-2">
                <div className="bg-[#1d1d1d] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 h-[350px] flex flex-col">
                  {/* Image container - standardized height */}
                  <div className="h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content with flexible height */}
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold tracking-normal text-[#F1F1EF] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#ADADAD] leading-relaxed text-sm font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom CSS for Swiper styling */}
        <style jsx global>{`
          .whypichain-swiper .swiper-pagination {
            bottom: 0 !important;
          }

          .whypichain-swiper .custom-bullet {
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

          .whypichain-swiper .custom-bullet-active {
            background-color: #3753d2 !important;
            width: 24px !important;
            height: 8px !important;
            border-radius: 4px !important;
          }
        `}</style>
      </div>

      {/* Desktop Grid - Hide on small screens */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#1d1d1d] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-[350px] flex flex-col"
          >
            {/* Image container - standardized height */}
            <div className="h-52 overflow-hidden flex-shrink-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content with flexible height */}
            <div className="p-6 text-center flex-1 flex flex-col justify-center">
              <h6 className=" text-[#F1F1EF] mb-1">{feature.title}</h6>
              <p className="text-[#ADADAD]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPiChain;
