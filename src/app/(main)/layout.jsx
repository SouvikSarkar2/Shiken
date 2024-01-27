import Navbar from "@/components/main/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MainLayout({ children }) {
  const session = await getServerSession();
  //console.log("Session from main :", session);

  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <div className="relative ">
      <Navbar session={session} />
      {children}
    </div>
  );
}
