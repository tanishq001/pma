import React from "react";
import { Outlet } from "react-router-dom";
import ArticlesSection from "./ArticlesSection";
import FAQ from "./FAQ";
import Hero from "./Hero";
import HowpmaIsDifferent from "./HowpmaIsDifferent";
import JoinUs from "./JoinUs";
import OurPartners from "./OurPartners";
import PlanYourAdmission from "./PlanYourAdmission";
import SuccessStories from "./SuccessStories";
import TechnologyPoweredBy from "./TechnologyPoweredBy";
import Universities from "./Universities";
import ScrollDown from "../../higherOrderComponents/ScrollDown";

const Home = () => {
  return (
    <>
      <Hero />
      <TechnologyPoweredBy />
      <PlanYourAdmission />
      <HowpmaIsDifferent />
      <Universities />
      <OurPartners />
      <ArticlesSection />
      <SuccessStories />
      <FAQ />
      <JoinUs />
      <ScrollDown />
      <Outlet />
    </>
  );
};

export default Home;
