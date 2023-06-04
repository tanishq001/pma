import React from "react";
import Heading from "../../higherOrderComponents/Heading";
import Testimonials from "./Testimonials";
import Human from "../../assets/Human.svg";
import bgArrow from "../../assets/bgArrow.svg";
import Carousel from "react-elastic-carousel";
import Reviews from "./Reviews";

// const Data = [
//   {
//     name: "Full Name",
//     designation: "Lorem,ipsum dite",
//     content:
//       "With plan my admission I found everything I need for applying in one single place. It saved me a lot of time from searching for information on.",
//     image: { Human },
//   },
// ];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
];

const SuccessStories = () => {
  return (
    <div className="bg-light ">
      <Heading heading="Success Stories" />
      <Reviews />
      <Heading heading="Testimonials" />
      <div className="relative">
        <img
          src={bgArrow}
          alt=""
          className="hidden lg:block absolute w-full -top-20"
        />
        <div className="hidden sm:block">
          <section className="flex items-center justify-center z-20">
            <Carousel
              style={{ width: "80vw" }}
              className="z-30 crousel"
              breakPoints={breakPoints}
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Carousel>
          </section>
        </div>
        <div className="sm:hidden">
          <section className="flex items-center justify-center z-20">
            <Carousel
              style={{ width: "100vw" }}
              className="z-30"
              breakPoints={breakPoints}
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Carousel>
          </section>
        </div>

        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center  lg:py-20 py-10 z-20 mx-auto max-w-7xl overflow-hidden"> */}
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-5 max-w-7xl mx-auto lg:pt-20 px-10 py-10 z-20">
          <YouTube />
          <YouTube />
          <YouTube />
          <YouTube />
        </div> */}
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto lg:py-20 py-10 px-20 z-20">
          <YouTube />
          <YouTube />
          <YouTube />
          <YouTube />
        </div>
      </div>
    </div>
  );
};

const YouTube = () => {
  return (
    // <div className="z-20 flex-1">
    //   <div className="aspect-w-9 aspect-h-16">
    //     <iframe
    //       src="https://www.youtube.com/embed/AqAKTCU2Zvo"
    //       title="Start SOP early || Tips to Write SOP || #shorts #studyabroad #statementofpurpose"
    //       frameBorder="0"
    //       className="rounded-md "
    //     ></iframe>
    //   </div>
    <>
      <div className="aspect-w-9 aspect-h-16 relative">
        <iframe
          src="https://www.youtube.com/embed/AqAKTCU2Zvo"
          title="Start SOP early || Tips to Write SOP || #shorts #studyabroad #statementofpurpose"
          frameBorder="0"
          className="rounded-md "
        ></iframe>
        {/* <div className="bg-gradient-to-t from-blurpink to-transparent p-3 text-white relative translate-y-5/2 rounded-md h-10 ">
          Full Name
        </div> */}
      </div>
    </>
  );
};

const Item = () => {
  return (
    <>
      <Testimonials />
    </>
  );
};
export default SuccessStories;
