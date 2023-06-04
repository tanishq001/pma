import React from "react";

const ContentSection = ({ id, content, features, btn1, btn2, video }) => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center font-medium max-w-7xl mx-auto px-5 md:px-0 ">
      <div className="px-5 md:mb-14 flex-1">
        <p className="sm:m-2 md:text-left ">{content}</p>
        <ul className="list-disc py-4 md:px-12 px-2 marker:text-main marker:text-[20px]">
          {features.map((item, index) => {
            return <li key={index.toString()}>{item}</li>;
          })}
        </ul>
        <button className="border border-main px-4 py-2 rounded-md m-2 bg-main text-white">
          {btn1}
        </button>
        <button className="border border-main px-4 py-2 rounded-md m-2 hover:bg-light">
          {btn2}
        </button>
      </div>
      <div className="flex-1 max-w-md ml-5 sm:ml-28 md:ml-0 mb-5 md:mb-0 md:pr-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={video}
            title="Plan my admission"
            // className="pb-10 px-2 md:px-0 h-[300px] rounded-md md:w-[400px] xs:w-[350px] w-[300px] aspect-video"
            className="rounded-sm"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
