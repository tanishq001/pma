import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthProvider";
import Delete from "@mui/icons-material/DeleteOutlined";
const Experience = () => {
  const label_style = "block text-sm font-medium text-gray-700 mb-1";
  const [show, setShow] = useState(true);
  const {
    currentUser,
    uploadDataToFireStore,
    uploadDataToFireStoreInArray,
    profileData,
    handelDocumentDelete,
  } = useAuth();

  const [data, setData] = useState([
    {
      company: "",
      city: "",
      country: "",
      title: "",
      employement_type: "",
      industry: "",
      start_date: "",
      end_date: "",
    },
  ]);

  const addClick = () => {
    const values = [...data];
    values.push({
      company: "",
      city: "",
      country: "",
      title: "",
      employement_type: "",
      industry: "",
      start_date: "",
      end_date: "",
    });
    setData(values);
    setShow(!show);
  };

  const removeclick = (i) => {
    let content = [...data];
    content.splice(i, 1);
    setData(content);
    let decision = show ? false : true;
    setShow(decision);
  };

  function handlechange(i, event) {
    let value = [...data];
    value[i][event.target.name] = event.target.value;
    setData(value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.table(data[0]);
    uploadDataToFireStoreInArray(data[0], "experience");
    // const obj = JSON.stringify(data);
    // localStorage.setItem("userExperience", obj);
    // alert(data);
    setShow(!show);
    removeclick();
  };

  // const user = localStorage.getItem("userExperience");
  // const userObj = JSON.parse(user);
  const userObj = [];

  // console.log(userObj, typeof userObj);

  return (
    <>
      {profileData &&
        profileData.experience?.map((value) => {
          return (
            <div className="max-w-5xl mx-auto flex justify-between items-center border-b-2 mb-3 pb-2">
              <div>
                <h1 className="text-md font-bold">{value.title}</h1>
                <p className="text-sm">
                  {value.company} &#x2022; {value.city} , {value.country}
                </p>
                <p className="text-sm">
                  {value.employement_type} &#x2022; {value.industry}
                </p>
                <p className="text-xs">
                  {value.start_date} - {value.end_date}
                </p>
              </div>
              {/* <button className="font-bold">&#xFE19;</button> #F40076 */}
              <Delete
                style={{ color: "red" }}
                className="cursor-pointer"
                onClick={() => handelDocumentDelete(value.id, "experience")}
              />
            </div>
          );
        })}
      <form onSubmit={handlesubmit}>
        {data.map((input, index) => {
          return (
            <div className="max-w-5xl md:mx-auto mb-8 mx-2">
              <div className="grid grid-cols-6 gap-6">
                <div className="md:col-span-2 col-span-6">
                  <label for="company" className={label_style}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={input.company}
                    className="bg-light outline-none w-full p-1 px-1.5"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 col-span-6">
                  <label for="city" className={label_style}>
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={input.city}
                    className="bg-light outline-none w-full p-1 px-1.5"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  />
                </div>

                <div className="md:col-span-2 col-span-6">
                  <label for="country" className={label_style}>
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={input.country}
                    className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  >
                    <option default>Choose</option>
                    <option>India</option>
                    <option>Europe</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <label for="title" className={label_style}>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={input.title}
                    className="bg-light outline-none w-full p-1 px-1.5"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="employement_type" className={label_style}>
                    Employement type
                  </label>
                  <select
                    id="employement_type"
                    name="employement_type"
                    value={input.employement_type}
                    className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  >
                    <option value="">Choose</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Medium Time</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="industry" className={label_style}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={input.industry}
                    className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  >
                    <option value="">Choose</option>
                    <option>Software</option>
                    <option>Agriculture</option>
                    <option>NGO</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <label for="" className={label_style}>
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={input.start_date}
                    name="start_date"
                    className="bg-light px-1.5 py-1 w-full outline-none"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  />
                </div>
                <div className="md:col-span-2 col-span-6">
                  <label for="" className={label_style}>
                    End Date
                  </label>
                  <input
                    type="date"
                    input={input.end_date}
                    name="end_date"
                    className="bg-light px-1.5 py-1 w-full outline-none"
                    onChange={(e) => handlechange(index, e)}
                    required={true}
                  />
                </div>
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
                onClick={removeclick}
              >
                Cancel
              </button>
            </div>
          );
        })}
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            className={`bg-light px-4 p-1 mt-3 mb-4 rounded-sm ${
              show ? "hidden" : "block"
            }
            `}
            onClick={addClick}
          >
            Add Experience
          </button>
        </div>
      </form>
    </>
  );
};

export default Experience;

// {userObj &&
//   userObj.map((value) => {
//     return (
//       <div className="max-w-5xl mx-auto border-b-2 mb-3 pb-2">
//         <h1 className="text-md font-bold">{value.title}</h1>
//         <p className="text-sm">
//           {value.company} &#x2022; {value.city} , {value.country}
//         </p>
//         <p className="text-sm">
//           {value.employement_type} &#x2022; {value.industry}
//         </p>
//         <p className="text-xs">
//           {value.start_date} - {value.end_date}
//         </p>
//       </div>
//     );
//   })}
