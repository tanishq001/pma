import React, { useEffect } from "react";
import { pricingPlans } from "./data";
import Card from "../../higherOrderComponents/PricingCard";
import FAQ from "../home/FAQ";
import Header from "../../higherOrderComponents/Header";
const Pricing = () => {
  return (
    <div>
      <Header heading="pricing" />
      <div className="max-w-7xl mx-auto bg-light p-10 rounded-3xl">
        <h1 className="font-bold text-center md:text-5xl text-3xl pb-2">
          Ready to get Started
        </h1>
        <p className="text-center p-2">Choose A Plan Tailored to your needs</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 max-w-3xl mx-auto mt-10">
          {pricingPlans.map((plan, index) => {
            return <Card key={index} {...plan} useFor="pricing" />; //card
          })}
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Pricing;
