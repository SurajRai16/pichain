import React from "react";
import Hero from "@/components/Hero/Hero";
import LunaCta from "@/components/banner/LunaCta";
import WhyPiChain from "@/components/whyPiChain/WhyPiChain";
import PiChainContactForm from "@/components/form/PiChainContactForm";
import IndustryUseCases from "@/components/industry/IndustryUseCases";
import OnBoardingSection from "@/components/onBoardingSection/OnboardingSection";

const Footer = () => {
  return (
    <div className="">
      <Hero />
      <LunaCta />
      <WhyPiChain />
      <OnBoardingSection />
      <IndustryUseCases />
      <PiChainContactForm />
    </div>
  );
};

export default Footer;
