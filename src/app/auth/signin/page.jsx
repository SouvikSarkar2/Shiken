"use client";

import MainButton from "@/components/Button";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div>
      <MainButton type="signin" />
    </div>
  );
};

export default page;
