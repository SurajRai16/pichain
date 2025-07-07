
import React from "react";
import { GoArrowRight } from "react-icons/go";

const LunaCta = () => {
  return (
    <div className="section-padding">
      <div className=" p-6 sm:p-0 ">
        <div className="relative overflow-hidden  bg-[url('/images/landingpage/cta/mobilebg.png')]  lg:bg-[url('/images/landingpage/cta/kaictabg.png')] bg-cover bg-center bg-no-repeat   section-width border-blue-100 border-[1px] border-opacity-10 rounded-3xl text-white ">
          {/* Content */}
          <div className="relative z-10 p-4 sm:px-10 sm:py-14">
            <div className="max-w-lg">
              <h3 className="text-white font-normal text-left mb-4 sm:mb-6">
                Introducing KAI
              </h3>

              <p className="text-[#EFEDFDB2]  mb-4 sm:mb-6 font-light tracking-wide leading-5 md:leading-7 max-w-3xl">
                Ken42’s Leap into the Future of Learning Where education meets
                intelligence.
              </p>

              <div className="relative flex items-center justify-center max-w-fit p-[1px]">
                <a
                  href="https://kai.ken42.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 font-semibold sm:px-8 sm:py-4 px-6 py-2 rounded-lg inline-block bg-black bg-gradient-to-r from-[#121832] to-[#000A0F]/10 text-white overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]"
                >
                  <p className="flex items-center justify-between text-white">
                    Try KAI
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