import React from "react";
import { GoArrowRight } from "react-icons/go";

const LunaCta = () => {
  return (
    <div className="padding-bottom mt-[-100px] lg:pt-40">
      <div className=" p-6 sm:p-0 ">
        <div className="relative overflow-hidden  bg-[url('/images/banner/banner-bg.png')]  lg:bg-[url('/images/banner/banner-bg.png')] bg-cover bg-center bg-no-repeat   section-width border-blue-100 border-[1px] border-opacity-10 rounded-3xl text-white ">
          {/* Content */}
          <div className="relative z-10 p-4 sm:px-10 sm:py-14">
            <div className="w-full sm:max-w-[100%]  md:max-w-[80%] lg:max-w-[50%] ">
              <h3 className="text-white font-normal text-left mb-4 sm:mb-6">
                Meet Luna by PiChain <br />Your Full-Stack Customer Manager
              </h3>

              <p className="text-[#EFEDFDB2]  mb-4 sm:mb-6 font-light tracking-wide leading-5 md:leading-7 max-w-3xl">
              Automate workflows, scale your support, and boost efficiency, all with one seamless AI-powered solution.
              </p>

              <div className="relative flex items-center justify-center max-w-fit p-[1px]">
                <a
                  href="https://kai.ken42.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 font-normal sm:px-8 sm:py-2 px-6 py-2 rounded-lg inline-block bg-black bg-gradient-to-r from-[#121832] to-[#000A0F]/10 text-white overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]"
                >
                  <p className="flex items-center justify-between text-white">
                    Try Luna
                    <span className="ml-4">
                      <GoArrowRight className="text-white text-2xl " />
                    </span>
                  </p>
                </a>

                {/* Gradient Border via before */}
                <span className="absolute inset-0 rounded-lg pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(90deg,#17D1E4_62%,#0023B9)] before:-z-10"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunaCta;
