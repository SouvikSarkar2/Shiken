"use client";

import { getServerSession } from "next-auth";
import MainButton from "../Button";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { BarChart2, Heart, Home, User, User2 } from "lucide-react";

const Navbar = ({ session }) => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="flex justify-between p-3 sm:p-6 bg-[#e1f396]">
      <div>
        <p>
          <span>Hello </span>
          <span className="px-1"> {session.user.name}</span>
        </p>
      </div>
      <div>
        <MainButton type="signout" />
      </div>
      <div className="text-[#015055] fixed sm:absolute font-semibold flex items-center justify-between bottom-10 sm:top-5 sm:right-[15dvw] bg-[#015055] px-[2.5px] py-[2.5px]  rounded-full w-[300px] h-[45px]">
        <Link onClick={() => setIsActive("Home")} href="/home">
          {isActive === "Home" ? (
            <span className="flex gap-1 bg-white px-[16px] py-[8px] rounded-full ">
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
            <span className="flex gap-1 bg-white px-[16px] py-[8px] rounded-full">
              <BarChart2 color="#015055" />
              <span>Leaderboard</span>
            </span>
          ) : (
            <span>
              <BarChart2 color="gray" />
            </span>
          )}
        </Link>
        <Link onClick={() => setIsActive("Liked")} href="liked">
          {isActive === "Liked" ? (
            <span className="flex gap-1 bg-white px-[16px] py-[8px] rounded-full">
              <Heart color="#015055" />
              <span>Liked</span>
            </span>
          ) : (
            <span>
              <Heart color="gray" />
            </span>
          )}
        </Link>
        <Link onClick={() => setIsActive("User")} href="user">
          {isActive === "User" ? (
            <span className="flex gap-1  bg-white px-[16px] py-[8px] rounded-full">
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
  );
};

export default Navbar;
