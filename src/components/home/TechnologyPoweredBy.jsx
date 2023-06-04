import React from "react";
import MicroSoft from "../../assets/Microsoft.png";
import google from "../../assets/google.svg";

const TechnologyPoweredBy = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center bg-light md:p-4 my-[40px] md:h-[79px] sm:h-[40px] w-full ">
      <div className="flex flex-row  justify-evenly items-center md:p-4 md:my-[40px] h-full w-full">
        <div className="w-1/6 flex justify-center">
          <p className="font-medium text-[10px] md:text-xl">Technology Powered By</p>
        </div>
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
    </div>
  );
};

export default TechnologyPoweredBy;
