import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Heading from "../../higherOrderComponents/Heading";

const data = [
  {
    id: 1,
    question:
      "What is the difference between Basic and Advanced Essay & SOP Grading Tool?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ullamcorper. In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 2,
    question:
      "What is the difference between Basic and Advanced Essay & SOP Grading Tool?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ullamcorper. In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 3,
    question:
      "What is the difference between Basic and Advanced Essay & SOP Grading Tool?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ullamcorper. In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 4,
    question:
      "What is the difference between Basic and Advanced Essay & SOP Grading Tool?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ullamcorper. In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
];

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center mx-2">
      <div className="m-2 md:px-5  pl-2 py-3 bg-light sm:w-3/4 w-full mx-auto rounded-lg ">
        <h1
          className="sm:font-bold font-semibold flex justify-between items-center cursor-pointer px-2 md:px-0"
          onClick={() => setShow(!show)}
        >
          {question}
          <span className="cursor-pointer">
            {show ? (
              <ExpandLessIcon fontSize="large" />
            ) : (
              <ExpandMoreIcon fontSize="large" />
            )}
          </span>
        </h1>
        <div className="overflow-hidden mr-10 px-2 md:px-0">
          {
            <p
              className={
                show
                  ? "pt-2 transition-all ease-in duration-100  h-full "
                  : "pt-0 transition-all ease-in h-0"
              }
            >
              {show && answer}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="md:mb-20 mb-8">
      <Heading heading="Frequently Asked Questions" />
      {data.map((item) => {
        const { id } = item;
        return <Accordian key={id} {...item} />;
      })}
    </div>
  );
};

export default FAQ;
