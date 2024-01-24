"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";

const MainButton = ({ type }) => {
  async function handleSignin() {
    await signIn("google", {
      callbackUrl: "/home",
    });
  }

  async function handleSignOut() {
    await signOut();
    redirect("/");
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
        <Button onClick={() => handleSignin()}>Signin with Google</Button>
      </div>
    );

  if (type === "signout")
    return (
      <div>
        <Button onClick={() => handleSignOut()}>Signout</Button>
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
    return (
      <div>
        <Button className="bg-[#015055]">
          <ArrowLeftCircle />
        </Button>
      </div>
    );
};

export default MainButton;
