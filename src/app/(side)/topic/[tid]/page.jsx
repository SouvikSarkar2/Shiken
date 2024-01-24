import MainButton from "@/components/Button";
import Box from "@/components/main/Box";
import { getTopics } from "@/lib/data";
import Link from "next/link";

const page = async ({ params }) => {
  const name = decodeURIComponent(params.tid);
  const topic = await getTopics({ name });
  console.log("topic :", topic);

  if (!topic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-200 h-screen">
      <div className="p-6">
        <Link href={`/home`}>
          <MainButton type="back" />
        </Link>
      </div>
      <div className="flex h-[100px] justify-center items-center text-4xl text-[#015055] font-bold">
        Topic Progress
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
