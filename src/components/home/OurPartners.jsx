import React from "react";
import MicroSoft from "../../assets/Microsoft.png";
import google from "../../assets/google.svg";
import Heading from "../../higherOrderComponents/Heading";

const OurPartners = () => {
  return (
    <>
      <Heading heading={"Our Partners"} />
      <div className="flex flex-row  justify-evenly items-center md:p-4  h-full w-full">
        <div className="w-1/6 flex justify-center">
          <img src={google} alt="" />
        </div>
        <div className="w-1/6 flex justify-center">
          <img src={MicroSoft} alt="" />
        </div>
        <div className="w-1/6 flex justify-center">
          <img src={google} alt="" />
        </div>
      </div>
    </>
  );
};

export default OurPartners;
