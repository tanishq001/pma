import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthProvider";

const About = () => {
  const { currentUser, uploadDataToFireStore, profileData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [AboutData, setAboutData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    date_of_Birth: "",
    nationality: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    state: "",
  });

  const handelChange = (e) => {
    setAboutData({ ...AboutData, [e.target.name]: e.target.value });

    const allKeysHaveValues = Object.keys(AboutData).every((key) => {
      return (
        AboutData[key] !== "" &&
        AboutData[key] !== null &&
        AboutData[key] !== undefined
      );
    });
    setLoading(allKeysHaveValues);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    uploadDataToFireStore(AboutData);
    e.target.reset();
    setLoading(!loading);
  };

  return (
    <>
      <div className="my-5  md:mt-0">
        <form onSubmit={handelSubmit}>
          <div className="overflow-hidden max-w-5xl md:mx-auto mx-2">
            <div className=" sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="firstName"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autocomplete="off"
                    className="mt-1 block w-full rounded-sm py-1 border-gray-300 bg-light outline-none px-1.5"
                    onChange={handelChange}
                    defaultValue={profileData?.firstName}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autocomplete="family-name"
                    className="mt-1 block w-full rounded-sm py-1 border-gray-300 bg-light  outline-none px-1.5"
                    onChange={handelChange}
                    defaultValue={profileData?.lastName}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autocomplete="off"
                    value={currentUser?.email}
                    className="mt-1 block w-full rounded-sm py-1 bg-light  outline-none px-1.5"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autocomplete="off"
                    className="mt-1 block w-full rounded-sm py-1 border-gray-300 bg-light  outline-none px-1.5"
                    onChange={handelChange}
                    defaultValue={profileData?.phoneNumber}
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    autocomplete="gender"
                    className="mt-1 block w-full rounded-sm  bg-light py-1.5 px-3"
                    onChange={handelChange}
                    defaultValue={profileData?.gender}
                  >
                    <option value="">Choose</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>others</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="date_of_Birth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="date_of_Birth"
                    id="date_of_Birth"
                    autocomplete="off"
                    className="mt-1 block w-full rounded-sm py-1 bg-light px-3"
                    onChange={handelChange}
                    max={new Date()}
                    defaultValue={profileData?.date_of_Birth}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="nationality"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nationality
                    <select
                      id="nationality"
                      name="nationality"
                      autocomplete="off"
                      className="mt-1 block w-full rounded-sm  bg-light py-1.5 px-3"
                      onChange={handelChange}
                      defaultValue={profileData?.nationality}
                    >
                      <option value="">Choose</option>
                      <option>Indian</option>
                      <option>Algerian</option>
                      <option>American</option>
                    </select>
                  </label>
                </div>

                <div className="md:col-span-3 col-span-full">
                  <label
                    for="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <textarea
                    className="bg-light mt-1 py-1 px-3 [resize:none] w-full  outline-none"
                    rows="5"
                    cols="40"
                    id="address"
                    name="address"
                    onChange={handelChange}
                    defaultValue={profileData?.address}
                  ></textarea>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 col-span-6 md:col-span-2 space-y-3 md:space-y-0">
                  <div className="md:col-span-1">
                    <label
                      for="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="city"
                      className="mt-1 block w-full rounded-sm py-1 bg-light  outline-none px-1.5"
                      onChange={handelChange}
                      defaultValue={profileData?.city}
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className="mt-1 block w-full rounded-sm  bg-light py-1 md:px-3"
                      onChange={handelChange}
                      defaultValue={profileData?.country}
                    >
                      <option value="">choose</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label
                      for="zipCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      name="zipCode"
                      id="zipCode"
                      autocomplete="email"
                      className="mt-1 block w-full rounded-sm py-1 bg-light  outline-none px-1.5"
                      onChange={handelChange}
                      defaultValue={profileData?.zipCode}
                    />
                  </div>
                  <div className="col-span-1 md:ml-2">
                    <label
                      for="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autocomplete="email"
                      className="mt-1 block w-full rounded-sm py-1 bg-light  outline-none px-1.5"
                      onChange={handelChange}
                      defaultValue={profileData?.state}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                disabled={!loading}
                className={`inline-flex justify-center rounded-md py-2 px-4 text-sm font-medium  focus:outline-none ${
                  !loading ? "bg-light text-black" : "bg-main text-white"
                }`}
                onSubmit={handelSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default About;
