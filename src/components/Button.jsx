"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { ArrowLeftCircle, Loader } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useState } from "react";

const MainButton = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignin() {
    await signIn("google", {
      callbackUrl: "/home",
    });
  }

  async function handleSignOut() {
    await signOut("google", {
      callbackUrl: "/",
    });
  }

  if (type === "continue")
    return (
      <div>
        <Button className="bg-transparent w-[130px] flex justify-between hover:bg-[#3a4e2225] ">
          <span> Continue </span>
          <Image src="/arrow-right.svg" height={10} width={25} alt="arrow" />
        </Button>
      </div>
    );

  if (type === "signin")
    return (
      <div>
        <Button
          className="p-8 text-xl text-[#e1f396] bg-[#015055] rounded-xl hover:bg-[#e1f396] hover:text-[#015055]"
          onClick={() => handleSignin()}
        >
          Signin with Google
        </Button>
      </div>
    );

  if (type === "signout")
    return (
      <div>
        <Button className="bg-[#015055]" onClick={() => handleSignOut()}>
          Signout
        </Button>
      </div>
    );

  if (type === "next")
    return (
      <div className="p-4">
        <Button className="bg-[#015055] text-white">Next</Button>
      </div>
    );

  if (type === "prev")
    return (
      <div className="p-4">
        <Button className="bg-[#015055] text-white">Prev</Button>
      </div>
    );

  if (type === "back")
    if (loading) {
      return (
        <div>
          <Button className="bg-[#015055]" type="disable">
            <Loader />
          </Button>
        </div>
      );
    }
  return (
    <div>
      <Button
        className="bg-[#015055]"
        onClick={() => {
          setLoading(true);
        }}
      >
        <ArrowLeftCircle />
      </Button>
    </div>
  );
};

export default MainButton;
