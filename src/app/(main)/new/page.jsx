import EditForm from "@/components/main/EditForm";
import { User } from "@/lib/model";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  const email = session?.user?.email;
  const user = await User.findOne({ email });
  return (
    <div>
      <div className="flex justify-center p-10 text-2xl sm:text-3xl font-semibold ">
        Edit Your User Data
      </div>
      <div className="">
        <EditForm user={JSON.parse(JSON.stringify(user))} />
      </div>
    </div>
  );
};

export default page;
