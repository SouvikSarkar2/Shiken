"use client";

import { CloudCog } from "lucide-react";
import { useState } from "react";

const Question = ({ question, options }) => {
  const [isSelected, setIsSelected] = useState(null);

  if (!question || !options) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-start sm:justify-evenly h-full items-center flex-col sm:flex-row w-full">
      <div className="sm:flex sm:justify-center sm:items-center ">
        <div className=" h-[340px] sm:h-[400px] sm:w-[380px] bg-white rounded-3xl m-3 p-3 w-[340px] flex flex-col mt-[80px] sm:mt-0">
          <div className="font-semibold">Question {question._id}</div>
          <div>
            <p className="text-lg font-semibold py-2">{question.title}</p>
          </div>
          <div
            className={`flex-1 flex flex-col justify-end gap-2 ${
              isSelected ? "pointer-events-none" : ""
            }`}
          >
            {/* {options.map((option) => (
              <div
                key={option.id}
                className="h-[40px] flex justify-center items-center rounded-full bg-[#e1f396] border-[#015055] border-[1.5px] hover:bg-[#015055] hover:text-white"
              >
                <p>{option.option}</p>
              </div>
            ))} */}
            <div
              onClick={() => setIsSelected(1)}
              className={`h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] hover:bg-[#015055] hover:text-white ${
                isSelected === 1
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p>{options[0].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(2)}
              className={`h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] hover:bg-[#015055] hover:text-white ${
                isSelected === 2
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p>{options[1].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(3)}
              className={`h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] hover:bg-[#015055] hover:text-white ${
                isSelected === 3
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p>{options[2].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(4)}
              className={`h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] hover:bg-[#015055] hover:text-white ${
                isSelected === 4
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p>{options[3].option}</p>
            </div>
          </div>
        </div>
      </div>

      {isSelected ? (
        isSelected === question.correctOption ? (
          <div>
            <div className="m-4 font-semibold p-5">Correct Answer</div>
            <div className="m-4 font-semibold p-5 ">
              <div>
                <p>Explanation : </p>
              </div>
              <div>{question.description}</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="m-4 font-semibold p-5">Wrong Answer</div>
            <div className="m-4 font-semibold p-5 ">
              <div>
                <p>Explanation : </p>
              </div>
              <div>{question.description}</div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};

export default Question;
