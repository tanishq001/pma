import React from "react";
import icon from "../../assets/about-us/icon.svg";

const OurCoreValues = () => {
  return (
    <div className="my-20 mx-5 bg-light rounded-md p-[30px] flex flex-col max-w-7xl md:mx-auto justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="flex justify-center items-center max-w-[250px] mx-auto">
          <span className="md:pl-3 pl-1 md:text-5xl text-3xl font-bold border-l-[11px] border-main leading-10 flex ">
            Our Core Values
          </span>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

function Card() {
  return (
    <div className={`py-10 flex flex-col w-full`}>
      <img src={icon} className="w-[44px] h-[44px]" alt="icon" />

      <h1 className="font-bold text-xl pt-4 ">Growth</h1>
      <span className=" mt-[10px] py-5 border-b-4 border-main pr-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        temporibus, molestiae enim hic eum doloremque, suscipit perspiciatis in
        voluptas praesentium aperiam iste officia harum error dolorem quidem
        excepturi esse nam!
      </span>
    </div>
  );
}

export default OurCoreValues;
