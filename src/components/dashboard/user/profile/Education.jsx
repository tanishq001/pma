import React from "react";
import { useState } from "react";
import { useAuth } from "../../../../context/AuthProvider";
import Delete from "@mui/icons-material/DeleteOutline";

const Education = () => {
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
      institute_name: "",
      degree: "",
      field_of_study: "",
      score: "",
      start_date: "",
      end_date: "",
    },
  ]);

  const addClick = () => {
    const values = [...data];
    values.push({
      institute_name: "",
      degree: "",
      field_of_study: "",
      score: "",
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
    uploadDataToFireStoreInArray(data[0], "education");
    setShow(!show);
    removeclick();
    // console.log(data);
    // alert(data);
  };

  return (
    <>
      {profileData &&
        profileData.education?.map((value) => {
          return (
            // <div className="max-w-5xl mx-auto border-b-2 mb-3 pb-2">
            <div className="max-w-5xl mx-2 md:mx-auto flex justify-between items-center border-b-2 mb-3 pb-2">
              <div>
                <h1 className="text-md font-bold">{value.institute_name}</h1>
                <p className="text-sm">
                  {value.degree} &#x2022; {value.field_of_study} &#x2022;{" "}
                  {value.score}
                </p>
                <p className="text-xs">
                  {value.start_date} - {value.end_date}
                </p>
              </div>
              {/* <button className="font-bold">&#xFE19;</button> */}
              <Delete
                style={{ color: "red" }}
                className="cursor-pointer"
                onClick={() => handelDocumentDelete(value.id, "education")}
              />
            </div>
          );
        })}
      <form onSubmit={handlesubmit}>
        {data.length > 0 &&
          data.map((input, index) => {
            return (
              <div className="max-w-5xl md:mx-auto mb-8 mx-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-5">
                    <label for="institute_name" className={label_style}>
                      Institute Name
                    </label>
                    <input
                      type="text"
                      name="institute_name"
                      value={input.institute_name}
                      className="bg-light outline-none w-full p-1 px-1.5"
                      onChange={(e) => handlechange(index, e)}
                      required={true}
                    />
                  </div>
                  <br />
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="degree" className={label_style}>
                      Degree
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      value={input.degree}
                      className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
                      onChange={(e) => handlechange(index, e)}
                      required={true}
                    >
                      <option>Bachelors</option>
                      <option>M.Tech</option>
                      <option>MBA</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="field_of_study" className={label_style}>
                      Field of Study
                    </label>
                    <select
                      id="field_of_study"
                      name="field_of_study"
                      value={input.field_of_study}
                      className="mt-1 block w-full rounded-sm outline-none bg-light py-1.5 px-3"
                      onChange={(e) => handlechange(index, e)}
                      required={true}
                    >
                      <option>Tech</option>
                      <option>Agricultural</option>
                      <option>Finance</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 col-span-6">
                    <label for="score" className={label_style}>
                      Score
                    </label>
                    <input
                      type="text"
                      value={input.score}
                      name="score"
                      min={0}
                      max={100}
                      className="bg-light w-full py-1 pb-1.5 px-1.5 outline-none"
                      placeholder=""
                      onChange={(e) => handlechange(index, e)}
                      required={true}
                    />
                  </div>
                  <div className="md:col-span-2 col-span-6">
                    <label for="start_date" className={label_style}>
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={input.start_date}
                      name="start_date"
                      className="bg-light px-1.5 py-1 w-full"
                      onChange={(e) => handlechange(index, e)}
                      required={true}
                    />
                  </div>
                  <div className="md:col-span-2 col-span-6">
                    <label for="end_date" className={label_style}>
                      End Date
                    </label>
                    <input
                      type="date"
                      input={input.end_date}
                      name="end_date"
                      className="bg-light px-1.5 py-1 w-full"
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
            Add Education
          </button>
        </div>
      </form>
    </>
  );
};

export default Education;
