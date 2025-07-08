"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[700px] sm:[700px] 2xl:h-[850px] overflow-hidden">
      {/* Video Background - Full screen height only */}
      <div className="absolute inset-0 w-full h-full z-0 pt-40 sm:pt-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="video/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay on top of video */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3753D2] to-[#0D8B04] opacity-10 hue-rotate-15"></div>
      </div>

      {/* Content - Centered in viewport */}
      <div className="relative section-width z-30 flex flex-col gap-5 md:items-start items-center text-center md:text-left h-full mt-40 sm:mt-0 pb-0 sm:pb-60 sm:justify-center px-4 sm:px-6">
        <div>
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(65%_100%_at_50%_50%,_#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)]">
            Engage, Verify, and Onboard <br /> with Ease Across Industries
          </h1>
        </div>

        <div className="w-full lg:max-w-[60%]">
          <p className="font-light text-[#C5C5C5CC]">
            From vendors to employees and customers, PiChain delivers a
            seamless, secure, and fully compliant onboarding experience,
            tailored for any need.
          </p>
        </div>

        <a
          href="https://calendly.com/sudheepta-thekenverse/30min"
          target="blank"
          className="px-6 xl:px-6 py-2 font-light text-sm xl:text-base border-[0.5px] border-[#DCCEFF] border-opacity-75 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-2"
        >
          <p className="text-[#DCCEFF]">See PiChain in Action</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
