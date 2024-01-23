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
  //console.log(subject);
  if (!subject) {
    return <div>Loading...</div>;
  }
  return (
    <Link href={`/topic/${subject.name}`}>
      <Card className="w-[145px] h-[145px] m-1 sm:w-[280px] sm:h-[280px] sm:m-3 bg-[#F0F9CB] text-[#015055]">
        <CardHeader>
          <CardTitle>{subject.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center"></CardContent>
      </Card>
    </Link>
  );
};

export default SubjectCard;
