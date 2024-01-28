import { User } from "@/lib/model";
import { getServerSession } from "next-auth";
import Link from "next/link";

const Box = async ({ index, name, id }) => {
  const session = await getServerSession();
  const email = session?.user?.email;
  const userData = await User.findOne({ email });
  const isAttempted = userData?.activity?.[name]?.[id];
  //console.log(isAttempted);
  return (
    <Link href={`/topic/${name}/${id}`}>
      <div
        className={`sm:h-[70px] h-[50px] w-[50px] sm:w-[70px]  rounded-lg sm:rounded-3xl flex justify-center items-center sm:text-3xl  text-lg font-bold ${
          isAttempted
            ? "text-[#e1f396] bg-[#015055]"
            : "text-[#015055] bg-[#e1f396]"
        } m-1`}
      >
        {index}
      </div>
    </Link>
  );
};

export default Box;
