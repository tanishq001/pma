import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Human from "../../assets/Human.svg";

const Testimonials = () => {
  return (
    <div className="w-full border-[1px] border-main md:m-2  md:p-5 p-3 bg-white">
      <div className="text-main">
        <StarRateIcon className="pr-1 font-bold" />
        <StarRateIcon className="pr-1 font-bold" />
        <StarRateIcon className="pr-1 font-bold" />
        <StarRateIcon className="pr-1 font-bold" />
        <StarRateIcon className="pr-1 font-bold" />
      </div>
      <p className="py-3 ">
        With plan my admission I found everything I need for applying in one
        single place. It saved me a lot of time from searching for information
        on.
      </p>
      <div className="flex leading-4  items-center">
        <img
          src={Human}
          alt=""
          className="rounded-full border-[1px] border-main w-10"
        />
        <section className="p-2">
          <h2 className="font-semibold">Full Name</h2>
          <p className="text-main">Lorem, ipsum dolor.</p>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
