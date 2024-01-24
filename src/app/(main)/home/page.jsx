import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { AreaChart, Pyramid } from "lucide-react";
import SubjectCard from "@/components/main/SubjectCard";
import { getSemesters, getTopics } from "@/lib/data";
import { redirect } from "next/navigation";

const page = async () => {
  const semesters = await getSemesters({ semester: 4 });
  console.log(semesters);

  return (
    <div className="bg-[#e1f396] h-screen">
      <div className="flex flex-col justify-start h-full">
        <div className="flex justify-between flex-col sm:flex-row">
          <p className="text-3xl sm:text-4xl p-5 font-bold text-[#015055]">
            What Subject do you want to improve today?
          </p>
          <div className="flex items-center p-6 justify-end gap-3">
            <div>
              <Select>
                <SelectTrigger className="w-[120px] bg-[#015055] text-white">
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent className="bg-[#015055] text-white">
                  <SelectItem value="light">Semester 4</SelectItem>
                  <SelectItem value="dark">Semester 5</SelectItem>
                  <SelectItem value="system">Semester 6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                placeholder="Search Subject"
                className="border-2 border-[#015055] text-[#015055] sm:w-[300px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center pt-6 flex-wrap max-w-[1366px]">
            {semesters.subjects.map((subject) => (
              <SubjectCard subject={subject} key={subject._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
