"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { updatePoints } from "@/lib/action";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

const Quiz = ({ questions }) => {
  const [limit, setLimit] = useState(10);
  const [started, setStarted] = useState(false);
  const [point, setPoint] = useState(0);
  const [id, setId] = useState(0);
  const [count, setCount] = useState(0);
  const [isSelected, setIsSelected] = useState(null);
  const [seconds, setSeconds] = useState(200);

  useEffect(() => {
    let intervalId;

    if (started) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [started]);

  let question = questions?.questions[id];
  let options = question?.options;
  //console.log(question);
  const length = questions.questions.length;

  const router = useRouter();

  useEffect(() => {
    question = questions.questions[id];
    setIsSelected(null);
  }, [id]);
  /* console.log("id :", id);
  console.log("point :", point);
  console.log("count :", count); */

  const handleChange = (e) => {
    //console.log(e.target.value);
    const num = parseInt(e.target.value, 10);
    //console.log("num :", num);
    //console.log("id :", id);
    if (isNaN(num) || num <= 0) {
      setId(0);
    } else {
      setId(num - 1);
    }
  };

  const handleExit = async () => {
    await updatePoints({ point });
    router.push("/home");
  };

  if (!started) {
    return (
      <div className="flex flex-col overflow-hidden bg-[#E2E8F0]">
        <div className="flex flex-col   items-center">
          <span className="text-xl font-semibold text-[#015055] p-6">
            Set Limit
          </span>
          <div className="flex gap-10 justify-center w-screen">
            <Button
              className="bg-[#015055] text-white text-2xl size-15"
              onClick={() => setLimit(15)}
            >
              15
            </Button>
            <Button
              className="bg-[#015055] text-white text-2xl size-15"
              onClick={() => setLimit(20)}
            >
              20
            </Button>
            <Button
              className="bg-[#015055] text-white text-2xl size-15"
              onClick={() => setLimit(30)}
            >
              30
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[200px]">
          <div className="text-xl font-semibold text-[#015055] p-6">
            Select Starting question no
          </div>
          <div>
            <Input
              className="max-w-[100px] border-2 border-[#015055] min-h-[50px]"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="min-h-[400px] flex justify-center items-center">
          <Button
            className="text-2xl gap-2 bg-[#015055] px-6 py-6"
            onClick={() => {
              setStarted(true);
              setSeconds(limit * 20);
            }}
          >
            Start
            <Play />
          </Button>
        </div>
      </div>
    );
  }

  if (count === limit || id === length || seconds <= 0) {
    return (
      <div>
        <div className="text-2xl flex-col gap-6 font-bold text-[#015055] flex justify-center items-center min-h-[300px]">
          Quiz has ended
          <div className="flex text-lg justify-center items-center">
            You Earned : {point} Points
          </div>
        </div>

        <div className="flex w-screen justify-end p-6">
          <Button
            className="bg-[#015055] text-white text-lg p-4"
            onClick={handleExit}
          >
            go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-[100px]">
        <div className="flex min-h-[100px] w-screen sm:w-1/2 justify-center items-center gap-6">
          <div className="text-lg font-bold text-[#015055]">Time Left :</div>
          <div className="font-bold text-lg text-[#015055]">
            {Math.floor(seconds / 60)} min{" "}
            {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60} seconds
          </div>
        </div>

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
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => {
                  setIsSelected(option.id);
                  if (option.id === question.correctOption) {
                    setPoint(point + 5);
                    console.log("point :", point);
                  }
                }}
                className={`min-h-[40px] flex justify-center items-center rounded-full  border-[#015055] border-[1.5px] sm:hover:bg-[#015055] overflow-hidden sm:hover:text-white ${
                  isSelected === option.id
                    ? `${
                        isSelected === question.correctOption
                          ? "bg-[#e1f396]"
                          : "bg-red-500 text-white"
                      }`
                    : ``
                }`}
              >
                <p className="p-6 text-sm sm:text-md">
                  {options[option.id - 1].option}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-screen m-4 p-6">
        <Button
          className="text-white bg-[#015055]"
          onClick={() => {
            setId(id + 1);
            setCount(count + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
