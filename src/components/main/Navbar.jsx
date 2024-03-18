"use client";

import MainButton from "../Button";
import Link from "next/link";
import { useState } from "react";
import { BarChart2, Heart, Home, User2 } from "lucide-react";

const Navbar = ({ session, user }) => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="flex justify-between p-3 sm:p-6 bg-[#e1f396]">
      <div>
        <p>
          <span>Hello </span>
          <span className="px-1 font-mono"> {user.name}</span>
        </p>
      </div>
      <div>
        <MainButton type="signout" />
      </div>

      <div className="fixed sm:absolute bottom-5 sm:bottom-auto sm:top-7 flex justify-center sm:justify-end w-screen sm:right-[9vw] ">
        <div className="text-[#015055] mr-4 font-semibold flex items-center justify-between  sm:right-[15dvw] bg-[#015055] sm:bg-[#E1F396] px-[2.5px] py-[2.5px] sm:px-0  rounded-full sm:rounded-sm w-[300px] h-[45px] sm:h-[33px]">
          <Link onClick={() => setIsActive("Home")} href="/home">
            {isActive === "Home" ? (
              <span className="flex gap-1 bg-white px-[16px] py-[8px] sm:py-[4.5px]  rounded-full sm:rounded-sm ">
                <Home color="#015055" />
                <span>Home</span>
              </span>
            ) : (
              <span className="pl-5 flex justify-end">
                <Home color="gray" />
              </span>
            )}
          </Link>
          <Link onClick={() => setIsActive("Leaderboard")} href="/leaderboard">
            {isActive === "Leaderboard" ? (
              <span className="flex gap-1 bg-white px-[16px] py-[8px]  rounded-full sm:rounded-sm sm:py-[4.5px]">
                <BarChart2 color="#015055" />
                <span>Leaderboard</span>
              </span>
            ) : (
              <span>
                <BarChart2 color="gray" />
              </span>
            )}
          </Link>
          <Link onClick={() => setIsActive("Liked")} href="/liked">
            {isActive === "Liked" ? (
              <span className="flex gap-1 bg-white px-[16px] py-[8px] rounded-full sm:rounded-sm sm:py-[4.5px]">
                <Heart color="#015055" />
                <span>Liked</span>
              </span>
            ) : (
              <span>
                <Heart color="gray" />
              </span>
            )}
          </Link>
          <Link onClick={() => setIsActive("User")} href="/user">
            {isActive === "User" ? (
              <span className="flex gap-1  bg-white px-[16px] py-[8px] rounded-full sm:rounded-sm sm:py-[4.5px]">
                <User2 color="#015055" />
                <span>User</span>
              </span>
            ) : (
              <span className="pr-5 flex justify-start">
                <User2 color="gray" />
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
