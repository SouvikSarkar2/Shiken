import Navbar from "@/components/main/Navbar";
import { createUser } from "@/lib/action";
import { User } from "@/lib/model";
import { connectToDb } from "@/lib/util";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MainLayout({ children }) {
  const session = await getServerSession();
  console.log("Session from main :", session);

  if (!session) {
    redirect("/auth/signin");
  }
  const email = session.user.email;
  connectToDb();
  let user = await User.findOne({ email });
  // console.log(user);
  if (!user) {
    user = await createUser(session);
  }
  return (
    <div className="relative ">
      <Navbar session={session} user={JSON.parse(JSON.stringify(user))} />
      {children}
    </div>
  );
}
