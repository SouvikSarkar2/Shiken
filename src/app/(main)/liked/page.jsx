import LikedCard from "@/components/main/LikedCard";
import SubjectCard from "@/components/main/SubjectCard";
import { getAllSemesters } from "@/lib/data";
import { User } from "@/lib/model";
import { connectToDb } from "@/lib/util";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  const email = session.user.email;
  await connectToDb();
  const user = await User.findOne({ email });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-[#e1f396] flex justify-center items-center text-4xl font-bold text-[#015055]">
        Liked Topics
      </div>
      <div className="p-6 flex flex-col sm:flex-row gap-10">
        {user?.liked.length === 0 && (
          <div className=" justify-center items-center flex w-5/6 text-xl p-6">
            Continue by Adding some topic{" "}
          </div>
        )}
        {user.liked.map((topic) => (
          <LikedCard topic={topic} key={topic} />
        ))}
      </div>
    </div>
  );
};

export default page;
