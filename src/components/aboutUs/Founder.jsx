import React from "react";
import quote from "../../assets/about-us/quote.svg";
import advisors from "../../assets/about-us/leader.svg";
import Heading from "../../higherOrderComponents/Heading";

const Founder = () => {
  return (
    <div className="my-20">
      <Heading heading="Our Founder Speaks" />
      <div className="md:ml-[200px]  bg-light flex flex-col md:flex-row md:rounded-2xl relative right-0 items-center">
        <img src={quote} alt="" className="absolute md:ml-20 -top-5 left-5" />
        <img
          src={advisors}
          alt=""
          className="block md:hidden [clip-path:circle()] object-cover object-center"
        />
        <div className="md:pl-10 md:w-2/3 w-full md:py-10 p-5">
          <p className="font-bold text-xl md:pt-5">Full Name</p>
          <p className="text-main ">Lorem ipsum</p>
          <p className="pt-5 md:pr-10 md:mr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            voluptatum ad nobis ab fugiat, sit numquam recusandae explicabo
            facere nemo cupiditate maxime praesentium. Corporis quae doloribus
            aut illum autem sapiente!
          </p>
        </div>
        <img
          src={advisors}
          alt=""
          className="maskFounder md:w-[430px] hidden md:block absolute right-0 translate-x-14 lg:-translate-x-5 "
        />
      </div>
    </div>
  );
};

export default Founder;

// <div className="flex justify-evenly relative md:h-[274px] my-20 md:ml-[350px] bg-light p-10">
//         <img
//           src={quote}
//           className=" flex-1 absolute  top-[-35px] left-[40px] flex justify-start"
//           alt=""
//         />
//         <div className="flex xxs:flex-col-reverse items-center">
//           <div className="flex-row mt-10 w-1/2">
//             <p className="font-bold text-black text-[22px]">Lorem ipsum</p>
//             <p className="text-main">Peter</p>
//             <p className="text-black p-2 text-[16px]">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Veritatis reiciendis error debitis a exercitationem maiores
//               nesciunt architecto,Lorem ipsum dolor sit amet consectetur
//               adipisicing elit.
//             </p>
//           </div>

//           <img
//             src={advisors}
//             className="xs:-top-[130px]  w-[370px] h-[440px]   relative z-100"
//             alt="founder"
//           />
//         </div>
//       </div>
