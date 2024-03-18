"use client";

import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { updateUser } from "@/lib/action";
import { useRouter } from "next/navigation";

export default function EditForm({ user }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUser(data);
    router.push("/user");
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center p-2"
      >
        <label className="text-xl w-4/5">Username</label>
        <Input
          defaultValue={user?.name}
          {...register("name")}
          className="w-5/6 p-1 m-4 bg-[#f7fce8]"
        />
        <label className="text-xl w-4/5">Description</label>
        <Textarea
          defaultValue={user?.description}
          {...register("description")}
          className="w-5/6 p-1 m-4 bg-[#f7fce8]"
        />
        <label className="text-xl w-4/5">Image URL</label>
        <Input
          defaultValue={user?.image}
          {...register("image")}
          className="w-5/6 p-1 m-4 bg-[#f7fce8]"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit" className="w-5/6 bg-[#015055]">
          Submit
        </Button>
      </form>
    </div>
  );
}
