import React, { useRef } from "react";
import ArticleCard from "../../higherOrderComponents/ArticleCard";

const ArticlesSection = () => {
  const article = useRef(null);

  const handelwheel = (e) => {
    article.current.scrollLeft += e.deltaY;
  };
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 700, itemsToShow: 2 },
  // ];

  return (
    <div className="flex md:flex-row flex-col items-center md:items-start flex-nowrap my-20 mx-2  2xl:justify-center ">
      <div className="md:w-1/3 w-full mx-4 lg:px-5 md:mx-5 items-center justify-center">
        <h1 className="font-bold md:text-5xl text-2xl md:text-left text-center leading-10 md:p-5 p-3">
          Articles to help you prepare
        </h1>
        <div className="md:border-b-4  border-b-main w-1/5 ml-5 mb-5 items-center flex justify-center md:block"></div>
        <p className="md:px-5 md:py-4 my-4   px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          ducimus quis ipsam beatae eius perferendis officiis et assumenda
          consectetur officia!
        </p>
        <button className="bg-main md:block hidden text-white font-semibold px-5 py-2 w-2/3 md:mt-8 mx-5 rounded-md whitespace-nowrap">
          Explore more Resources &rarr;
        </button>
      </div>
      <main
        id="item"
        ref={article}
        onWheel={handelwheel}
        className="w-2/3  md:flex hidden  sm:items-center  justify-safe md:overflow-x-scroll hide-scroll-bar z-2 gap-6 cursor-ew-resize "
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
      <div className="md:hidden flex flex-col mx-3">
        <ArticleCard />
        <ArticleCard />
      </div>
      <button className="bg-main block md:hidden text-white font-semibold px-5 py-2 w-2/3 md:mt-8 mx-5 rounded-md whitespace-nowrap ">
        Explore more Resources &rarr;
      </button>
    </div>
  );
};

export default ArticlesSection;

// (function() {
//   function scrollHorizontally(e) {
//       e = window.event || e;
//       var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//       document.getElementById('yourDiv').scrollLeft -= (delta * 40); // Multiplied by 40
//       e.preventDefault();
//   }
//   if (document.getElementById('yourDiv').addEventListener) {
//       // IE9, Chrome, Safari, Opera
//       document.getElementById('yourDiv').addEventListener('mousewheel', scrollHorizontally, false);
//       // Firefox
//       document.getElementById('yourDiv').addEventListener('DOMMouseScroll', scrollHorizontally, false);
//   } else {
//       // IE 6/7/8
//       document.getElementById('yourDiv').attachEvent('onmousewheel', scrollHorizontally);
//   }
// })();
