import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SideLayout({ children }) {
  const session = await getServerSession();
  console.log("Session from side :", session);
  if (!session) {
    redirect("/auth/signin");
  }

  return <div className="min-h-screen bg-slate-100">{children}</div>;
}
