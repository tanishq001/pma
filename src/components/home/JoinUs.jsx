import React from "react";
import joinUs from "../../assets/JoinUs.svg";
import Heading from "../../higherOrderComponents/Heading";
const JoinUs = () => {
  return (
    <div>
      <Heading heading="Join Us" />
      <div className="flex md:flex-row flex-col md:justify-evenly items-center sm:px-5">
        <div className="md:w-[500px] w-full px-5 items-center justify-center">
          <p className="font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            debitis necessitatibus omnis voluptates totam eos id architecto
            blanditiis fugiat unde.
          </p>
          <img
            src={joinUs}
            alt="joinUs"
            className="relative top-14 -z-10 overflow-hidden sm:left-20"
          />
        </div>
        <div className="md:w-[400px] w-[90%] py-8 bg-light rounded-lg mb-10 ">
          <form
            action=""
            className="flex flex-col justify-center items-center space-y-5"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="py-4 px-3  rounded-md w-[90%] outline-none"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-4 px-3 rounded-md w-[90%] outline-none"
            />
            <button
              type="submit"
              className="bg-main px-4 py-4 rounded-md text-white w-[90%]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
