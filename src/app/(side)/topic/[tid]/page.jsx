import MainButton from "@/components/Button";
import Box from "@/components/main/Box";
import { Button } from "@/components/ui/button";
import { getTopics } from "@/lib/data";
import { User } from "@/lib/model";
import { TriangleLeftIcon } from "@radix-ui/react-icons";
import { ArrowBigRight, ArrowBigRightDash, Triangle } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

const page = async ({ params }) => {
  const name = decodeURIComponent(params.tid);
  const topic = await getTopics({ name });
  const session = await getServerSession();
  const email = session.user.email;
  const user = await User.findOne({ email });
  const likedTopics = user.liked;
  const top = decodeURIComponent(params.tid);
  const topicIdx = likedTopics.indexOf(top);
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
      <div className="flex h-[100px] justify-center items-center text-4xl text-[#015055] font-bold">
        Topic Progress
        {topicIdx === -1 ? (
          <MainButton type="notLiked" />
        ) : (
          <MainButton type="liked" />
        )}
      </div>
      <div className="flex justify-center">
        <div className="bg-white max-w-[1366px] flex flex-wrap gap-2 justify-center p-7 rounded-3xl">
          {topic.questions.map((question) => (
            <Box
              key={question._id}
              index={question._id}
              name={name}
              id={question._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
