import { getQuestions, getTopics } from "@/lib/data";

const page = async ({ params }) => {
  console.log(params);
  const name = decodeURIComponent(params.tid);
  await getQuestions({ name, id: params.qid });

  return <div>{params.qid}</div>;
};

export default page;
