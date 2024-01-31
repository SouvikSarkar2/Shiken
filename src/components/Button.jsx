"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { ArrowLeftCircle, Heart } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toggleLikes } from "@/lib/action";
import toast from "react-hot-toast";

const MainButton = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();

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

  async function handleLikes() {
    const res = await toggleLikes({ params });
    router.refresh();
    //console.log("res :", res);
    toast.success(res, {
      duration: 3000,
      style: {
        border: "1px solid #015055",
        padding: "16px",
        color: "#015055",
      },
      iconTheme: {
        primary: "#015055",
        secondary: "#FFFAEE",
      },
    });
  }

  if (type === "notLiked") {
    return (
      <div>
        <button className="mx-6 bg-inherit" onClick={() => handleLikes()}>
          <Heart className="text-[#015055]" />
        </button>
      </div>
    );
  }

  if (type === "liked") {
    return (
      <div>
        <button className="mx-6 bg-inherit" onClick={() => handleLikes()}>
          <Heart className="text-[#015055] fill-[#015055]" />
        </button>
      </div>
    );
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

  if (type === "back") {
    if (loading) {
      return (
        <div>
          <Button className="bg-[#015055]" type="disable">
            <Image
              src={"/loading.svg"}
              height={30}
              width={30}
              alt="loading..."
            />
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
            setTimeout(() => {
              router.refresh();
            }, 100);
          }}
        >
          <ArrowLeftCircle />
        </Button>
      </div>
    );
  }
};

export default MainButton;
