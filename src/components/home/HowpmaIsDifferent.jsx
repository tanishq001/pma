// import React from "react";
// import image from "../../assets/HowPmaIsDifferent.svg";

// const HowpmaIsDifferent = () => {
//   return (
//     <div className="">
//       <h1 className="flex items-center flex-col text-center md:text-[45px] text-2xl  md:p-2 p-1 font-bold m-5 mt-30">
//         How PMA is Different
//         <span className="border-b-4 md:ml-4 ml-3 border-b-main md:w-[98px] w-[50px] md:py-2 py-1 mb-[10px]"></span>
//       </h1>
//       <div className="flex  md:flex-row justify-evenly items-center flex-col-reverse p-10">
//         <div className="border-b-4 border-main py-10 md:w-[500px]">
//           <h2 className="font-bold md:text-3xl text-xl">
//             Digitized Solution for end to end
//             <br /> application process
//           </h2>
//           <p className="py-2">
//             Proin quis aliquam elit. Nam quis eleifend elit. Vestibulum volutpat
//             ligula non dolor varius vehicula. Curabitur pellentesque, purus sit
//             amet finibus placerat, odio turpis tempor dui, sed condimentum quam
//             purus non nibh.
//           </p>
//         </div>
//         <img src={image} alt="image" className="" />
//       </div>
//       <div className="flex  md:flex-row-reverse justify-evenly items-center flex-col-reverse p-10">
//         <div className="border-b-4 border-main py-10 md:w-[500px]">
//           <h2 className="font-bold md:text-3xl text-xl">
//             Digitized Solution for end to end
//             <br /> application process
//           </h2>
//           <p className="py-2">
//             Proin quis aliquam elit. Nam quis eleifend elit. Vestibulum volutpat
//             ligula non dolor varius vehicula. Curabitur pellentesque, purus sit
//             amet finibus placerat, odio turpis tempor dui, sed condimentum quam
//             purus non nibh.
//           </p>
//         </div>
//         <img src={image} alt="image" className="" />
//       </div>
//       <div className="flex  md:flex-row justify-evenly items-center flex-col-reverse p-10">
//         <div className="border-b-4 border-main py-10 md:w-[500px]">
//           <h2 className="font-bold md:text-3xl text-xl">
//             Digitized Solution for end to end
//             <br /> application process
//           </h2>
//           <p className="py-2">
//             Proin quis aliquam elit. Nam quis eleifend elit. Vestibulum volutpat
//             ligula non dolor varius vehicula. Curabitur pellentesque, purus sit
//             amet finibus placerat, odio turpis tempor dui, sed condimentum quam
//             purus non nibh.
//           </p>
//         </div>
//         <img src={image} alt="image" className="" />
//       </div>
//     </div>
//   );
// };

// export default HowpmaIsDifferent;

import React from "react";
import image from "../../assets/HowPmaIsDifferent.svg";

const HowpmaIsDifferent = () => {
  return (
    <div className="">
      <h1 className="flex items-center flex-col text-center md:text-[45px] text-2xl  md:p-2 p-1 font-bold m-5 mt-30">
        How PMA is Different
        <span className="border-b-4 md:ml-4 ml-3 border-b-main md:w-[98px] w-[50px] md:py-2 py-1 mb-[10px]"></span>
      </h1>
      <Section direction="flex-row" />
      <Section direction="flex-row-reverse" />
      <Section direction="flex-row" />
    </div>
  );
};

const Section = ({ direction }) => {
  let arr = [
    "flex",
    "justify-evenly ",
    "items-center ",
    "flex-col-reverse ",
    "md:px-10",
    "sm:px-8",
    "px-6",
    "py-10",
  ];

  if (direction === "flex-row") arr.push("md:flex-row");
  else arr.push("md:flex-row-reverse");

  return (
    <div className={arr.join(" ")}>
      <div className="border-b-4 border-main py-10 md:w-[500px] ">
        <h2 className="font-bold md:text-3xl text-xl">
          Digitized Solution for end to end
          <br /> application process
        </h2>
        <p className="py-2">
          Proin quis aliquam elit. Nam quis eleifend elit. Vestibulum volutpat
          ligula non dolor varius vehicula. Curabitur pellentesque, purus sit
          amet finibus placerat, odio turpis tempor dui, sed condimentum quam
          purus non nibh.
        </p>
      </div>
      <img src={image} alt="photo" className="w-[430px] h-full" />
    </div>
  );
};

export default HowpmaIsDifferent;
