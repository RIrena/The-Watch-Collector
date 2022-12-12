import React from "react";
import { CustomersReviewCard } from "../components/FourthSection/FourthSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { infoObjSection } from "../components/InfoSection/Data";
import { SecondSection } from "../components/SecondSection/SecondSection";
import ThirdSection from "../components/ThirdSection/ThirdSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <CustomersReviewCard />
      <InfoSection {...infoObjSection} />
    </>
  );
};

export default Home;
