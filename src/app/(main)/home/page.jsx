import SearchForm from "@/components/main/SearchForm";
import SubjectCard from "@/components/main/SubjectCard";
import { getSemesters } from "@/lib/data";
import { connectToDb } from "@/lib/util";

const page = async ({ searchParams }) => {
  //console.log(searchParams);
  await connectToDb();
  const semesters = await getSemesters({ semester: searchParams.sm | 4 });
  //console.log(semesters);
  let result = semesters?.subjects;
  if (searchParams.sb) {
    result = semesters?.subjects?.filter((semester) =>
      semester.name.toLowerCase().includes(searchParams.sb.toLowerCase())
    );
  }
  //console.log(result);
  return (
    <div className="bg-[#e1f396]">
      <div className="flex flex-col justify-start h-full">
        <div className="flex justify-between flex-col sm:flex-row">
          <p className="text-3xl sm:text-4xl p-5 font-bold text-[#015055] font-mono">
            What Subject do you want to improve today?
          </p>
          <SearchForm />
        </div>
        <div className="flex justify-start items-start">
          <div className="flex justify-center items-center pt-6 flex-wrap max-w-[1366px]">
            {result?.length === 0 && (
              <div className="h-screen w-screen flex justify-center items-start text-xl sm:text-3xl text-[#015055] font-bold">
                No Subject Found
              </div>
            )}
            {result ? (
              result?.map((subject) => (
                <SubjectCard subject={subject} key={subject._id} />
              ))
            ) : (
              <div className="h-screen w-screen flex justify-center items-start text-xl sm:text-3xl text-[#015055] font-bold">
                No Subject Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
