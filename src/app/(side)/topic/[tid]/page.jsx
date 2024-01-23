import Box from "@/components/main/Box";
import { getTopics } from "@/lib/data";

const page = async ({ params }) => {
  console.log(params.tid);
  const name = decodeURIComponent(params.tid);
  const topic = await getTopics({ name });
  console.log(topic);
  //console.log(params.tid);
  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex h-[100px] justify-center items-center text-4xl text-[#015055] font-bold">
        Topic Progress
      </div>
      <div className="flex justify-center">
        <div className="bg-white max-w-[1366px] flex flex-wrap gap-2 justify-center p-7 rounded-3xl">
          {topic.questions.map((question, index) => (
            <Box
              key={question._id}
              index={index}
              name={name}
              id={question._id.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
