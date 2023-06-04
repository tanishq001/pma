import React, { useState } from "react";
import RecommandationsMain from "./profile/RecommandationsMain";

const Recommendations = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {!show && (
        <div className="bg-light flex items-center justify-center flex-col p-10 my-10 h-96">
          <p className=" p-2">Generate Recommendations based on your profile</p>
          <button
            className="bg-main text-white text-center px-7 rounded-sm py-1.5 w-1/6"
            onClick={() => setShow(!show)}
          >
            Generate
          </button>
        </div>
      )}
      {show && <RecommandationsMain />}
    </div>
  );
};

export default Recommendations;
