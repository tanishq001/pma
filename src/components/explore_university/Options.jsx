import React from "react";

const Options = () => {
  return (
    <div className="max-w-6xl mx-auto bg-light px-5 py-10 rounded-md my-5">
      <div>
        <label for="search">Search Course</label>
        <input type="text" placeholder="search for your universities" />
        <label for="search">Intake</label>
        <select>
          <option>yes</option>
          <option>yes</option>
          <option>yes</option>
          <option>yes</option>
        </select>
        <label for="search">Year</label>
        <select>
          <option>yes</option>
          <option>yes</option>
          <option>yes</option>
          <option>yes</option>
        </select>
      </div>

      <div className="flex flex-row space-x-8">
        {/* program level */}
        <div className="">
          <p>Program Level</p>
          <input type="checkbox" />
          PG Diploma
          <br />
          <input type="checkbox" />
          UG
          <br />
          <input type="checkbox" />
          High
          <br />
          <input type="checkbox" />
          low
          <br />
        </div>
        {/* country */}
        <div>
          <label>Country</label>
          <br />
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
          <br />
          <label>Duration</label>
          <br />
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
          <br />
          <label>Discipline Area</label>
          <br />
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
        </div>
        {/* study area */}
        <div>
          <label>Study Area </label>
          <br />
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
          <br />
          <label>ESL/ELP Available</label>
          <br />
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
        </div>
        <div className="">
          <p>Requirements</p>
          <input type="checkbox" />
          PG Diploma
          <br />
          <input type="checkbox" />
          UG
          <br />
          <input type="checkbox" />
          High
          <br />
          <input type="checkbox" />
          low
          <br />
          <input type="checkbox" />
          PG Diploma
          <br />
          <input type="checkbox" />
          UG
          <br />
          <input type="checkbox" />
          High
          <br />
          <input type="checkbox" />
          low
          <br />
        </div>
      </div>
      <div>
        <p>Other poplular searches</p>
        <button className="border border-main md:py-2 px-4 m-1 rounded-full hover:bg-light md:text-[14px] text-main text-[10px] py-1">
          Computer Science
        </button>
        <button className="border border-main md:py-2 px-4 m-1 rounded-full hover:bg-light md:text-[14px] text-main text-[10px] py-1">
          Science
        </button>
        <button className="border border-main md:py-2 px-4 m-1 rounded-full hover:bg-light md:text-[14px] text-main text-[10px] py-1">
          MBA
        </button>
        <button className="border border-main md:py-2 px-4 m-1 rounded-full hover:bg-light md:text-[14px] text-main text-[10px] py-1">
          PHD
        </button>
      </div>
    </div>
  );
};

export default Options;
