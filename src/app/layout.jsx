import { getServerSession } from "next-auth";
import "./globals.css";
import SessionProvider from "@/components/main/SessionProvider";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  icons: {
    icon: "/shiken.svg",
  },
  title: "S  H  i  K  e  N",
  description: "A simple Quiz app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="h-screen bg-[#e1f396]">
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={session}>
            <Toaster />
            {children}
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
