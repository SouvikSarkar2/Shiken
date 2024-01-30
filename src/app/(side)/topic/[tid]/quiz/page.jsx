import Quiz from "@/components/main/Quiz";
import { getTopics } from "@/lib/data";

const page = async ({ params }) => {
  //   console.log("params", params);
  const name = decodeURIComponent(params.tid);
  const questions = await getTopics({ name });
  //console.log(question);
  if (!questions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-[#E2E8F0]">
      <div className="h-[100px] sm:mb-[100px] flex justify-center items-center text-2xl sm:text-4xl font-bold text-[#015055]">
        Quiz Section
      </div>

      <Quiz questions={JSON.parse(JSON.stringify(questions))} />
    </div>
  );
};

export default page;
