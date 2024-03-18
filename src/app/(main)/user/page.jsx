import { User } from "@/lib/model";
import { connectToDb } from "@/lib/util";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user?.email;
  await connectToDb();
  const user = await User.findOne({ email });
  const description = user.description;
  const image = user?.image;
  const points = user?.points;
  return (
    <div className=" flex flex-col justify-start p-6 items-center  text-[#015055] min-h-[500px] font-mono">
      <div className="max-h-[250px] max-w-[250px] rounded-full flex justify-center items-center overflow-hidden border-4 border-[#015055]">
        <Image
          className="hidden sm:flex"
          src={image ? image : "/avatar.jpg"}
          height={250}
          width={250}
          alt="User Image"
        />
        <Image
          className="sm:hidden"
          src={image ? image : "/avatar.jpg"}
          height={200}
          width={200}
          alt="User Image"
        />
      </div>
      <div className="text-xl sm:text-3xl font-bold text-[#015055] p-2 sm:p-6">
        {user.name ? user.name : session.user.name}
      </div>
      <div className="flex flex-col sm:flex-row w-screen">
        <div className="sm:w-2/3 border-2 border-[#015055] rounded-lg p-2 m-2">
          <div className="font-semibold">Description --</div>
          {description ? description : "Click Edit To add Description"}
        </div>
        <div className="min-h-[100px] sm:min-h-[200px] flex justify-center items-center text-xl sm:text-2xl font-bold sm:w-1/3">
          {points ? points : "0"} TOTAL POINTS
        </div>
      </div>
      <div className="flex justify-end w-screen p-10">
        <Link
          className="bg-[#015055] px-2 py-1 text-white rounded-sm"
          href="/new"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default page;
