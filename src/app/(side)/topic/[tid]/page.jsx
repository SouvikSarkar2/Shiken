import MainButton from "@/components/Button";
import Box from "@/components/main/Box";
import { Button } from "@/components/ui/button";
import { getTopics } from "@/lib/data";
import { User } from "@/lib/model";
import { ArrowBigRightDash } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const page = async ({ params, searchParams }) => {
  // console.log(searchParams);
  const page = parseInt(searchParams.page);
  const limit = parseInt(searchParams.limit);
  console.log(page);
  console.log(limit);
  const skip = (page - 1) * limit;
  console.log(skip);
  const name = decodeURIComponent(params.tid);
  const topic = await getTopics({ name, limit, skip });
  console.log("topic :", topic);
  const session = await getServerSession();
  const email = session.user.email;
  const user = await User.findOne({ email });
  const likedTopics = user.liked;
  const top = decodeURIComponent(params.tid);
  const topicIdx = likedTopics.indexOf(top);
  const len = topic.questions.length;
  console.log(len);
  //console.log("topic :", topic);

  if (!topic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="p-6 flex justify-between items-center">
        <Link href={`/home`}>
          <MainButton type="back" />
        </Link>
        <Link href={`/topic/${name}/quiz`}>
          <Button className="bg-[#015055] text-white gap-1">
            QUIZ
            <ArrowBigRightDash className="size-[25px]" />
          </Button>
        </Link>
      </div>
      <div className="flex h-[100px] justify-center items-center text-2xl sm:text-4xl text-[#015055] font-bold">
        Topic Progress
        {topicIdx === -1 ? (
          <MainButton type="notLiked" />
        ) : (
          <MainButton type="liked" />
        )}
      </div>
      <div className="flex justify-center">
        <div className="bg-white max-w-[1366px] flex flex-wrap gap-2 justify-center p-7 rounded-3xl">
          {topic.questions.slice(skip, skip + limit).map((question) => (
            <Box
              key={question._id}
              index={question._id}
              name={name}
              id={question._id}
            />
          ))}
        </div>
      </div>
      <div>
        <Pagination>
          <PaginationContent className=" p-4 gap-4">
            <PaginationItem>
              {page !== 1 && (
                <PaginationPrevious
                  className="bg-[#015055] text-[#E1F396]"
                  href={`?page=${page - 1}&limit=${limit}`}
                />
              )}
            </PaginationItem>

            <PaginationItem>
              {page * limit < len && (
                <PaginationNext
                  className="bg-[#015055] text-[#E1F396]"
                  href={`?page=${page + 1}&limit=${limit}`}
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default page;
