import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import("../../../public/pyramid.svg");

import { AreaChart, Pyramid } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const SubjectCard = ({ subject }) => {
  //console.log(subject.name);
  if (!subject) {
    return <div>Loading...</div>;
  }
  return (
    <Link href={`/topic/${subject.name}?page=1&limit=20`}>
      <Card className="w-[145px] h-[145px] m-1 sm:w-[240px] sm:h-[240px] sm:m-3 bg-[#F0F9CB] text-[#015055]">
        <CardHeader>
          <CardTitle className=" text-sm sm:text-lg">{subject.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <Image
            width={110}
            height={110}
            className="hidden sm:flex"
            alt="image"
            src={`/${subject.icon}`}
          ></Image>
          <Image
            width={34}
            height={34}
            className="sm:hidden"
            alt="image"
            src={`/${subject.icon}`}
          ></Image>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SubjectCard;
