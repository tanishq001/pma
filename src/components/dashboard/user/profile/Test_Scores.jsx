import React from "react";

const Test_Scores = () => {
  const label_style = "block text-sm font-medium text-gray-700 mb-1";
  return (
    <div className="max-w-5xl mx-auto mb-8">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-2">
          <label for="country" className={label_style}>
            Exam Type
          </label>
          <select
            id="country"
            name="country"
            // value={input.employement_type}
            className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
            // onChange={(e) => handlechange(index, e)}
          >
            <option>India</option>
            <option>Part Time</option>
            <option>Medium Time</option>
          </select>
        </div>
        <div className="col-span-2">
          <label for="country" className={label_style}>
            Entrance exam Type
          </label>
          <select
            id="country"
            name="country"
            // value={input.employement_type}
            className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
            // onChange={(e) => handlechange(index, e)}
          >
            <option>India</option>
            <option>Part Time</option>
            <option>Medium Time</option>
          </select>
        </div>
        <div className="col-span-2">
          <label for="" className={label_style}>
            Date
          </label>
          <input
            type="date"
            // value={input.start_date}
            name="date"
            className="bg-light px-1.5 py-1 w-full"
            // onChange={(e) => handlechange(index, e)}
          />
        </div>
        <div className="col-span-2">
          <label for="" className={label_style}>
            Listening
          </label>
          <input
            type="number"
            // value={input.start_date}
            max={30}
            name="date"
            className="bg-light px-1.5 py-1 w-full outline-none"
            placeholder="out of 30"
            // onChange={(e) => handlechange(index, e)}
          />
        </div>
        <div className="col-span-2">
          <label for="" className={label_style}>
            Reading
          </label>
          <input
            type="number"
            // value={input.start_date}
            max={30}
            name="date"
            className="bg-light px-1.5 py-1 w-full outline-none"
            placeholder="out of 30"
            // onChange={(e) => handlechange(index, e)}
          />
        </div>
        <div className="col-span-2">
          <label for="" className={label_style}>
            Writing
          </label>
          <input
            max={30}
            type="number"
            // value={input.start_date}
            name="date"
            className="bg-light px-1.5 py-1 w-full outline-none"
            placeholder="out of 30"
            // onChange={(e) => handlechange(index, e)}
          />
        </div>
        <button
          type="submit"
          className="bg-light px-4 p-1 mt-3 mr-3 rounded-sm"
        >
          Save
        </button>
        <button
          type="button"
          value={"cancel"}
          className="bg-light px-4 p-1 mt-3 rounded-sm"
          // onClick={removeclick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Test_Scores;
