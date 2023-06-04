import React, { useState } from "react";
import { country, year, month, specializations, degree } from "./data";

const RecommandationsMain = () => {
  const handelSubmit = (props) => {
    console.log("Thank you");
    // alert(JSON.stringify(props));
    console.log(props);
  };

  const Step1 = () => {
    return (
      <div>
        <p className="text-md">1. Choose your prefered Country </p>
        <div className="flex flex-col md:flex-row">
          {country.map((point) => {
            return (
              <>
                <input
                  type="radio"
                  name="country"
                  value={point}
                  onChange={handleFilterChange}
                />
                <label className="px-2" for="country">
                  {point}
                </label>
              </>
            );
          })}
        </div>
        <p className="pt-2 ">2. Select the degree you wish to pursue</p>
        <ul className="flex gap-2">
          {degree.map((point) => {
            return (
              <>
                <input
                  type="radio"
                  name="degree"
                  value={point}
                  onChange={handleFilterChange}
                />
                <label>{point}</label>
              </>
            );
          })}
        </ul>

        <p className="pt-2">
          3. Select your preferred discipline/specialization
        </p>
        <select
          className="bg-light px-4 py-2 rounded-md my-1"
          name="specializations"
          onChange={handleFilterChange}
        >
          {specializations.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>

        <p className="pt-2">4. Select your preferred application cycle.</p>
        <p className="flex gap-2">
          Year:{" "}
          {year.map((value) => {
            return (
              <>
                <input
                  type="radio"
                  name="year"
                  value={value}
                  onChange={handleFilterChange}
                />
                <label>{value}</label>
              </>
            );
          })}
        </p>
        <p className="pt-2">
          Month:{" "}
          <select
            className="px-4 py-2 rounded-md bg-light"
            name="month"
            onChange={handleFilterChange}
          >
            {month.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
        </p>
      </div>
    );
  };

  const Step2 = () => {
    return (
      <div>
        <p className="">Enter your High School Score</p>
        <input
          type="number"
          placeholder="your score"
          name="score"
          className="bg-light px-4 py-2 rounded-md my-2"
          onChange={handleFilterChange}
        />
        <h1 className="pt-2">2. Have you taken any certifications?</h1>
        <p className="text-sm  px-4">Specific to ?</p>
        <input
          type="radio"
          className="py-2"
          name="certification"
          value="Extra-curricular"
          onChange={handleFilterChange}
        />
        <label className="px-2">Extra-curricular</label>
        <input
          type="radio"
          name="certification"
          onChange={handleFilterChange}
          value="Volenteering"
        />
        <label className="px-2">Volenteering</label>
        <input
          type="radio"
          name="certification"
          value="Both"
          onChange={handleFilterChange}
        />
        <label className="px-2">Both</label>
      </div>
    );
  };

  const Step3 = () => {
    return (
      <div>
        <div className="">
          <p className="">1. Have you taken any aptitude tests?</p>
          <div className="flex gap-2 py-1">
            <input
              type="radio"
              name="aptitude"
              value="No,I'm planning to take"
              onChange={handleFilterChange}
            />
            <label>No,I'm planning to take</label>
            <input
              type="radio"
              name="aptitude"
              value="SAT"
              onChange={handleFilterChange}
            />
            <label>SAT</label>
            <input
              type="radio"
              name="aptitude"
              value="ACT"
              onChange={handleFilterChange}
            />
            <label>ACT</label>
          </div>
        </div>
        <div>
          <p className="">2. Have you taken any English proficiency tests?</p>
          <div className="flex gap-2 py-1">
            <input
              type="radio"
              name="proficiency"
              value="No,I'm planning to take"
              onChange={handleFilterChange}
            />
            <label>No,I'm planning to take</label>
            <input
              type="radio"
              name="proficiency"
              value="IELTS"
              onChange={handleFilterChange}
            />
            <label>IELTS</label>
            <input
              type="radio"
              name="proficiency"
              value="Cambridge English"
              onChange={handleFilterChange}
            />
            <label>Cambridge English</label>
            <input
              type="radio"
              name="proficiency"
              value="PTE"
              onChange={handleFilterChange}
            />
            <label>PTE</label>
          </div>
        </div>
      </div>
    );
  };

  const Step4 = () => {
    return (
      <div>
        <p>Select State</p>
        <select
          className="bg-light px-4 py-2 rounded-md my-1"
          onChange={handleFilterChange}
          name="state"
        >
          {month.map((month) => {
            return <option value={month}>{month}</option>;
          })}
        </select>

        <p>
          2. Do you need the university program to be approved by Saudi Arabian
          Ministry of Education?
        </p>
        <div className="flex gap-2">
          <input type="radio" name="dubai" />
          <label>Yes</label>
          <input type="radio" name="dubai" />
          <label>No</label>
        </div>

        <p className="pt-2">3. University partnership type?</p>
        <div className="flex gap-2">
          <input
            type="radio"
            name="universityPartnered"
            value="Non-partnered"
            onChange={handleFilterChange}
          />
          <label>Non-partnered</label>
          <input
            type="radio"
            name="universityPartnered"
            value="Partnered"
            onChange={handleFilterChange}
          />
          <label>Partnered</label>
          <input
            type="radio"
            name="universityPartnered"
            onChange={handleFilterChange}
            value="all"
          />
          <label>All</label>
        </div>

        <p className="py-2">What is your Budget</p>
        <input
          type="number"
          placeholder="budget"
          className="bg-light rounded-md px-4 py-2 mb-2"
          name="budget"
          min={0}
          max={10000000}
          onChange={handleFilterChange}
        />
      </div>
    );
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.checked);
    e.target.checked = true;
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const [filterData, setFilterData] = useState({
    country: "",
    degree: "",
    specializations: "",
    year: "",
    month: "",
    score: "",
    certification: "",
    aptitude: "",
    proficiency: "",
    state: "",
    universityPartnered: "",
    budget: "",
  });

  return (
    <form>
      <p className="text-center  py-2 font-bold text-lg">General Details</p>
      <Step1 />
      <p className="text-center py-2 font-bold text-lg">Academic Details</p>
      <Step2 />
      <p className="text-center py-2 font-bold text-lg">Test Details</p>
      <Step3 />
      <p className="text-center py-2 font-bold text-lg">Preferences</p>
      <Step4 />
      <button
        type="submit"
        className="bg-main text-white px-4 py-2 rounded-md my-3"
        onSubmit={handelSubmit(filterData)}
      >
        Generate
      </button>
    </form>
  );
};

export default RecommandationsMain;
