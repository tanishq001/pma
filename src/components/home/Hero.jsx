import React, { useState } from "react";
import human from "../../assets/Human.svg";
import Arrow from "../../assets/homeAssets/Arrow.svg";
import Plane from "../../assets/Plane.svg";

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex md:flex-row flex-col max-w-7xl lg:mx-auto gap-5 md:items-center md:my-20 my-10 xl:px-2  sm:px-10 px-5">
      <div className="md:w-[60%] w-full grow flex-1">
        <img src={Plane} alt="/" className="md:hidden block " />
        <div className="relative flex flex-row">
          <h1 className="lg:text-7xl md:text-5xl text-4xl uppercase font-bold">
            let us BRing
            <br />
            <span className="text-main">dreams to life</span>
          </h1>
          <img
            src={Arrow}
            alt="img"
            className="absolute lg:right-0 translate-x-2 xl:block hidden "
          />
        </div>
        <p className="font-bold text-[18px] md:w-1/2 py-4 leading-[20px]">
          Search for the best options to study abroad customized especially for
          you
        </p>
        <p className="text-main uppercase font-bold p-3">ai powered search</p>

        <form>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-main"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-3 pl-10 w-full text-sm rounded-lg ring-main ring-offset-1 ring-1 focus:outline-none placeholder:text-[11px] md:placeholder:text-[14px]"
              placeholder="Search Universites,Courses..."
              required=""
              value={search}
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute uppercase right-0.5 bottom-0.5 rounded-lg md:w-1/5 w-1/3 px-4 py-2 bg-main"
            >
              Explore
            </button>
          </div>
        </form>
        <h2 className="font-bold text-xl p-4">Most Popular</h2>
        <div className="w-full">
          <Button
            text="Computer Science"
            showText={() => setSearch("computer science")}
          />
          <Button text="MBA" showText={() => setSearch("MBA")} />
          <Button
            text="Mechanical Engineering "
            showText={() => setSearch("Mechanical Engineering ")}
          />
          <Button
            text="Data Analysis"
            showText={() => setSearch("Data Analysis")}
          />
          <Button text="Boston" showText={() => setSearch("Boston")} />
          <Button text="Toronto" showText={() => setSearch("Toronto")} />
          <Button text="New York" showText={() => setSearch("MBA")} />
          <Button
            text="University of Texas Dallas"
            showText={() => setSearch("University of Texas Dallas")}
          />
          <Button
            text="University of Toronto"
            showText={() => setSearch("University of Toronto")}
          />
          <Button text="MIT" showText={() => setSearch("MIT")} />
        </div>
      </div>
      <div className="">
        <img
          src={human}
          alt="human"
          className="md:block md:h-[400px] xl:h-full hidden lg:scale-105"
        />
      </div>
    </div>
  );
};
// <div className="flex md:flex-row flex-col md:items-center justify-center md:mt-[33px] sm:p-10 p-7">
//   <div className="md:w-1/2 w-full">
//     {/* Heading */}
//     <img src={Plane} alt="/" className="md:hidden block " />
//     <div className="flex flex-row  relative">
//       <h1 className="text-4xl md:text-7xl font-bold">
//         LET US BRING
//         <div className="text-main">DREAMS TO LIFE</div>
//       </h1>
//       <img
//         src={Arrow}
//         alt=""
//         className="absolute right-10 md:block hidden"
//       />
//     </div>

//     {/* content */}

//     <p className="font-bold text-[18px] md:pt-5 md:mb-3 md:w-1/2 pt-3">
//       Search for the best options to study abroad customized especially for
//       you
//     </p>
//     <p className="text-main uppercase font-bold p-3">ai powered search</p>

//     <form>
//       <div className="relative w-full">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
//           <img src={Search} alt="" />
//         </div>
//         <input
//           type="search"
//           id="default-search"
//           className="block py-3 md:pr-[20%] pr-[33%] pl-10 md:w-[721px] w-full text-sm text-black font-medium rounded-lg  focus:outline-none ring-1 ring-main ring-offset-1 placeholder:text-[11px] md:placeholder:text-[14px]"
//           placeholder="Search for Universities, more..."
//           required
//           value={search}
//           autoComplete="off"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="text-white md:w-1/5 w-1/3  absolute right-0 top-0  py-3 bg-main focus:outline-none  text-center font-medium rounded-lg text-sm px-2"
//         >
//           EXPLORE
//         </button>
//       </div>
//     </form>

//     <h2 className="font-bold text-xl p-4">Most Popular</h2>

//     {/* buttons */}

//     <div className=" w-full">
//       <Button
//         text="Computer Science"
//         showText={() => setSearch("computer science")}
//       />
//       <Button text="MBA" showText={() => setSearch("MBA")} />
//       <Button
//         text="Mechanical Engineering "
//         showText={() => setSearch("Mechanical Engineering ")}
//       />
//       <Button
//         text="Data Analysis"
//         showText={() => setSearch("Data Analysis")}
//       />
//       <Button text="Boston" showText={() => setSearch("Boston")} />
//       <Button text="Toronto" showText={() => setSearch("Toronto")} />
//       <Button text="New York" showText={() => setSearch("MBA")} />
//       <Button
//         text="University of Texas Dallas"
//         showText={() => setSearch("University of Texas Dallas")}
//       />
//       <Button
//         text="University of Toronto"
//         showText={() => setSearch("University of Toronto")}
//       />
//       <Button text="MIT" showText={() => setSearch("MIT")} />
//     </div>
//   </div>
//   <div className="">
//     <img src={human} alt="/" className="hidden md:block w-4/5" />
//   </div>
// </div>

const Button = ({ text, showText }) => {
  return (
    <button
      className="border border-main md:py-2 px-4 m-1 rounded-full hover:bg-light md:text-[14px] text-main text-[10px] py-1"
      onClick={() => showText()}
    >
      {text}
    </button>
  );
};

export default Hero;
