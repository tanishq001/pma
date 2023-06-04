import React from "react";
import Girl from "../../assets/Girl.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import Carousel from "react-elastic-carousel";
import Girl2 from "../../assets/homeAssets/Girl2.svg";
// import { useState } from "react";

class Content extends React.Component {
  render() {
    const handelLeft = () => {
      this.carousel.slidePrev();
    };
    const handelRight = () => {
      this.carousel.slideNext();
    };
    return (
      <Carousel
        ref={(ref) => (this.carousel = ref)}
        showArrows={false}
        itemsToShow={1}
      >
        <Reviews
          {...Data[0]}
          onShowLeft={handelLeft}
          onShowRight={handelRight}
        />
        <Reviews
          {...Data[1]}
          onShowLeft={handelLeft}
          onShowRight={handelRight}
        />
        <Reviews
          {...Data[2]}
          onShowLeft={handelLeft}
          onShowRight={handelRight}
        />
        <Reviews
          {...Data[3]}
          onShowLeft={handelLeft}
          onShowRight={handelRight}
        />
      </Carousel>
    );
  }
}

const Reviews = ({
  gyan,
  author,
  university,
  image,
  onShowRight,
  onShowLeft,
}) => {
  return (
    <div class="max-w-6xl mx-auto px-10">
      <article class="flex flex-wrap items-start pl-16 pb-32">
        <div class="relative basis-80 grow -mb-32 -ml-16 [clip-path:polygon(0_5%,100%_0,87%_100%,10%_90%)]">
          <div class="md:pt-[80%] pt-[100%]"></div>
          <img
            src={image}
            alt="StoryImage"
            class="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        <div class="bg-white basis-80 grow-[5] relative -mb-32 mt-10 -ml-20 p-10 [clip-path:polygon(0_theme(spacing.2),100%_0,calc(100%-theme(spacing.8))_calc(100%-theme(spacing.4)),theme(spacing.8)_94%)]">
          <p className="text-main flex flex-nowrap">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </p>
          <figure>
            <blockquote className="pt-2">{gyan}</blockquote>
            <figcaption class="mt-5 pl-10">
              <cite class="not-italic md:flex md:justify-between">
                <div>
                  <b class="block text-xl relative">
                    <span class="absolute top-0 right-[calc(100%+theme(spacing.1))]">
                      -
                    </span>
                    {author}
                  </b>
                  <span class="text-main">{university}</span>
                </div>
                <div className="flex pt-4 mr-10">
                  <button
                    className="text-white bg-main py-1 px-2 mr-2"
                    onClick={onShowLeft}
                  >
                    &larr;
                  </button>
                  <button
                    className="text-white bg-main py-1 px-2 "
                    onClick={onShowRight}
                  >
                    &rarr;
                  </button>
                </div>
              </cite>
            </figcaption>
          </figure>
        </div>
      </article>
    </div>
  );
};

const Data = [
  {
    gyan: "With plan my admission I found everything I need for applying in one single place. It saved me a lot of time from searching for information on several university websites. Big thanks to the entire  PMA team for making the entire process so smooth and ease wit constant support ",
    author: "Kostub ghosh",
    university: "Stanford University",
    image: Girl2,
  },
  {
    gyan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quas natus, autem inventore minima corporis consectetur voluptate quis beatae voluptas laboriosam esse iusto aperiam quam praesentium sequi impedit reprehenderit delectus! ",
    author: "Kostub",
    university: "Stanford University,California",
    image: Girl,
  },
  {
    gyan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quas natus, autem inventore minima corporis consectetur voluptate quis beatae voluptas laboriosam esse iusto aperiam quam praesentium sequi impedit reprehenderit delectus! ",
    author: "Rajiv",
    university: "Stanford University",
    image: Girl2,
  },
  {
    gyan: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quas natus, autem inventore minima corporis consectetur voluptate quis beatae voluptas laboriosam esse iusto aperiam quam praesentium sequi impedit reprehenderit delectus! ",
    author: "Rajiv Gandhi",
    university: "Stanford University",
    image: Girl,
  },
];
export default Content;

{
  /* <div className="flex justify-center items-center">
  <button className="bg-main px-5 py-2 m-2 rounded-full text-white" onClick={() => setContent(abs(content+1))}>{"<"}</button>
  <button className="bg-main px-5 py-2 m-2 rounded-full text-white" onClick={() => setContent(abs(content-1))}>{">"}</button>
</div> */
}

// const Content = () => {
//   const [content, setContent] = useState(0);

//   const handelLeft = () => {
//     // if (content > 0) setContent(content - 1);
//     // console.log("Left");

//   };
//   const handelRight = () => {
//     if (content < 3) setContent(content + 1);
//   };
//   return (
//     <Carousel showArrows={false}>
//       <Reviews {...Data[0]} onShowLeft={handelLeft} onShowRight={handelRight} />
//       <Reviews {...Data[1]} onShowLeft={handelLeft} onShowRight={handelRight} />
//     </Carousel>
//   );
// };

// <div className="flex justify-center md:relative md:-bottom-10">
//   <img
//     src={Girl}
//     alt=""
//     className="lg:w-[350px] w-[200px] lg:h-[430px] h-[250px] object-cover object-center relative md:left-40 sm:left-24 left-10 clip-image"
//   />
//   <main className="md:w-1/2 w-full h-full bg-white z-10 md:p-20  -left-10 sm:left-0 sm:px-10 py-20 pl-2 justify-center flex flex-col relative md:bottom-[30px] clip-review">
//     <div className="text-main md:pb-2 sm:py-1 sm:pt-4 pt-3 px-10">
//       <StarRateIcon className="pr-1 font-bold" />
//       <StarRateIcon className="pr-1 font-bold" />
//       <StarRateIcon className="pr-1 font-bold" />
//       <StarRateIcon className="pr-1 font-bold" />
//       <StarRateIcon className="pr-1 font-bold" />
//     </div>
//     <p className="pl-10 pr-5 text-sm md:text-md ">{gyan}</p>
//     <div className="px-5 xs:pb-2 xxs:pb-10 ">
//       <p className="sm:px-10 pl-2 md:pt-5 font-bold md:text-2xl">- {author}</p>
//       <p className="sm:px-12 px-5 pb-5 text-main font-thin text-[10px] md:text-sm">
//         {university}
//       </p>

//       <div className="md:block hidden px-10 absolute font-bold bottom-28 right-40">
//         <button
//           className="text-white bg-main py-1 px-2 mr-2"
//           onClick={onShowLeft}
//         >
//           &larr;
//         </button>
//         <button className="text-white bg-main py-1 px-2 " onClick={onShowRight}>
//           &rarr;
//         </button>
//       </div>
//     </div>
//   </main>
// </div>;

// <div className="flex justify-center bg-pink-200 md:relative md:-bottom-10">
// <img
//   src={Girl}
//   alt="SuccesStoryImage"
//   className="clip-image relative left-7 h-[250px] w-[200px] object-cover object-center sm:left-28 md:left-40 lg:h-[430px] lg:w-[350px]"
// />
// <main className="clip-review relative -left-10 z-10 flex   w-[320px] flex-col justify-center bg-white py-16 md:py-3  md:w-1/2 md:px-14 md:pt-10 lg:pb-20  md:left-0 sm:-bottom-[10px]">
//   {/* <div className="text-main px-14 pt-3 sm:py-1 sm:pt-4 md:pb-2"> */}
//   <div className="text-main md:px-14 sm:px-10 px-5 md:pt-4 pt-5">
//     <StarRateIcon className="" />
//     <StarRateIcon className="" />
//     <StarRateIcon className="" />
//     <StarRateIcon className="" />
//     <StarRateIcon className="" />
//   </div>
//   <p className="md:text-md sm:pl-14 pl-5 xxs:pl-10 pr-5 text-sm pb-1 pt-2 md:text-[16px] text-[14px]">
//     {gyan}
//   </p>
//   <div className="xs:pb-2 xxs:pb-10 flex flex-wrap items-center  gap-5 px-5">
//     <div className="pl-5 ">
//       <p className="pl-2 font-bold sm:pl-10 md:pt-4 md:text-xl">
//         -{author}
//       </p>
//       <p className="text-main pl-5 text-[10px] font-thin sm:pl-12 md:text-sm">
//         {university}
//       </p>
//     </div>
//     <div className="font-bold text-white xxs:pl-5 xs:pl-10 pt-5 md:pl-28 ">
//       <button
//         className="bg-main mr-1 bg-pink-500 py-1 px-2"
//         onClick={onShowLeft}
//       >
//         &larr;
//       </button>
//       <button
//         className="bg-main bg-pink-500 py-1 px-2"
//         onClick={onShowRight}
//       >
//         &rarr;
//       </button>
//     </div>
//   </div>
// </main>
// </div>
// </div>
