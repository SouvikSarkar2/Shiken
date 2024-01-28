import MainButton from "@/components/Button";
import Question from "@/components/main/Question";
import { getQuestions } from "@/lib/data";
import Link from "next/link";
//aksdhfkjkhgkdfj
//aksjdhfjkhsjkdhfjk
const page = async ({ params }) => {
  //console.log(params);

  const name = decodeURIComponent(params.tid);
  const data = await getQuestions({ name, id: params.qid });

  if (data.length === 0) {
    return (
      <div className="bg-slate-100 h-screen justify-center flex items-center text-3xl font-bold p-8 text-[#015055] sm:text-5xl">
        More Questions Coming Soon...
        <Link className="ml-10" href={`/topic/${name}`} prefetch={false}>
          <MainButton type="back" />
        </Link>
      </div>
    );
  }

  const question = data[0];
  const options = question.options;
  //console.log(question);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-slate-100 w-screen">
      <div className="flex justify-start p-4 w-full">
        <Link href={`/topic/${name}`} prefetch={false}>
          <MainButton type="back" />
        </Link>
      </div>
      <div className="h-[70px] flex justify-start items-center text-[#015055] font-bold text-xl sm:text-3xl">
        {name}
      </div>
      <Question question={question} options={options} />
      <div className="flex justify-between w-full">
        {params.qid > 1 ? (
          <Link href={`/topic/${name}/${parseInt(params.qid) - 1}`}>
            <MainButton type="prev" />
          </Link>
        ) : (
          <div></div>
        )}
        <Link
          href={`/topic/${name}/${parseInt(params.qid) + 1}`}
          className="flex justify-end "
        >
          <MainButton type="next" />
        </Link>
      </div>
    </div>
  );
};

export default page;
