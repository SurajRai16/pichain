"use client";
import React from "react";
const Hero = () => {
  return (
    <div className="section-width margin-top margin-bottom">
      {" "}
      <div className="  relative z-20 flex flex-col gap-6 md:items-start items-center text-center md:text-left sm:mt-20 ">
        <div>
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(65%_100%_at_50%_50%,_#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)] leading-tight  ">
            Engage, Verify, and Onboard <br /> with Ease Across Industries
          </h1>
          {/* <h1 className="text-transparent bg-clip-text bg-[radial-gradient(65%_100%_at_50%_50%,_#FFFFFF_30%,_rgba(255,255,255,0.4)_100%)]">
            with Ease Across Industries
          </h1> */}
        </div>

        <div className=" w-full lg:max-w-[50%]">
          <p className="font-light text-white/80  leading-normal ">
            From vendors to employees and customers, PiChain delivers a
            seamless, secure, and fully compliant onboarding experience, tailored for any need.
          </p>
         
        </div>

        {/* For less than 360px screen width - only visible on screens smaller than 360px */}
       

        <a
          href="https://calendly.com/sudheepta-thekenverse/30min"
          target="blank"
          className="px-6 xl:px-6 py-2  font-light text-sm xl:text-base border-[0.5px] border-white border-opacity-20 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <p className="text-[#DCCEFF]">See PiChain in Action</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
