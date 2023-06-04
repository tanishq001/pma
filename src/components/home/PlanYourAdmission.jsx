import React from "react";
import Heading from "../../higherOrderComponents/Heading";
import ContentSection from "../../higherOrderComponents/ContentSection";

const PlanYourAdmission = () => {
  return (
    <div className="bg-light my-[60px]">
      {/* underline with heading */}
      <Heading heading="Plan Your Admission with us" />
      <ContentSection {...data} />
    </div>
  );
};

const data = {
  id: 1,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ullamcorper. In urna turpis, vehicula eget felis quis, tristique",
  features: [
    "Duis ut nibh sit amet nibh ultricies gravida.",
    "Duis ut nibh sit amet.",
    "Duis ut nibh sit amet.",
  ],
  btn1: "Register Now",
  btn2: "Book Your Consultation",
  video: "https://www.youtube.com/embed/9Qxa6Y_Qv6E",
};

export default PlanYourAdmission;
