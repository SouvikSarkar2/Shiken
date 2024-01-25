"use client";

import MainButton from "@/components/Button";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 md:gap-20 justify-center items-center bg-[#e1f396] h-screen">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#015055]">
        Almost There !
      </h1>
      <MainButton type="signin" />
    </div>
  );
};

export default page;
