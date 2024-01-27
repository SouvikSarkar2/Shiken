"use client";

import { redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("e", e.target[0].value);
    if (e.target[0].value && e.target[1].value) {
      router.push(`home?sm=${e.target[0].value}&&sb=${e.target[1].value}`);
      return;
    }
    if (e.target[0].value) {
      router.push(`home?sm=${e.target[0].value}`);
      return;
    }
    if (e.target[1].value) {
      router.push(`home?sb=${e.target[1].value}`);
      return;
    }
    router.push("/home");
  };

  return (
    <form
      className="flex items-center p-6 justify-end gap-3"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          placeholder="Semester"
          className="border-2 border-[#015055] text-[#015055] sm:w-[300px]"
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          className="border-2 border-[#015055] text-[#015055] sm:w-[300px]"
        />
      </div>
      <div>
        <Button className="bg-[#015055]" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
