"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="section-width margin-top margin-bottom relative  ">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden  xl:min-h-[700px] lg:min-h-[600px] xxl:min-h-[800px]">
        <div className="absolute bottom-20 md:bottom-10 lg:bottom-28  z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[150%] h-auto object-contain"
          >
            <source src="video/bg-video.mp4" type="video/mp4" />
            {/* <source src="YOUR_VIDEO_URL_HERE.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          {/* Optional overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/20"></div> */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20  flex flex-col gap-6 md:items-start items-center text-center md:text-left sm:mt-20 pb-56 pt-10">
        <div>
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(65%_100%_at_50%_50%,_#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)] leading-tight">
            Engage, Verify, and Onboard <br /> with Ease Across Industries
          </h1>
        </div>

        <div className="w-full lg:max-w-[50%]">
          <p className="font-light text-white/80 leading-normal">
            From vendors to employees and customers, PiChain delivers a
            seamless, secure, and fully compliant onboarding experience,
            tailored for any need.
          </p>
        </div>

        <a
          href="https://calendly.com/sudheepta-thekenverse/30min"
          target="blank"
          className="px-6 xl:px-6 py-2 font-light text-sm xl:text-base border-[0.5px] border-white border-opacity-20 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <p className="text-[#DCCEFF]">See PiChain in Action</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;