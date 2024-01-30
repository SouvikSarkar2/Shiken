"use client";

import { updateActivity } from "@/lib/action";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Question = ({ question, options }) => {
  const [isSelected, setIsSelected] = useState(null);
  const params = useParams();
  //console.log("params :", params);
  const tid = decodeURIComponent(params.tid);
  const qid = params.qid;
  useEffect(() => {
    if (isSelected) {
      updateActivity({ tid, qid });
    }
  }, [isSelected]);

  if (!question || !options) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-start sm:justify-evenly h-full items-center flex-col sm:flex-row w-full">
      <div className="sm:flex sm:justify-center sm:items-center ">
        <div className=" min-h-[340px] sm:min-h-[400px] sm:w-[380px] bg-white rounded-3xl m-3 p-3 w-[340px] flex flex-col mt-[80px] sm:mt-0">
          <div className="font-semibold">Question {question._id}</div>
          <div>
            <p className="text-lg font-semibold py-2">{question.title}</p>
          </div>
          <div
            className={`flex-1 flex flex-col justify-end gap-2 ${
              isSelected ? "pointer-events-none" : ""
            }`}
          >
            <div
              onClick={() => setIsSelected(1)}
              className={`min-h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] sm:hover:bg-[#015055] overflow-hidden sm:hover:text-white ${
                isSelected === 1
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p className="p-6 text-sm sm:text-md">{options[0].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(2)}
              className={`min-h-[40px] flex justify-center items-center rounded-full overflow-hidden  border-[#015055] border-[1.5px] sm:hover:bg-[#015055] sm:hover:text-white ${
                isSelected === 2
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p className="p-6 text-sm sm:text-md">{options[1].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(3)}
              className={`min-h-[40px] flex justify-center items-center rounded-full overflow-hidden  border-[#015055] border-[1.5px] sm:hover:bg-[#015055] sm:hover:text-white ${
                isSelected === 3
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p className="p-6 text-sm sm:text-md">{options[2].option}</p>
            </div>
            <div
              onClick={() => setIsSelected(4)}
              className={`min-h-[40px] flex justify-center items-center rounded-full overflow-hidden  border-[#015055] border-[1.5px] sm:hover:bg-[#015055] sm:hover:text-white ${
                isSelected === 4
                  ? `${
                      isSelected === question.correctOption
                        ? "bg-[#e1f396]"
                        : "bg-red-500 text-white"
                    }`
                  : ``
              }`}
            >
              <p className="p-6 text-sm sm:text-md">{options[3].option}</p>
            </div>
          </div>
        </div>
      </div>

      {isSelected ? (
        isSelected === question.correctOption ? (
          <div>
            <div className="m-4 font-bold p-5 text-xl text-[#a8bd54]">
              Correct Answer
            </div>
            <div className="m-4 font-semibold p-5 ">
              <div>
                <p>Explanation : </p>
              </div>
              <div>{question.description}</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="m-4 font-bold p-5 text-red-500">Wrong Answer</div>
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
